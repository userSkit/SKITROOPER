# Tasks for the Claude Code session on the operator's PC

> **Current priority (2026-09-11): do tasks 14 to 20, in that order. Tasks 1 to 13 are all superseded by the pivot to Lampblack Press; skip them regardless of status.**
>
> Sync first: `git pull --rebase origin claude/10-to-10k-business-8cf955`.

You have normal internet access; the cloud session does not. Do these in order. Rules in `CLAUDE.md` apply: no logins, no purchases, no posting, no messaging. Read-only browsing plus edits inside this repo only.

## 0. Sync first
Run `git pull --rebase origin claude/10-to-10k-business-8cf955`. The remote has moved ahead of your local commit 98da521. Resolve any conflict in `research/stage1.md` or `decision_log.md` by keeping both sides. Then continue; push at the end.

## 1. Supplier costs for the three products — SUPERSEDED 2026-09-10 by task 10. Skip.
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

## 7. Flip candidate scan — DISABLED 2026-09-10 (operator chose the store). Skip this task.
Read `research/flipping_dublin.md`. Browse adverts.ie and donedeal.ie, Dublin only, in the target categories. For each item whose asking price is at or below 50% of comparable current listings, record in `research/flip_candidates.md`: date found, URL, title, asking price, 2 comparable listing URLs with prices, estimated resale, estimated profit, and any red flag. Aim for 10 candidates per run. Do not contact anyone, do not record seller names or phone numbers, do not log in.

## 8. Competitor and hook research — SUPERSEDED by task 11. Skip.
On TikTok and Instagram (public web pages, no login), search: "shower filter hard water", "pet hair remover roller", "satin pillowcase". For the 5 most-viewed public videos per product, record: URL, view count, the first-second hook (text or spoken), video length, and whether it shows the product in use. Write to `research/hooks_competitors.md`. Do not download or repost anything; this is for writing our own scripts.

## 9. Supplier media pack check — SUPERSEDED. Skip.
For each supplier listing chosen in task 1, record whether product photos/videos are offered to resellers and the stated licence terms. Paste URLs only. Write to `research/local_tasks_results.md`.

## 10. Print-on-demand costs (highest priority now)
On printful.com public product pages (no login), record for shipping to Ireland from an EU facility: (a) enhanced matte poster A4 and A3: base price + shipping; (b) 11oz white mug: base price + shipping; (c) production time. Also check printify.com public pages for an EU print provider for the same items. Write a cost table to `research/local_tasks_results.md` with links. Flag if any landed cost exceeds: A4 €12, A3 €15, mug €15.

## 11. Etsy competitor scan for Irish gifts
On etsy.com public pages, search "ogham name print", "irish name meaning print", "irish sayings mug". For the top 10 results per search record: listing URL, price, number of reviews, shop country, personalisation offered, delivery time stated. Write to `research/etsy_competitors.md`. Do not log in, favourite, or message anyone.

## 12. Name and domain check for the pivot
RDAP-check (https://rdap.org/domain/<name>.com) these: slanhome, slangifts, oghamandco, oghamprints, dublinprintco, saoltrainn, focalprints. Add three of your own. Record which are free in `research/local_tasks_results.md`. Search for existing shops using "Slán Home" or "Ogham & Co" on Etsy and the CRO register; note conflicts.

## 13. Dublin local production costs (do first)
Public web pages only, no login: (a) Copyprint.ie, colourcopycentre.ie, printdublin.ie, reads.ie: price for a single A4 colour print on 200–300 gsm matte card, and same-day availability; (b) IKEA Ireland: RÖDALM A4 (21×30) frame price, and any other A4 frame under €10; (c) Dealz.ie / Tiger (flyingtiger.com/ie): A4 frame prices if listed; (d) An Post: confirm large-envelope 101–250 g rate and whether a 200 gsm A4 in a hard-backed envelope fits the "large envelope" size limits (thickness limit). Write to `research/local_tasks_results.md` with links.

---

# Lampblack Press tasks (2026-09-11)

Context: `research/classics_top10.md`, `research/sourcing_and_margins.md`,
`system/lampblack_playbook.md`. The cloud session could not reach lulu.com, bookvault.app,
stripe.com, gutenberg.org or standardebooks.org — the network policy on that environment blocks
them — so every figure it produced from published pricing is marked as an estimate. Your job is to
replace the estimates with real numbers. Same rules as always: no logins, no purchases, no posting,
read-only browsing and edits inside this repo only.

## 14. Confirm the real print cost (do this first, everything depends on it)

Open Lulu's price calculator. Configure: **hardcover, case wrap, 14 × 21 cm (or nearest standard
trim), black and white interior, cream uncoated paper, quantity 1**, shipping to Dublin.

Get the printed cost and the shipping cost for each page count in the catalogue: 160, 200, 250,
280, 330, 380, 380, 400, 450, 520.

Then get the shipping cost for a **three-book parcel** and a **six-book parcel** to Dublin, to
Berlin and to New York.

Write the results into `research/sourcing_and_margins.md`, replacing the estimated table and
removing the "(confirm)" markers. The working model to check against is
`print ≈ €7.50 + €0.016 × pages`. **If real costs come in more than 15% above that, the €42 price
is wrong and the margin table needs redoing before anything goes live.**

## 15. Lulu cover template dimensions

For the same specification, download Lulu's cover template for a 330-page book and read off:
total wrap width, total wrap height, spine width, and the safety margin. Put those four numbers in
`system/lampblack_playbook.md` under the Lulu section. They are the inputs to
`system/cover-wrap.html`, which is otherwise guessing.

Also record the spine width Lulu gives for 160 pages and for 520 pages, so the range is known.

## 16. The Art of War rights question — this one is worth money

`research/classics_top10.md` ranks *The Art of War* third on margin and demand, and it is off the
site because of a rights question. Resolve it.

Lionel Giles died in 1958. His 1910 translation is public domain in the United States. Under the EU
life-plus-seventy rule it would be protected until 1 January 2029. Find out whether the 1910 text
is nonetheless free in the EU, or whether it can be sold to US customers only until 2029.

Check what Standard Ebooks and Project Gutenberg say about the edition's status, and look for any
Irish or EU guidance on pre-1996 US public-domain works. **Record what you find with links, and do
not make a judgement call on it.** If it is not clearly free, it stays off the site until 2029.

## 17. Domain and brand conflict check

Domains, using the public RDAP endpoint (`https://rdap.org/domain/<name>.com`, a 404 means
unregistered): `lampblackpress`, `lampblack-press`, `thelampblackpress`, `lampblackbooks`.
Also check `lampblack.press` and `lampblackpress.ie`.

Brand conflicts: search the CRO register at core.cro.ie and the EUIPO trade mark search at
euipo.europa.eu for "Lampblack" and "Lampblack Press". Record anything live in publishing or
printing. Do not file or register anything.

If there is a real conflict, say so loudly — renaming costs one line of `shop/assets/config.js`
today and costs the domain, the Pinterest account and the search rankings after launch.

## 18. Source texts

For each of the ten titles, find the Standard Ebooks edition and record its URL. Confirm and quote
their licence statement about commercial use. For any title Standard Ebooks does not have, find the
Project Gutenberg edition and record the URL.

Do not download anything yet. This is a list of where the text comes from, which also becomes the
source note on each product page.

## 19. Bookvault comparison

Get Bookvault's real hardback print cost for the same specification, plus the cost of foiling and
sprayed edges per copy, and the current setup fee per title. Put it beside the Lulu figures in
`research/sourcing_and_margins.md`. This decides when it is worth moving, not whether to start there.

## 20. Stripe check

Confirm on stripe.com/ie/pricing: the EEA card rate, the international card rate, whether Irish VAT
is charged on the fee, and whether Payment Links cost anything extra. Confirm that a Payment Link
can carry a **custom field** (needed for "which three titles?") and can **collect a shipping
address**. Record it in `system/lampblack_playbook.md`.

If any of that is wrong, the €42 price and the whole checkout design need revisiting before launch.

## Recording results

Append findings to `research/local_tasks_results.md` with links, update the two research files in
place where a figure changes, and add a line to `system/local_tasks_status.md` per completed task.
Commit and push. If the push asks for a credential, stop and tell the operator.
