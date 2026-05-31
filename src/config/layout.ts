/** Max content width; was 850px, +20px per side */
export const CONTAINER_MAX_WIDTH = 890;

export const GRID_GAP = 24;

/** Primary grid: 3 columns, 2 gaps (cards 01–04) */
export const PRIMARY_COL_WIDTH = Math.round(
  (CONTAINER_MAX_WIDTH - GRID_GAP * 2) / 3,
);

export const PRIMARY_WIDE_WIDTH = PRIMARY_COL_WIDTH * 2 + GRID_GAP;

/** Bento narrow column (card 09, squares 06–07 height) */
export const BENTO_COL_WIDTH = Math.round(
  (CONTAINER_MAX_WIDTH - GRID_GAP) / 3,
);

export const BENTO_WIDE_WIDTH = BENTO_COL_WIDTH * 2 + GRID_GAP;
