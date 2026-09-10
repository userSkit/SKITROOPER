# Finish the demand check from your own PC (one paste)

The cloud session cannot open Reddit, Adverts.ie, Boards.ie or Superprof. Your PC can. Two options; pick one.

## Option A — Claude Code on your PC (lets Claude do it)

1. Install Claude Code on your machine (desktop app or `npm install -g @anthropic-ai/claude-code`) and sign in.
2. Clone this repo and check out the branch:
   ```
   git clone https://github.com/userSkit/SKITROOPER.git
   cd SKITROOPER
   git checkout claude/10-to-10k-business-8cf955
   claude
   ```
3. Paste this prompt:

> Read research/stage1.md. Using web fetch/browser, complete the two open counts in the "Still open" section: (a) number of posts on r/irishjobs and r/ireland in the last 30 days where someone asks for CV/cover letter feedback or says they get no replies to applications — list titles, dates and links; (b) number of active CV-writing service ads on Adverts.ie Services and their prices; also count grinds ads in Adverts.ie → Services → Tuition & Classes → Grinds for [your subject]. Append the results with links to research/stage1.md under a new "Demand check — local results" heading, update the tournament verdict if the data changes it, commit, and push to this branch. Do not post, sign in to anything, or spend money.

The results land on this branch and the cloud session picks them up.

## Option B — you do it by hand (10 minutes)

1. reddit.com/r/irishjobs → search "CV" → sort by New. Count posts from the last 30 days asking for CV help or reporting no replies. Write the number and 2–3 titles.
2. Same on reddit.com/r/ireland.
3. adverts.ie → Services → search "CV". Count ads and note prices.
4. adverts.ie → Services → Tuition & Classes → Grinds → your subject. Count ads and note prices.
5. Paste the four numbers into chat. That is the whole job.

## Pass/fail rule (already set in research/stage1.md)
- CV: ≥5 asks in 30 days AND <5 competing Adverts ads at ≤€35 → place the €5 ad.
- Fewer asks → LinkedIn + free replies only, no ad spend, and grinds becomes the lead if you have a subject.
