# SKITROOPER — €10 → €10,000 in received cash

One operator (Dublin), one computer, €150 of working capital. Money in the bank is the only metric.

**Current business: Lampblack Press.** Ten out-of-copyright classics sold as cloth-cased hardbacks
at €34 a volume, printed one copy at a time by a print-on-demand press inside the EU that ships
direct to the customer. No stock, no packing, no warehouse. About 46% gross margin on sets, and printed
books carry no VAT in Ireland.

## Start here

| If you want to | Read |
|---|---|
| Know which books and why | `research/classics_top10.md` |
| Know what it costs and what it earns | `research/sourcing_and_margins.md` |
| Actually launch it | `system/lampblack_playbook.md` |
| Put the site online | `system/deploy.md` |
| Make the cover files for the printer | open `system/cover-wrap.html` in a browser |
| Know why anything was decided | `decision_log.md` |

## How this repo works

| File | What it is | Who writes it |
|---|---|---|
| `ledger.csv` | Every euro in and out. **Nothing counts until you confirm it.** | Claude drafts, you confirm |
| `decision_log.md` | Every pivot, kill and double-down, with the reason | Claude |
| `research/` | The evidence behind each decision, with links | Claude |
| `shop/` | The live website. Deploys straight from git, no build step | Claude |
| `system/` | The written, repeatable operating system | Claude |
| `logs/` | Orders, metrics, daily actions | You report, Claude records |
| `INTAKE.md` | Questions still unanswered | You |

## The shop

`shop/` is a static site: plain HTML, one stylesheet, two scripts, no dependencies and no build
step. Every book cover and spine on it is drawn from the catalogue in `shop/assets/books.js`, so
the artwork can never drift from the product. Everything you need to change before launch lives in
`shop/assets/config.js`.

## Stage gates

| Stage | Target banked | Status |
|---|---|---|
| 1 | €100 | **Live** — Lampblack Press. Site built, €150 unspent. Kill date 2026-12-31 |
| 2 | €1,000 | Locked |
| 3 | €5,000 | Locked |
| 4 | €10,000 | Locked |

A stage advances only when `ledger.csv` shows the target as confirmed, received cash.

## The next two things

Neither can be done by Claude, and nothing else matters until both are done.

1. **A Stripe account exists**, with the live domain on it.
2. **A Lulu account exists**, with one title uploaded and one proof copy ordered.

Six business models have been researched in this repo and none has taken a euro. The constraint
has never been the idea. It is that no account was ever created.

## Human-only actions (Claude never does these)

Payments, purchases, ad spend, account creation, logins, sending any message or post, accepting
terms, anything touching tax, legal or personal data. Claude prepares each of these as a one-click
decision for you.
