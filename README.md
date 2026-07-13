# Colorfold — prototype outline

Colorfold is a compact connection puzzle for early design exploration.

## Core loop

- The board is a 4×4 grid containing four colours from an Okabe–Ito-derived,
  colourblind-aware palette.
- Each of the nine internal corners has a clockwise-rotation control. It rotates
  the four surrounding squares by 90 degrees clockwise.
- The puzzle is solved when the squares of every colour each form a single
  orthogonally connected component. Diagonal contact does not count.

## Prototype decisions

- The interface borrows Digitiler's soft, quiet card treatment: pale background,
  rounded square tiles, small information affordance, and restart/new controls.
- Each puzzle begins as four connected 2×2 colour groups, then is scrambled by
  six to nine legal reversals. This guarantees a solution without needing a
  solver or a precomputed puzzle catalogue.
- The tiles form a close 4×4 background grid. Rotation controls are overlaid at
  the nine internal junctions, keeping the actions clear without opening large
  gutters between tiles.
- Coloured status dots show which colour groups are presently connected. A
  completion notice and move count provide minimal feedback without imposing an
  optimality target yet.

## Useful next experiments

- Compare row/column reversal against rotation, cyclic shift, or selective
  reversal rules.
- Vary the starting connected shapes and colour counts (two to four), then use a
  breadth-first solver to measure shortest solution lengths and duplicate states.
- Try asymmetric targets, non-uniform colour populations, or boards larger than
  4×4.
- Test whether the connection indicators help learning or give away too much.

## Local preview

From this repository root:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/colorfold/`.
