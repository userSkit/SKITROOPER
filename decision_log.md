# Decision log

Every pivot, kill, or double-down goes here with the reason and the data behind it.

## 2026-09-10 — Session 1: setup and stage 1 research

**Decision:** No stage 1 offer locked yet. Intake questions issued (`INTAKE.md`).

**Why:** The brief says to ask about hours, skills, accounts and tools before planning. The top two candidates in `research/stage1.md` (CV rewrite service vs. Leaving Cert grinds) depend on answers: grinds need a subject the operator can actually teach and evening availability; CV work needs solid written English and no account bans on Adverts/Fiverr.

**Provisional lean (pending intake):** CV + cover letter rewrite service sold on Adverts.ie Services and LinkedIn, priced €25–€35, because it has the shortest path to first cash, near-zero capital, and Claude can do most of the fulfilment. See tournament scores in the research file.

**Evidence gap flagged:** Reddit, Boards.ie and Fiverr could not be read from this environment (network blocked). Competitor pricing and platform fees are cited from live sources. Demand evidence from forums must be checked by the operator with the 10-minute checklist in `research/stage1.md` before any spend.

**Capital rule confirmed:** €10 total. An Adverts.ie Service ad costs €5 for 30 days. That is the only proposed spend for stage 1 and it waits on intake answers + operator approval.

## 2026-09-10 — Session 2: demand check attempted from cloud

**Decision:** Demand check partially complete. Macro demand for both CV rewrites (2026 youth job market is measurably harder) and grinds (grind schools sold out since June) is confirmed from Irish press. The two micro counts (recent CV-help posts on r/irishjobs; competing Adverts.ie ads) cannot be produced from this environment and are handed to the operator via `system/local_demand_check.md`.

**Why not use a workaround:** Reddit mirrors and archive services are blocked too, and routing around the environment's own network policy is not something I will do. The honest path is a local session or a 10-minute manual check.

**No change to provisional pick.** CV + cover letter remains the lead; grinds parallel if a subject exists. No money spent.

## 2026-09-10 — Session 3: stage 1 locked

**Operator facts:** Dublin. Has Revolut. Will not tutor. Hours unknown; assumed ~5/week until corrected.

**Decision:** Grinds killed (operator constraint). Stage 1 runs two zero-cost tracks in parallel for 7 days:
1. **CV + cover letter rewrite, €30, free channels only.** LinkedIn post once, honest free replies on r/AskIreland where rules allow, one WhatsApp broadcast. Claude drafts everything, operator pastes and sends. No ad spend: the local demand check found one competitor and no visible paying buyers, so the €5 stays in the bank.
2. **Sell anything the operator owns and doesn't need on Adverts.ie / DoneDeal.** Free listings, Dublin pickup, Revolut payment. This is the fastest route to confirmed cash and it funds nothing but proves the ledger works.

**Kill/switch rule (review 2026-09-17):** if track 1 has produced fewer than 2 paid orders by day 7, the free effort switches to a Google Business Profile fix-up offer (€75 one-off) for Dublin sole traders, researched by the local Claude session which can open business websites. That product was scored stage-2 material because it is slower, but it has a higher ticket and no competition at the sole-trader price point.

**Why not spend the €5 on anything:** no channel has shown a paying buyer yet. Spending before that is a guess, and the brief says sell before you build.

**Expected value, honestly:** CV track: 10–20 enquiries needed for 4 orders at €30 to hit €100; free channels in Dublin may deliver that in 1–3 weeks or may deliver 1 order. Track 2 depends entirely on what the operator owns. Neither is certain. The 7-day review decides.

## 2026-09-10 — Session 4: operator overrides stage 1 with a dropshipping store

**What happened:** Operator rejected the service tracks and asked for an ecommerce store with dropshipped products, one page per product, own site with Stripe rather than Shopify. I laid out the odds (1–5% sustainable success, sub-15% beginner margins, ad budgets in the thousands, sources in `research/ecommerce_stage1.md`). Operator reaffirmed. That is their call and it is now the plan.

**Capital:** Operator will add their own money, against the original brief. Asked for a number; answer was €500 for a real test, €150 organic floor. Operator chose **€50**. Recorded as pending in the ledger until deposited and confirmed. €50 covers domain, one sample and a refund buffer. It buys zero traffic; phase 1 is organic video only.

**Built:** static store in `shop/` (home, three product pages, returns/terms/privacy/contact with CCPC-required placeholders), research file with product picks and supplier route, playbook with setup steps, fulfilment flow, content plan, kill rules and ad-unlock rule.

**Products:** hard-water shower filter (Dublin angle, verified hardness ~177 mg/L), reusable pet-hair roller, satin pillowcase pair. Non-electrical, EU-warehouse only, so the supplier is the EU importer under GPSR and there is no €3 customs duty per parcel.

**Service tracks:** paused, not killed. The LinkedIn CV post costs nothing and stays in the daily list as optional.

**Review:** 2026-09-17 for setup completion; product kill at 30 days with zero orders; store kill at 60 days with fewer than 3 orders.

## 2026-09-10 — Local session: demand check evidence (record)

**Status:** the evidence below stands. The recommendation at the end of it does not — it was written before the operator said they will not tutor, which killed grinds, and before the operator replaced stage 1 with the dropshipping store. Kept here because it is the only record of what was actually measured and where. The summary the plan acted on is in `research/stage1_local_summary.md`; the full write-up with links is in `research/stage1.md`.

**What was run:** Option A from `system/local_demand_check.md`, from a local Claude Code session with browser access. Reddit read logged-out via its public JSON search endpoint, Adverts.ie and Boards.ie read directly. No login, no post, no spend. Full data and links in `research/stage1.md` under "Demand check — local results".

**Decision 1: r/irishjobs is struck from the plan.** It is a Restricted subreddit with 29 weekly visitors and no posts in roughly seven years. The plan's free acquisition channel for CV work did not exist. r/AskIreland replaces it as the only live Irish room where people discuss CVs and job applications (15 CV-mentioning posts in the last 30 days, about 3 a week).

**Recommendation 2 (superseded — operator will not tutor): move the €5 from a CV ad to a grinds ad.** The pass/fail rule wanted ≥5 CV-help asks in 30 days and <5 competing Adverts.ie ads at ≤€35.
- Competition test: passed outright. Exactly one CV-writing ad exists on all of Adverts.ie, at €50.
- Demand test: marginal. Four posts clearly meet the wording, seven if borderline cases are counted. Nobody offered to pay; one asked whether an AI-written CV is detectable, which is the free substitute at work.
- Meanwhile Adverts.ie grinds has 18 ads for the whole country, two of them paid Premium listings, against grind schools that have been sold out since June.

A channel with one competitor and no visible buyers is an untested channel, not an open goal. A channel with 18 competitors, two of whom pay for placement, is a channel with proven money in it. **The €5 is held for an Adverts.ie grinds ad and will be placed once intake Q6 names a subject and grade. The CV offer still runs, but only through free channels: r/AskIreland and LinkedIn.** (Superseded: grinds is off, and the €10 is untouched while the store runs on the operator's own €50.)

**Decision 3: Boards.ie is dropped as both a signal and a channel.** Its Work & Jobs → Work Problems forum has had about four new threads since mid-August and none about CVs. The threads cited in session 2 are years old.

**Repo location problem found and worked around.** The clone at `C:\WINDOWS\system32\SKITROOPER` is not writable without elevation, so no edit or commit can be made there. Work was done in a fresh clone at `C:\Users\<operator>\SKITROOPER`, which is what `system/local_safety.md` already recommends. Start Claude from that folder from now on and delete the system32 copy by hand.

**Still blocked on intake at the time:** Q6 (tutoring subject and grade). Since answered: no tutoring, so the per-subject grinds count is moot.

**Money:** still €10. Nothing spent.

## 2026-09-10 — Session 5: budget raised to €150; flipping becomes the cash engine

**Operator:** "new budget 150, any better ideas to turn it into 1000".

**Decision:** €150 goes to Dublin second-hand flipping (bikes, gaming, baby gear, tools, small furniture, phones), not ads. Rationale: at €150 an ad test is one five-day run on one product with negative expected value; flipping cycles cash in days with €20–€60 per item margins and zero platform cost. Store stays built and unspent; its first ad test is funded from flipping profit, per the "each stage funds the next" rule.

**Local agent:** new recurring task scans public listings for underpriced items. No contact, no personal data.

**Target:** 3–5 flips/week, €100–€200/week profit, €1,000 in 6–10 weeks. Reviewed every 3 days.

**Ledger:** the €150 enters as confirmed capital only when the operator states it is deposited.

## 2026-09-10 — Session 6: operator chooses the store over flipping; €150 allocated

**Operator:** prefers the online shop with social media traffic. Reaffirmed after the flipping case was made. Flipping parked (files kept, agent task 7 disabled).

**€150 allocation:**
| Item | € | When |
|---|---|---|
| .com domain | ~12 | Week 1 |
| Samples: shower filter + pet roller | ~30 | Week 1, to operator's address |
| Ad test reserve | 100 | Released only after 14 days of daily posting, spent €20/day × 5 days on the single best-performing video |
| Buffer | ~8 | Refund/postage |

**Sequence:** Week 1 setup + stock-footage videos daily. Week 2 samples arrive, refilm, keep posting. Week 3 ad test on the winner. Reviews every 3 days. Kill rules from the playbook stand: product with zero orders after 30 days is dropped; store with fewer than 3 orders after 60 days is killed and the decision log says so.

**Honest EV restated:** most €100 ad tests do not pay back. The organic run before it is what gives the test a chance, because it tells us which product and hook to put money behind.

## 2026-09-10 — Session 7: pivot the store to personalised Irish gifts (print-on-demand)

**Operator:** "what can we do where we have an online shop selling something that's highly likely to do good" and "scan for the best performing items and services".

**Scan result:** `research/best_performers.md`. Personalised Irish gifts (Ogham name print, Irish name meaning print, Irish-slang mug) rank first: proven Etsy demand, personalisation as a moat, EU print-on-demand, Q4 gifting in 8–12 weeks, and Etsy's own traffic replaces the ad budget the gadget store never had.

**Decision:** Slán Home pivots from gadgets to Irish gifts. Sales channels in order: Etsy (traffic), own site (for social links, no fees), TikTok/Instagram content. Gadget products demoted; pages kept in git history only.

**Budget:** €150 per the table in the research file. Ad reserve €80, released only after organic proof.

**Kill rule:** no sales by 2026-11-30 → kill and record.

## 2026-09-10 — Session 8: operator says "too long"; switch to local production and local channels

**Operator:** timeline to first sale (Etsy ramp, Printful sample, late-November kill date) is too slow for €150.

**Decision:** same products, local model. Prints are produced at a Dublin copy shop on heavy card the day the proof is approved, posted next working day (An Post large envelope €3.50, Feb 2026 rates) or framed and hand-delivered in Dublin. Sold on Facebook Marketplace Dublin and Adverts.ie (both free, local, live in minutes), plus Instagram/TikTok and the site with Stripe. Nothing is printed until sold. Etsy and Printful move to phase 2 for national/diaspora reach. Mugs stay print-on-demand.

**Prices:** A4 posted €24.95 (Ogham) / €22.95 (name print); A4 framed Dublin delivery €39.95 / €37.95; mug €18.95. Est. margins ~€19 posted, ~€30 framed. Frame source: IKEA RÖDALM (RIBBA discontinued) or Dealz/Tiger; price to confirm.

**€150 now:** domain ~€12, five test prints ~€10, five frames ~€35, hard-backed envelopes and stamps ~€15, buffer ~€18, ad reserve €60 (unchanged rule: only after a video shows traction).

**Expected time to first cash:** days to two weeks, because the buyers on Marketplace and Adverts are local and ready. Still not guaranteed. Kill date moves to 2026-10-31: no sales by then → kill.

## 2026-09-10 — Session 9: operator rejects the gift products; top-10 scan run

**Operator:** does not like the personalised-gift idea, asked for a ranked list of best performers.

**Produced:** `research/top10_scan.md` — ten options scored on time-to-cash, capital, AI-leverage, margin and ceiling, with cited Irish pricing.

**Top three by score:** (1) social media management for Irish SMEs, 47/50 — the only recurring-revenue option, Irish agency floor is €900/mo so €400 undercuts hard, 38% of Irish businesses have no digital plan; (2) AI workflow automation, 45/50 — AI freelance hiring up 109% YoY, highest ceiling, needs one reference client; (3) website builds for sole traders, 43/50.

**Flagged, not decided:** the recurring-revenue point is decisive for the €10k target. €10,000 = 22 client-months at €450. Every one-off product model requires selling from scratch every time.

**Risk recorded plainly:** five models, zero accounts created, zero euro earned. The binding constraint is execution, not idea selection. Next model must produce one created account and one sent offer within 48 hours or the pattern repeats.

**No spend. €150 intact. Gift site retained in `shop/` — it costs nothing to keep and is a portfolio piece for #1 and #3.**

## 2026-09-11 — Session 10: classic books, print to order, luxury positioning

**Operator:** wants an ecommerce shop selling classic books, Homer's Odyssey named specifically.
Asked for the top ten best performers, a cheap way to fulfil them at a profit, a luxury premium
brand, Stripe, and €150 covering everything including marketing. Goal stated as automatic annual
income.

**Decision: build it, as a print-to-order press.** €150 cannot buy inventory, so every model that
needs stock is out before it starts. Print-on-demand is not the best option here, it is the only
one: the customer pays first, the book is printed second, and nothing is ever bought before it is
sold. Brand is **Lampblack Press**, after the soot that the best printing ink was made from.

**Top ten, ranked and reasoned** in `research/classics_top10.md`. Scored on demand ×3, margin ×2,
shelf appeal ×2 and rights safety ×3, rather than on reputation. Two findings drove the list:

1. **Page count is the entire cost story.** Print-on-demand charges a binding fee plus a per-page
   rate, so a 110-page book and a 520-page book earn wildly different money at the same price.
   *Meditations* at 160 pages nets €6 more per copy than *Jane Eyre* at 520. The list is therefore
   weighted to short famous books; six of the ten are under 300 pages.
2. **Translations are the trap.** The text being out of copyright does not free the translation,
   whose clock runs from the translator's death. Homer is Samuel Butler, 1898 and 1900, dead in
   1902 and safe worldwide. Fagles is protected until 2079. Every product page names its
   translator and date.

**One title held back.** *The Art of War* scored third and is not on the site. Lionel Giles died in
1958, so his translation is in copyright in the EU until 2029 even though the 1910 text is free in
the US. *Wuthering Heights* takes the tenth slot until that is resolved. Flagged rather than
guessed, because a guess here is a takedown.

**Supplier: Lulu first, Bookvault later.** Lulu has no setup fee, no monthly fee, white-label
shipping to 150 countries and prints inside the EU so EU customers pay no customs. Bookvault does
real foiling from £2.50 a copy, which is what actually makes a book feel expensive, but it charges
per title and per month. Move when there is revenue to move with.

**Prices: €42 single, €108 for three, €198 for six, €310 for ten.** Gross margin holds at about 52%
across the ladder after print, shipping and Stripe. The three-volume set is the product that
matters: it nearly triples order value while shipping and card fees barely move, turning €22 of
profit into €57 for the same two minutes of work. *The Iliad* is in the collection largely to make
that maths work, since nobody buys half of Homer.

**Two facts that materially help.** Printed books are zero-rated for VAT in Ireland and the
registration threshold is €85,000, so no VAT is charged, collected or filed. And Stripe is
1.5% + €0.25 on EEA cards with no monthly fee.

**€150:** domain €11, two proof copies €44, refund buffer €35, advertising reserve €60 locked
behind the usual gate of 100 visitors and one organic sale. The proof copies are the part not to
skip; asking €42 for an object you have never held is how refunds happen.

**Marketing: Pinterest first**, which is the non-obvious call. It is a search engine, so a pin
returns traffic for months while an Instagram post is finished in two days. Compounding traffic is
the only honest route to income that arrives in a week you did not work. SEO on "which translation
should I read" second, because that research is already done. Etsy is phase two. Ads stay locked.

**Built this session:** the full shop under `shop/` rebuilt as Lampblack Press — home, collection,
sets, about, ten product pages, five legal pages, 404, sitemap; an SVG cover engine that draws
every cover and spine from the catalogue, with spine thickness derived from real page count; and
`system/cover-wrap.html`, which turns the same artwork into a print-ready back-spine-front wrap so
the covers are not a blocking task. Old Slán Home gift pages removed.

**Honest expected value.** At €85 average order and 52% margin, one order a week is about €2,300 a
year and three a week is about €6,900. The fulfilment genuinely is close to automatic: two minutes
per order, and it does not grow with volume. Demand is not automatic and nothing here makes it so.
What €150 buys is a shop that is ready to take money at a margin that works, and then six months of
posting pins.

**Kill rule:** fewer than 3 orders by 2026-12-31 kills it, and this log says so plainly. That window
covers the whole Christmas season.

**The real risk, restated.** This repository now holds six business models and no revenue. The
binding constraint has never been idea quality; it is that no account has ever been created and no
offer has ever been sent. The test for this one is not the research. It is whether a Stripe account
and a Lulu account exist within 48 hours. If they do not, the seventh model will not fix it either.

**Branch conflict, flagged not resolved.** `CLAUDE.md` says to push only to
`claude/10-to-10k-business-8cf955`, which is the only branch on the remote. This session was
assigned `claude/peaceful-darwin-y7fsr7`, which is checked out locally and carries all of the old
branch's history. Work is committed to the assigned branch because that is what the session was
told to use, and creating a branch destroys nothing. The operator decides whether to merge it back
into the long-running branch, and points Cloudflare Pages at whichever one they keep. `CLAUDE.md`
was deliberately left unedited; changing the operator's own standing rules is not Claude's call.

**Money: still €0 spent.**

**Branch conflict resolved (same day).** Operator chose `claude/10-to-10k-business-8cf955`, the
branch named in `CLAUDE.md` and the only one on the remote. The session branch turned out to be
that branch plus exactly one commit, so it fast-forwards with nothing to merge and nothing lost.
Cloudflare Pages should watch `claude/10-to-10k-business-8cf955`. `CLAUDE.md` needs no change and
`system/local_tasks.md` should name that branch when the local session syncs.
