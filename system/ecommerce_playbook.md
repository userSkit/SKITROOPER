# Ecommerce playbook — Slán Home (own site + Stripe, no Shopify)

## The €50 plan

| Item | € | Notes |
|---|---|---|
| Domain (.com, 1 year) | ~12 | Namecheap/Cloudflare Registrar. Skip .ie for now |
| One sample: shower filter | ~15–20 | Ordered from the supplier you sign up with, to your own address, so you can film it and check it is not rubbish |
| Buffer for first refund / postage | ~18 | Untouched unless needed |
| Hosting, payments, store | 0 | Cloudflare Pages free; Stripe pay-per-sale |
| Ads | 0 | Unlocked only from profit |

What €50 buys: a live shop that can take money, one product you can film honestly, and a legal footing. What it does not buy: a single visitor. Every visitor in phase 1 comes from videos you post. Ads start when the store has paid for them itself.

## Setup, in order (all human-only steps, each one is a few clicks)

1. **Stripe account** at stripe.com. Choose Individual / sole trader, Ireland. It asks for name, address, date of birth, and your Revolut IBAN for payouts.
2. **Three Payment Links** in Stripe → Payment Links → New. One per product: Hard-Water Shower Filter €34.95, Reusable Pet-Hair Roller €19.95, Satin Pillowcase Pair €24.95. Tick "collect shipping address", set Ireland only. Copy each link URL and paste the three to me. I put them into the site.
3. **Supplier account**: BigBuy (bigbuy.eu) or Spocket. Search the three products, confirm EU-warehouse stock and unit cost. Paste me the cost and shipping price for each. If any product's landed cost is above the targets in `research/ecommerce_stage1.md`, I drop or reprice it before launch.
4. **Order one sample** (shower filter) to yourself. ~€15–20. This is the one purchase that is not optional.
5. **Domain**: buy a .com. Tell me the name; I update the site links.
6. **Cloudflare Pages**: sign up free, connect the GitHub repo, set the build output directory to `shop`, add the custom domain. Free SSL is automatic.
7. **Fill the placeholders**: your trading name, address and email go in the footer and legal pages. I'll do the edits once you give me the text. This is required by the CCPC before you take an order.
8. **Revenue**: register as a sole trader on ROS/myAccount once the first sale lands. Not before.

## Order fulfilment (per order, ~5 minutes)
1. Stripe emails you a payment with the customer's name and address.
2. Open the supplier, place the order for that product to the customer's address, pay with Revolut.
3. Paste me the supplier order number. I log it in `logs/orders.csv` and draft the dispatch email.
4. You send the dispatch email with the tracking number.
5. When it arrives, I draft a one-line "all good?" email. Genuine reviews only; we never invent one.

## Content plan (phase 1, €0 traffic)
- One 10–20 second video per day, TikTok and Instagram Reels, same clip. Film with the sample. No face needed.
- Shower filter hooks: "Dublin water is 177 mg/L hard. Here's what it does to a shower screen in a month." / "Check your Eircode on water.ie, then watch this."
- Pet roller hooks: before/after on a sofa, 8 seconds.
- Pillowcase hooks: cotton vs satin friction test with a strand of hair.
- I write a 7-day script bank each Sunday. You film and post. Link in bio to the site.
- Expect 8+ weeks of daily posting before anything reliable happens. That is the published baseline, not pessimism.

## Kill rules and phase 2
- **Product kill:** 30 days of posting with zero orders → drop the product from the site.
- **Store kill:** 60 days with fewer than 3 total orders → the decision log records it and we return to the service tracks.
- **Ads unlock:** once the ledger shows €150 in confirmed profit, spend €20/day for 5 days on the best-performing product's best video. Kill the ad if cost per purchase exceeds gross margin after €60 spent.

## Numbers I will track (logs/ecommerce_metrics.csv)
date, videos posted, views, site visits, orders, revenue, supplier cost, Stripe fees, refunds, net profit.
