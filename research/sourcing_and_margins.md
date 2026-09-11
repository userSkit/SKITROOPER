# Getting the books made and out the door, cheaply

Written 2026-09-11. Every figure marked **(confirm)** is an estimate from published pricing that
needs a two-minute check in the supplier's live calculator before you commit to a retail price.
No money has been spent and no account has been created.

## The decision

**Print on demand, white-label, shipped direct from the printer to the customer. Start on Lulu.
Move to Bookvault for foiled special editions once something has actually sold.**

You never hold stock, you never buy a book before it is paid for, and you never pack a parcel. The
customer pays Stripe, you place one order with the printer, the printer ships it in unbranded
packaging with your name on the packing slip. On a €150 budget this is not the best option, it is
the only option: every alternative requires buying inventory before you know whether anyone wants it.

## The options that were considered and rejected

| Route | Upfront cost | Why not |
|---|---|---|
| **Wholesale existing editions** (Wordsworth, Macmillan Collector's Library) | €500–2,000 for a viable range | Needs real inventory capital, a trade account, and storage. Also you are reselling someone else's product at their margin, with no brand of your own. |
| **Second-hand / antiquarian sourcing** | €100+ per good copy | Genuinely luxurious, genuinely unscalable. Every item is one-of-one, so no repeat product, no photography reuse, no automation. The opposite of annual income. |
| **Amazon KDP hardcover** | €0 | Cheap and easy, but Amazon owns the customer, the packaging is Amazon's, and you cannot build a brand inside someone else's shop. Useful later as a second channel, not as the shop. |
| **Local Dublin printing** | ~€200 minimum run | Short-run hardcover binding is not something a copy shop does. Quotes start at a hundred copies. |
| **Digital-only (beautiful PDFs)** | €0 | 100% margin and instant delivery, but it is not a luxury object and it does not match what you asked for. Worth adding later as a €9 upsell attached to every physical order. |

## Lulu versus Bookvault

| | **Lulu** | **Bookvault** |
|---|---|---|
| Setup fee per title | None | £19.95 free plan, £4.95 on Indie (£24.95/mo), free on Pro (£89.95/mo) |
| Monthly fee | None | None on the free plan |
| White-label shipping | Yes, to 150 countries | Yes |
| Production time | 3–5 working days | 5–7 working days |
| EU printing | Yes — EU orders print inside the EU, so no customs for EU customers | UK-based, with EU print partners |
| Special finishes | Case wrap or dust jacket only | Foiling from £2.50/copy, sprayed edges, ribbon markers, custom endpapers |
| Best for | Launching with zero fixed cost | The premium edition, once demand is proven |

**Start on Lulu** because the fixed cost is zero and ten titles cost nothing to list. Bookvault's
foiling is what actually makes a book feel expensive, but £2.50 a copy plus a setup fee per title is
money spent before a single sale. Move when there is revenue to move with.

The important shared feature is white-label shipping: the parcel arrives with no printer branding
and your name on the docket. Without that, print-on-demand cannot carry a premium brand.

## What a book costs to make

Lulu's published hardcover pricing works out to roughly a fixed binding charge plus a per-page rate:

```
print cost ≈ €7.50 (hardcover case wrap binding) + €0.016 per page     (confirm)
```

Derived from Lulu's published figure of roughly $11–15 for a 200-page hardcover, with a dust jacket
adding $1–2. Converted at approximately €0.92 to the dollar. **Confirm in Lulu's live calculator
before pricing.**

| Title | Pages | Print cost |
|---|---|---|
| The Art of War | 110 | €9.26 |
| Meditations | 160 | €10.06 |
| The Great Gatsby | 200 | €10.70 |
| The Picture of Dorian Gray | 250 | €11.50 |
| Frankenstein | 280 | €11.98 |
| The Odyssey | 330 | €12.78 |
| The Iliad | 380 | €13.58 |
| Pride and Prejudice | 400 | €13.90 |
| Dracula | 450 | €14.70 |
| Jane Eyre | 520 | €15.82 |
| **Average** | **288** | **€12.43** |

## What a sale actually earns

Three costs come out of every order: print, shipping, and the card fee.

**Card fee.** Stripe in Ireland charges 1.5% + €0.25 on cards issued in the EEA, and 3.25% + €0.25
on everything else. Irish VAT at 23% is charged on top of the fee itself. You are below the VAT
registration threshold, so you cannot reclaim it — treat the fee as 23% more expensive than the
headline rate. There is no monthly fee and Payment Links cost nothing extra.

**VAT on the books themselves is zero.** Printed books are zero-rated in Ireland, and have been for
ebooks and audiobooks too since January 2024. The VAT registration threshold is €85,000 for goods,
measured on a rolling twelve months. Below that you do not register, do not charge VAT, and do not
file returns. For a business this size that removes an entire category of work — and it means €42
of revenue is €42 of revenue, not €34 after VAT.

### Per-order economics

| | Single | Three volumes | Six volumes | The full ten |
|---|---|---|---|---|
| Price | €42 | €108 | €198 | €310 |
| Print (avg €12.43/book) | €12.43 | €37.29 | €74.58 | €124.30 |
| Shipping, one parcel | €6.50 | €11.00 | €16.00 | €22.00 |
| Stripe (EEA card, inc. VAT) | €1.21 | €2.30 | €4.13 | €6.13 |
| **Cost** | **€20.14** | **€50.59** | **€94.71** | **€152.43** |
| **Gross profit** | **€21.86** | **€57.41** | **€103.29** | **€157.57** |
| **Margin** | **52%** | **53%** | **52%** | **51%** |

Margin holds at roughly half the sale price across the range, which is the number to protect. If a
decision drops it below 45%, do not make that decision.

### Why the pricing ladder is built this way

A single volume at €42 is priced so that the three-volume set at €108 is visibly better value —
€36 a book instead of €42. The set is the product you actually want to sell, because it nearly
triples the order value while the shipping and card fee barely move. The same parcel, the same two
minutes of your time, €57 of profit instead of €22.

This is also why *The Iliad* is in the collection despite unremarkable demand of its own. Nobody
buys half of Homer, and a matching pair turns a €42 order into a €108 one.

Against the market, €42 sits between the mass-market premium classics (Wordsworth and Macmillan
Collector's Library, €12–22) and the genuine collector presses (Folio Society and Easton Press,
€50–150). That is the right gap: expensive enough to read as a gift object, cheap enough that
someone buys it without deliberating for a week.

## The €150, allocated

| Item | € | When |
|---|---|---|
| Domain, .com, first year | 11 | Day 1 |
| Hosting — Cloudflare Pages, free tier | 0 | Day 1 |
| Stripe account | 0 | Day 1 |
| Lulu account and ten title listings | 0 | Week 1 |
| Two proof copies, printed and posted to you | 44 | Week 1 |
| Photography — a phone, a window, an afternoon | 0 | Week 2 |
| Pinterest, Instagram, SEO | 0 | Ongoing |
| Refund and reprint buffer | 35 | Held |
| Advertising reserve — **locked** | 60 | Released only on the rule below |
| **Total** | **150** | |

**The proof copies are not optional.** You are asking people for €42 for an object you have never
held. Order two — one short book and one long one — photograph them properly, and use those photos
everywhere. It is the single highest-value €44 in the plan, and it is also your quality control: if
the proof looks cheap, you find out for €44 instead of finding out through refund requests.

**The advertising reserve stays locked** until one page has had 100 visitors and at least one sale
without any paid traffic. €60 of advertising against an unproven page buys data you already have,
which is that you do not know whether it converts. €60 against a page that converts at 2% is a test
worth running.

## Getting them out — the marketing, honestly

Four channels were considered against a zero budget and the requirement that the result keeps
working without you.

**Pinterest, first and hardest.** This is the recommendation, and it is not the obvious one.
Pinterest is a search engine that happens to look like a social network, and the difference matters
enormously: an Instagram post is dead in 48 hours, while a pin keeps returning search traffic for
months or years. Searches like "dark academia bookshelf" and "classic book covers" are exactly what
this product photographs as. It is the only free channel whose output compounds, which is the only
honest route to income that arrives without you working for it that week. Ten pins per title, one
board per book, a board for the full collection.

**SEO on the question people actually ask.** "Which translation of the Odyssey should I read" is a
real, high-volume, low-competition query, and you have a legitimate answer because you had to
research it to choose an edition. A genuinely useful comparison page for each title pulls in exactly
the person who is about to buy a copy of that book. Slow, compounding, free, and it is the same
research you have already done.

**Instagram and TikTok.** Bookstagram and BookTok are large and on-topic, but the reach is
algorithmic and it stops the week you stop posting. Worth doing as a secondary channel. Do not build
the plan on it.

**Etsy, in phase two.** Etsy brings its own buyers, which is worth a great deal when nobody knows
your name. It costs roughly 6.5% plus listing and payment fees, and it puts you back in someone
else's shop. The right time is after the site converts, as a second channel rather than the first.

**Paid advertising, not yet.** €60 is not an advertising budget, it is a single test. Treated as one
it is useful. Treated as a growth channel it is €60 gone.

## What "automatic annual income" would actually take

Honest arithmetic, at a €85 average order and 52% margin:

| Orders per week | Revenue/yr | Gross profit/yr | Your time |
|---|---|---|---|
| 1 | €4,420 | €2,300 | ~20 min/wk |
| 3 | €13,260 | €6,900 | ~1 hr/wk |
| 8 | €35,360 | €18,400 | ~2.5 hr/wk |

The work per order is genuinely small — one order placed with the printer, about two minutes — and
it stays small as volume grows, because the printer does the manufacturing, packing and posting.
That is the part that is automatic, and it is real.

The part that is not automatic is demand. Nothing here makes people find the shop. Traffic comes
from the pins, the pages and the posts, and those take months of consistent work before they
compound. Anyone who tells you a €150 shop produces passive income in its first year is selling
something. What €150 buys is a shop that is genuinely ready to take money, at a margin that works,
with the manufacturing problem solved — and then the honest question is whether you keep publishing
pins and pages for six months.

## Order flow

1. Customer pays through a Stripe Payment Link. You get an email.
2. You place the matching order on Lulu with the customer's address. About two minutes.
3. Lulu prints, packs in unbranded packaging with your packing slip, and ships.
4. You paste the tracking number into a reply to the customer.
5. You add the sale to `ledger.csv` as pending, and mark it confirmed when the money clears.

Steps 2 and 4 can be automated later through Lulu's print API, which is the difference between two
minutes an order and zero. Do not automate it before there are orders to automate.

## Sources

- [Lulu — sell on your own site, white-label dropshipping](https://www.lulu.com/sell/sell-on-your-site)
- [Lulu — white-label shipping](https://blog.lulu.com/white-label-shipping/)
- [Lulu — pricing your book to sell](https://blog.lulu.com/pricing-your-book-to-sell/)
- [Bookvault](https://bookvault.app/)
- [Bookvault — custom foiled books](https://bookvault.app/print-custom-foiled-books-with-bookvault/)
- [Print on demand books: services for Shopify — Shopify](https://www.shopify.com/blog/print-on-demand-books)
- [Stripe fees Ireland — exact rates and VAT](https://www.fintask.ie/blog/stripe-fees-ireland)
- [Stripe pricing](https://stripe.com/pricing)
- [Revenue.ie — zero rate of VAT](https://www.revenue.ie/en/vat/vat-rates/what-are-vat-rates/zero-rate-vat.aspx)
- [Revenue.ie — electronic publications](https://www.revenue.ie/en/vat/vat-on-services/electronic-services/electronic-publications/index.aspx)
- [VAT threshold Ireland — Xero](https://www.xero.com/ie/guides/vat-threshold-ireland/)
- [Citizens Information — Value Added Tax](https://www.citizensinformation.ie/en/money-and-tax/tax/duties-and-vat/value-added-tax/)
