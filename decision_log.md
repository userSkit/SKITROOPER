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
