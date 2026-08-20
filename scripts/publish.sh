#!/usr/bin/env bash
# Publish current changes: commit on the working branch, push it, then
# fast-forward main to match and push main too.
#
# Usage: scripts/publish.sh "commit message"
#
# Notes:
# - Stages everything currently tracked/modified (git add -A) plus any new
#   files. If you only want to commit specific files, `git add` them first
#   and run with STAGED_ONLY=1 scripts/publish.sh "message".
# - Safe to re-run: if there's nothing to commit it just syncs branches.

set -euo pipefail

MSG="${1:-}"
if [ -z "$MSG" ]; then
  echo "Usage: scripts/publish.sh \"commit message\"" >&2
  exit 1
fi

WORK_BRANCH="$(git branch --show-current)"
if [ -z "$WORK_BRANCH" ]; then
  echo "Not on a branch (detached HEAD?). Aborting." >&2
  exit 1
fi

retry_push() {
  local branch="$1"
  local delay=2
  for i in 1 2 3 4; do
    if git push origin "$branch"; then
      return 0
    fi
    echo "push failed, retrying in ${delay}s..." >&2
    sleep "$delay"
    delay=$((delay * 2))
  done
  echo "push to $branch failed after retries" >&2
  return 1
}

if [ "${STAGED_ONLY:-0}" != "1" ]; then
  git add -A
fi

if ! git diff --cached --quiet; then
  git commit -m "$MSG

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
else
  echo "Nothing staged — skipping commit, syncing branches only."
fi

git fetch origin --quiet
retry_push "$WORK_BRANCH"

git checkout main --quiet
git merge "$WORK_BRANCH" --quiet
retry_push main
git checkout "$WORK_BRANCH" --quiet

echo "Done. $WORK_BRANCH and main are in sync with origin."
