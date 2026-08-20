#!/usr/bin/env bash
# Optimize an image or video for public/ before committing it.
#
# Usage: scripts/optimize-media.sh path/to/file.png [path/to/file2.mp4 ...]
#
# Images (.png/.jpg/.jpeg): downscaled so the longer edge is <=2200px,
#   re-saved with optimization. Overwrites in place.
# Videos (.mp4/.mov): re-encoded to h264/yuv420p, scaled to 1280px wide,
#   capped at 30fps, faststart flag for web streaming. Overwrites in place
#   (audio is dropped — these are background/demo clips, not videos with
#   sound; edit the ffmpeg call below if you need audio kept).
#
# Requires: ffmpeg, python3 with Pillow (pip install Pillow if missing).

set -euo pipefail

if [ "$#" -eq 0 ]; then
  echo "Usage: scripts/optimize-media.sh <file> [file...]" >&2
  exit 1
fi

optimize_image() {
  local f="$1"
  python3 - "$f" <<'PY'
import sys, os
from PIL import Image

path = sys.argv[1]
before = os.path.getsize(path)
im = Image.open(path)
if max(im.size) > 2200:
    im.thumbnail((2200, 2200), Image.LANCZOS)
im.save(path, optimize=True)
after = os.path.getsize(path)
print(f"{path}: {before/1024:.0f}KB -> {after/1024:.0f}KB, {im.size}")
PY
}

optimize_video() {
  local f="$1"
  local tmp
  tmp="$(mktemp --suffix=.mp4)"
  ffmpeg -y -i "$f" -an -vf "scale=1280:-2,fps=30" \
    -c:v libx264 -crf 28 -preset veryfast -pix_fmt yuv420p \
    -movflags +faststart "$tmp" -loglevel error
  local before after
  before=$(stat -c%s "$f")
  mv "$tmp" "$f"
  after=$(stat -c%s "$f")
  echo "$f: $((before/1024))KB -> $((after/1024))KB"
}

for f in "$@"; do
  if [ ! -f "$f" ]; then
    echo "skip (not found): $f" >&2
    continue
  fi
  case "$f" in
    *.png|*.PNG|*.jpg|*.JPG|*.jpeg|*.JPEG)
      optimize_image "$f"
      ;;
    *.mp4|*.MP4|*.mov|*.MOV)
      optimize_video "$f"
      ;;
    *)
      echo "skip (unsupported type): $f" >&2
      ;;
  esac
done
