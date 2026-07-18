# Copy-edit pass — suggestions (not yet applied)

Scope: tone pass over index.html per request — casual/dry humour with a
dated pop-culture reference or two, no condescension, no throat-clearing
sentence openers, active voice. Plus: whether another light digression
section would help pace the back half of the piece.

Nothing below has been applied yet. Line numbers refer to the current
index.html as of this note.

## 1. Throat-clearing openers to cut

These are the "So,"/"Well,"/"But,"/"And,"/"Now" sentence-starters that
delay getting to the point. Suggested fix alongside each.

- L189 "Why? Well, because it's likely to be easier" → "Why? Because it's
  likely to be easier"
- L193 "So, we have a 3×3 grid of blocks like this one:" → "Here's a 3×3
  grid of blocks:"
- L231 "But, we want to talk about *all* possible arrangements..." → "We
  actually want to talk about *all* possible arrangements and *all*
  possible solutions, so it makes sense to forget about the contents of
  the blocks and focus on what the rotations do." (also trims the
  actual/actually repeat later in the same sentence)
- L236 "So keeping track of positions is likely to be helpful." → "Keeping
  track of positions is likely to be helpful." (the preceding "So" already
  does the causal work; two in a row is one too many)
- L294 "So position 1 goes to position 3..." → "Position 1 goes to
  position 3, 2 goes to 5, 3 goes to 6 … there must be a better way to
  write that down."
- L310 "So let's agree that A stands for that" → "Let's agree that A
  stands for that"
- L359 "And, we can see what happens..." → "We can see what happens when
  we apply them one after the other."
- L405 "Now try out the sequence..." → "Try out the sequence A D a d."
- L420 "Well, ok, I suspect that's probably not much of a secret" → "Not
  much of a secret, probably." (cuts the double hedge: "I suspect... 
  probably")
- L426 "And, doing the kind of puzzles..." → "Doing the kind of puzzles
  we're talking about here..."
- L434 "And, what I'm explaining here really *is* mathematics." → "What
  I'm explaining here really *is* mathematics."
- L538 "But, so far we only have the three-cycles..." → "So far we only
  have the three-cycles that move the middle column."
- L914 "Well yes, but remember the third secret" → "Yes — but remember
  the third secret (and think a little more)."

Pattern note: "But," with a comma right after it (as a sentence opener)
shows up 3 times (L231, L421, L538) — it's not standard usage and reads
like a verbal hesitation each time. Worth a global check for any others
that crept in.

## 2. Passive → active voice

- L121–122 "The mathematical version of this rotate-a-block puzzle was
  formalised recently, in Thomas Lam's 2022 paper..." → "Thomas Lam
  formalised the mathematical version of this puzzle in his 2022 paper..."
- L524–525 "This is the basis for a general rule: any symmetric version
  of a transformation that we can achieve, is also achievable." → "This
  is the basis for a general rule: whatever symmetric version of a move
  we want, we can do that too."
- L920–922 "we could redo the original exchange and that gets the
  exchange of 1 with any other position" → "redo the first exchange and
  you've swapped 1 with whatever position you like" (active, and cuts
  "that gets the exchange of" wordiness)
- L928–930 "Another approach would be to notice that being able to do
  adjacent exchanges is enough to do all exchanges and then that in any
  size bigger than 3×3 we can achieve each adjacent exchange by doing it
  within a 3×3 subgrid." → "Another approach: adjacent exchanges are
  enough to generate all exchanges, and in any grid bigger than 3×3 you
  can always perform an adjacent exchange inside some 3×3 subgrid."
  (splits an overloaded sentence, removes the "is enough to / can achieve
  by doing it" passive scaffolding)
- L911–912 Theorem statement itself ("can be achieved using rotations
  of...") is passive, but that's the normal register for a formal theorem
  statement — flagging only as optional: "Rotating 2×2 subgrids can
  rearrange the cells of a 3×3 grid however you like." I'd lean toward
  leaving the theorem as-is; the passive voice is doing legitimate formal
  work there, not hedging.

## 3. Condescension check

Read through looking for talking-down-to-the-reader moments. Mostly
clean — the self-deprecation is aimed at mathematicians ("mathematicians
are lazy"), not at the reader. Two soft flags, neither urgent:

- L92 "This example is pretty easy!" — reads fine in context (it's
  set-up for "try something harder"), but borderline; could cut the
  exclamation point at least.
- L407 "Naturally enough, this is called a 3-cycle." — "naturally
  enough" implies the name should be obvious, which undersells the
  reader a bit. Could just be "This is called a 3-cycle."

## 4. Pop-culture references — currently just two

Existing: Metroid Prime 2 (History section, re: Twiddle's origin) and
Rubik's Cube ("If you've ever done Rubik's cube at all seriously..." in
Names and notation). Both land fine and are appropriately dated. Two
candidate additions, both optional:

- **Schoolhouse Rock, "Three Is a Magic Number"** — natural fit right
  around where 3-cycles get named / "Three's a crowd" kicks off, since
  the section is already riffing on "three" idioms. Something like: "This
  is called a 3-cycle. (Three is, after all, a magic number.)"
- **The Princess Bride, "let me sum up"** — good fit right before the
  "and now we can plug in some numbers we know work" line in Three's a
  crowd, since that's the exact moment the piece is compressing a page of
  abstract algebra into one concrete payoff. E.g. "Let me sum up (as the
  man in black once put it):" before the numeric substitution.

Wouldn't add more than these two — the piece already has a light touch
and doesn't need to be reference-dense.

## 5. Another light digression to break up the back half

Good idea. Right now the run from "All the threes" through "Three's a
crowd" through "We're done?" is dense — four interactive demos, an
abstract algebra derivation, and a generalization argument, with the only
breather ("Three secrets") sitting way earlier in the piece. The back
half never lets up.

Suggested spot: right after the pairs "catch them all" demo and
"Congratulations (or trust me again)" line, before "We're done?" — i.e.
right before the final generalization push starts in earnest.

Suggested content: a short digression on **Rubik's Cube's "God's
Number"** — it took decades and eventually serious computer time to
prove that every Rubik's Cube position is solvable in at most 20 moves.
Nice parallel to the open "can we win catch-them-all in 15 moves"
question already parked for later, and a natural place to admit that
"we know it's possible" (what this piece proves) and "what's the best
possible strategy" (what it doesn't) are genuinely different, harder
questions — which also nicely foreshadows/justifies why the piece stops
short of a full recipe. Working title in the same style as "Three
secrets (a digression)": **"The speedrun (a digression)"**.

Happy to draft the actual paragraph once you confirm you want it.
