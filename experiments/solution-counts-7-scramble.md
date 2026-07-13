# Solution counts for seven-rotation scrambles

Run on 2026-07-14 using:

```sh
node experiments/count-solutions.js --seed SEED --scramble 7 --max-moves 7
```

Each entry begins with a randomly selected 4×4 tetromino tiling, assigns the
four colours using the listed permutation, and applies the listed seven
anticlockwise scramble rotations. The count is the number of distinct clockwise
control sequences which first reach a fully connected state at each depth. A
sequence stops being extended when it reaches a solved state.

Across these ten seeds, the total number of solutions of length seven or fewer
ranges from 163 to 7,520 (mean 2,906.6; median 2,328.5).

## Seed 2126594543

- Tiling: `0122012201130333`
- Colour permutation: `2130`
- Scramble: `(2,1) (3,2) (3,2) (1,2) (3,3) (3,2) (1,3)`
- Start:

  ```text
  2 3 3 3
  1 1 3 1
  2 0 0 0
  2 0 1 2
  ```

- First completion: 0: 0; 1: 0; 2: 0; 3: 0; 4: 0; 5: 11; 6: 174; 7: 772.
- Total at seven moves or fewer: **957**.

## Seed 2120562632

- Tiling: `0000112213221333`
- Colour permutation: `0132`
- Scramble: `(1,3) (2,1) (3,3) (2,1) (3,2) (2,1) (3,1)`
- Start:

  ```text
  0 0 0 3
  1 3 0 3
  1 1 3 2
  2 1 2 2
  ```

- First completion: 0: 0; 1: 0; 2: 0; 3: 8; 4: 59; 5: 157; 6: 858; 7: 6,438.
- Total at seven moves or fewer: **7,520**.

## Seed 836770402

- Tiling: `0011001233123322`
- Colour permutation: `2031`
- Scramble: `(2,3) (2,1) (1,3) (1,1) (1,1) (1,2) (2,1)`
- Start:

  ```text
  1 0 0 3
  2 1 2 3
  2 2 0 0
  1 1 3 3
  ```

- First completion: 0: 0; 1: 0; 2: 0; 3: 0; 4: 0; 5: 0; 6: 141; 7: 1,819.
- Total at seven moves or fewer: **1,960**.

## Seed 3325514003

- Tiling: `0112011203220333`
- Colour permutation: `2301`
- Scramble: `(3,2) (2,3) (3,1) (2,2) (3,2) (2,1) (2,1)`
- Start:

  ```text
  2 3 3 0
  1 0 3 0
  0 2 1 1
  2 3 2 1
  ```

- First completion: 0: 0; 1: 0; 2: 0; 3: 0; 4: 0; 5: 0; 6: 15; 7: 148.
- Total at seven moves or fewer: **163**.

## Seed 1945028360

- Tiling: `0111021302230233`
- Colour permutation: `2031`
- Scramble: `(3,1) (1,3) (3,1) (1,3) (3,1) (1,3) (1,1)`
- Start:

  ```text
  0 3 0 0
  2 2 1 0
  2 2 3 1
  3 3 1 1
  ```

- First completion: 0: 0; 1: 0; 2: 0; 3: 2; 4: 13; 5: 98; 6: 488; 7: 3,800.
- Total at seven moves or fewer: **4,401**.

## Seed 3153379868

- Tiling: `0122011201320333`
- Colour permutation: `2013`
- Scramble: `(3,1) (1,3) (2,1) (2,2) (3,2) (1,3) (1,1)`
- Start:

  ```text
  0 1 1 0
  2 0 1 3
  2 0 3 1
  2 3 2 3
  ```

- First completion: 0: 0; 1: 0; 2: 0; 3: 0; 4: 0; 5: 20; 6: 154; 7: 1,147.
- Total at seven moves or fewer: **1,321**.

## Seed 617319897

- Tiling: `0111000122332233`
- Colour permutation: `3012`
- Scramble: `(3,1) (1,3) (2,1) (1,3) (1,1) (1,3) (2,2)`
- Start:

  ```text
  0 1 3 0
  3 0 2 0
  3 3 1 2
  1 1 2 2
  ```

- First completion: 0: 0; 1: 0; 2: 0; 3: 0; 4: 1; 5: 20; 6: 181; 7: 1,525.
- Total at seven moves or fewer: **1,727**.

## Seed 250267427

- Tiling: `0111002102223333`
- Colour permutation: `1230`
- Scramble: `(2,2) (2,3) (2,1) (1,1) (3,3) (3,3) (1,1)`
- Start:

  ```text
  1 3 2 2
  2 1 2 3
  1 1 0 0
  0 0 3 3
  ```

- First completion: 0: 0; 1: 0; 2: 0; 3: 0; 4: 2; 5: 38; 6: 431; 7: 2,226.
- Total at seven moves or fewer: **2,697**.

## Seed 1080334036

- Tiling: `0011001123332223`
- Colour permutation: `1203`
- Scramble: `(3,1) (3,3) (3,1) (1,2) (1,1) (1,2) (3,3)`
- Start:

  ```text
  2 2 1 2
  1 1 1 2
  0 0 3 0
  3 0 3 3
  ```

- First completion: 0: 0; 1: 0; 2: 0; 3: 6; 4: 18; 5: 24; 6: 459; 7: 3,740.
- Total at seven moves or fewer: **4,247**.

## Seed 1429324343

- Tiling: `0111002103223332`
- Colour permutation: `2031`
- Scramble: `(3,2) (1,1) (1,3) (3,1) (1,2) (2,2) (3,1)`
- Start:

  ```text
  0 0 0 0
  2 2 1 3
  2 1 1 3
  3 2 1 3
  ```

- First completion: 0: 0; 1: 0; 2: 0; 3: 0; 4: 9; 5: 57; 6: 363; 7: 3,644.
- Total at seven moves or fewer: **4,073**.
