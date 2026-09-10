# Tasks for the Claude Code session on the operator's PC

You have normal internet access; the cloud session does not. Do these in order. Rules in `CLAUDE.md` apply: no logins, no purchases, no posting, no messaging. Read-only browsing plus edits inside this repo only.

## 0. Sync first
Run `git pull --rebase origin claude/10-to-10k-business-8cf955`. The remote has moved ahead of your local commit 98da521. Resolve any conflict in `research/stage1.md` or `decision_log.md` by keeping both sides. Then continue; push at the end.

## 1. Supplier costs for the three products (most important)
For each product, find at least one listing and record: supplier, unit cost, shipping cost to Ireland, warehouse location (EU or China), delivery estimate, product page URL, and whether a media pack (photos/video licensed to resellers) is offered.
- Hard-water shower filter (in-line, universal ½-inch, multi-stage cartridge)
- Reusable pet-hair remover roller (chamber type, no refills)
- Satin pillowcase pair, 50×75 cm, envelope closure
Try in this order: cjdropshipping.com (prices are public; check the "warehouse" selector for EU stock), bigbuy.eu (public catalogue, prices may need login: record what is visible), spocket.co product pages found via search. Do not create accounts. If a price is only visible after login, say so and move on.
Landed-cost targets from `research/ecommerce_stage1.md`: filter ≤ €14, roller ≤ €7, pillowcases ≤ €9. Flag any product that misses.

## 2. Domain availability
Check these .com names using RDAP, which is public JSON: fetch `https://rdap.org/domain/<name>.com`. A 404 means unregistered. Names: slanhome, slanhome-ie, slanhomeshop, slanhouse, homeslan, tidyslan. Add three more of your own that are short, pronounceable, and Irish-flavoured. Record which are free.

## 3. Brand-name conflicts
Search for existing businesses called "Slán Home" or close variants: general web search, the CRO register at core.cro.ie (public search), and the EUIPO trademark search at euipo.europa.eu/eSearch. Record anything that looks like a live conflict in the same product category. Do not file or register anything.

## 4. Stock footage links
For Day 1, Day 2 and Day 3 in `offers/video_scripts_week1.md`, find 2–3 free-licence vertical clips per shot on pexels.com or pixabay.com. Paste the direct page URLs under each shot in that file. Confirm the licence allows commercial use (Pexels and Pixabay licences do; note it).

## 5. Supplier product media
For the best listing found in task 1 for each product, list the product image URLs and any video URL, and note the supplier's stated terms on reseller use of their images. Do not download anything.

## 6. Record and push
Write everything into `research/local_tasks_results.md` with links. Update `research/ecommerce_stage1.md` cost lines with real figures. Commit with a clear message and push to `claude/10-to-10k-business-8cf955`. If the push needs a credential prompt, stop and tell the operator to run the push from a normal PowerShell window.

## Status tracking
After finishing each numbered task, append a line to `system/local_tasks_status.md`. The cloud session reads that file and this one on a schedule and adds new tasks at the bottom. Tasks are numbered; do them in order; never redo one marked done.
