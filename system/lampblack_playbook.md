# Lampblack Press — the operating playbook

Everything needed to take this from a repository to a shop that has taken money.
Written 2026-09-11. Research behind it: `research/classics_top10.md` and
`research/sourcing_and_margins.md`.

---

## What this business is, in four lines

Ten out-of-copyright classics, set and cased as hardbacks, sold at €34 a volume and €93 for
three. Printed one copy at a time by a print-on-demand press inside the EU, which ships direct
to the customer in unbranded packaging. Payment by Stripe. No stock, no packing, no warehouse.
Gross margin about 46% on sets and 41% on singles. Printed books carry no VAT in Ireland.

---

## The 48-hour launch list

Nothing here costs more than €11 until step 7. Claude cannot do any of it, because every step
involves an account, a payment or a legal identity. Each one is written so it can be done in
one sitting.

### Day one

**1. Pick the trading name and check it is free.** "Lampblack Press" is the working name and the
whole site is built around it. Before committing, search the CRO register at core.cro.ie and the
EUIPO trade mark database. If there is a live conflict in publishing, tell Claude and the brand
gets renamed. It is one line in `shop/assets/config.js` plus the cover artwork, so it is cheap to
change now and expensive to change later.

**2. Buy the domain.** About €11 for the year. Cloudflare Registrar sells at cost and makes step 4
automatic. `lampblackpress.com` first; if gone, try `.ie`, `lampblack.press`, or `thelampblackpress.com`.

**3. Fill in `shop/assets/config.js`.** Trading name, address, email, domain. Five minutes. This is
the only file that needs editing, and every page reads from it.

**4. Deploy the site.** Cloudflare Pages, free. Instructions in `system/deploy.md`. You will have a
live site within ten minutes of the domain resolving.

### Day two

**5. Open Stripe.** stripe.com, individual/sole trader, Ireland. Give the live domain. Stripe will
check the site has prices, delivery, returns, terms, privacy and a contact address; all six exist
and are already written. Create four Payment Links as described below.

**6. Open a Lulu account.** Free, no monthly fee. Create the ten titles. This is the longest job
on the list, roughly an afternoon, because each title needs an interior PDF and a cover wrap.
Use `system/cover-wrap.html` to produce the covers.

**7. Order two proof copies.** About €44 including postage. Order the shortest book and the
longest one, so you see both extremes of the binding. **Do not skip this and do not launch
marketing before they arrive.** You are asking strangers for €34 for an object you have never
held.

**8. Photograph the proofs.** A window, daylight, no flash, a plain surface. Fifteen photographs:
the cover flat, the spine, the book open, the book in a stack, the book held in a hand. These
photographs replace the drawn covers on the site and become every pin, every post and every
listing image you will use for the next year. It is the highest-value hour in the whole plan.

---

## Stripe: the four Payment Links

Payment Links cost nothing extra and need no code. Dashboard → Payment Links → New.

| Link | Price | Custom field to add |
|---|---|---|
| One volume | €34.00 | "Which title?" (dropdown of the ten) |
| Three volumes | €93.00 | "Which three titles?" (text) |
| Six volumes | €174.00 | "Which six titles?" (text) |
| The complete ten | €280.00 | none needed |

On every link, switch on **Collect customers' addresses → Shipping**, and set the countries you
will ship to. Add shipping rates: free for Ireland and the EU, charged at cost everywhere else.

Paste the four URLs into the `stripe` block in `shop/assets/config.js` and redeploy. Until then
every buy button reads "Checkout opening shortly" and points at the contact page, which is a
perfectly respectable state to be in during Stripe's review.

**Optional upgrade, later.** Once selling, make one Payment Link per title and paste them into
the `stripe.books` map in `config.js`, keyed by slug. Each book page then checks out that exact
title instead of asking the buyer to name a book they have already chosen. Until you do, every
book page uses the single generic link and the custom field. Nothing on the site needs changing
either way.

**Fees:** 1.5% + €0.25 on EEA cards, 3.25% + €0.25 on everything else, plus Irish VAT at 23% on
the fee itself. On a €34 sale that is €0.94. There is no monthly charge.

**VAT on the books:** none. Printed books are zero-rated in Ireland, and you are far below the
€85,000 registration threshold. Do not register, do not charge it, do not file returns for it.

---

## Lulu: setting up a title

For each of the ten books you need two PDFs.

**The interior.** Take the text from Standard Ebooks, which releases professionally proofread
public-domain classics under CC0, explicitly free for commercial use. Set it in a single serif
face at about 11pt on 15pt leading, 14 × 21 cm trim, with proper running heads and chapter
openings. A title page that names the translator and the source edition is not optional; it is
rule one of the four on the about page, and it is what separates this from the junk reprints.

**The cover wrap.** Open `system/cover-wrap.html` in a browser, choose the title, paste in the
exact spine width from Lulu's own template generator, and print the page to PDF. It produces the
back, spine and front in one piece at the right size with bleed.

**Settings to choose in Lulu:** Hardcover, case wrap, 14 × 21 cm (or the nearest standard trim),
black and white interior, cream uncoated paper. Confirm the print cost in the live calculator and
check it against the table in `research/sourcing_and_margins.md` before you trust any price on the
site.

**Switch on white-label shipping.** Without it the parcel arrives branded as Lulu and the premium
positioning dies on the doorstep.

---

## When an order comes in

1. Stripe emails you. It contains the address and the titles chosen.
2. Place the matching order in Lulu with that shipping address. About two minutes.
3. Lulu prints, packs and ships. Three to five working days, then transit.
4. Paste the tracking number into a reply to the customer.
5. Add the sale to `ledger.csv` as pending. Mark it confirmed when the money actually lands.

That is the whole operation. It does not get more complicated at ten orders a week than at one,
which is the point.

If volume ever justifies it, Lulu has a print API that removes step 2 entirely. Do not build that
before there are orders to automate.

---

## Marketing: the order to do it in

The full reasoning is in `research/sourcing_and_margins.md`. The short version is that only one
free channel compounds, and it is not the one most people start with.

### Pinterest, first and most seriously

Pinterest is a search engine wearing a social network's clothes. An Instagram post is finished
in 48 hours; a pin keeps returning search traffic for months or years. That difference is the
entire argument, because compounding traffic is the only honest route to income that arrives in
a week you did not work.

- One board per title, plus one for the full collection.
- Ten pins per title from the proof photographs: cover flat, spine detail, stack, shelf, open page.
- Pin titles are search phrases, not captions. "Dark academia bookshelf", "classic books
  hardcover", "gifts for readers", "Odyssey translation".
- Every pin links to that title's page.
- Five pins a day, every day, for ninety days. This is the job. It is boring and it works.

### SEO on the question people actually ask

You had to research which translation of the Odyssey to print. That research is a genuinely
useful page that almost nobody has written well, and the person searching for it is the exact
person about to buy a copy.

Write one comparison page per title: which translations exist, which are in copyright, which are
free and why, and which one we chose. Link it to the product page. Slow, compounding, free, and
you have already done the work in `research/classics_top10.md`.

### Instagram and TikTok, second

Bookstagram and BookTok are large and on-topic, but reach is algorithmic and stops when you do.
Worth the effort as a secondary channel, not as the foundation.

### Etsy, phase two

Etsy brings its own buyers, which is worth a lot when nobody has heard of you. It also costs about
6.5% plus listing and payment fees and puts you back inside someone else's shop. Open it after the
site converts, as a second channel.

### Advertising, only on the gate below

**The €60 advertising reserve stays locked until one product page has had 100 visitors and at
least one sale with no paid traffic.** Sixty euro against an unproven page buys information you
already have. Against a page known to convert, it is a real test.

---

## The numbers to watch

Record these weekly in `logs/ecommerce_metrics.csv`.

| Number | Where from | What good looks like |
|---|---|---|
| Visitors | Cloudflare Pages analytics, free | Rising month on month |
| Product page views | same | Over half of all visits |
| Orders | Stripe | The only one that counts |
| Conversion | orders ÷ visitors | 1–2% is normal retail, 0.5% is survivable at this margin |
| Average order value | Stripe | Above €65 means the sets are working |
| Gross margin | `research/sourcing_and_margins.md` | Never below 40% |
| Pins published | Pinterest | 35 a week |

---

## Kill rules, agreed in advance

Written now, while nothing is at stake, so they cannot be argued with later.

- **A title with no sales after 90 days** comes off the front page. It costs nothing to leave
  listed, so it stays in the collection, but it stops getting pins.
- **The shop with fewer than 3 orders by 2026-12-31** is killed, and `decision_log.md` records it
  plainly. That is sixteen weeks, which spans the entire Christmas gifting season. If a classic
  books shop cannot sell three books in the run-up to Christmas, the problem is not the season.
- **The advertising reserve is never released** except on the gate above.
- **The margin floor is 40%.** Any decision that breaks it is the wrong decision, including a
  discount that feels like it will win a sale.

---

## The honest part

This repository contains five previous business models and no revenue. The constraint has never
been the quality of the idea. It has been that no account was ever created and no offer was ever
sent.

So the test for this one is not whether the research is good. It is step 5 and step 6 of the launch
list: a Stripe account and a Lulu account, both existing, within 48 hours. If those two things do
not happen this week, the sixth model will not fix it either, and the right move is to say so in
`decision_log.md` and stop.

The work Claude can do is done. The site is built, the margins are calculated, the legal pages are
written, the covers are designed. What is left needs a person with a bank account.
