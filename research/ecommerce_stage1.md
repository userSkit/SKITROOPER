# Ecommerce track — product research, suppliers, budget, compliance

Date: 2026-09-10. Operator chose dropshipping over the service tracks with full knowledge of the odds (see decision log). This file is the evidence base for the store in `shop/`.

## The number: what a real test costs

| Item | Cost | Notes |
|---|---|---|
| Domain (.ie or .com) | ~€12–20/yr | .ie needs proof of Irish connection; .com is instant |
| Hosting | €0 | Cloudflare Pages, private GitHub repo, free SSL — https://backrun.co/blog/deploy-project-to-cloudflare-pages |
| Payments | €0/month | Stripe Ireland: 1.5% + €0.25 per EEA card, 23% VAT on the fee — https://www.fintask.ie/blog/stripe-fees-ireland |
| Samples (2 products) | €40–60 | Needed to film real video and check quality before selling |
| Ad tests, 2–3 products | €300–400 | ~€20/day × 5–7 days per product |
| Refund/returns buffer | €50 | 14-day cooling-off is law |
| **Minimum viable test** | **~€500** | Organic-only floor: ~€150, but expect 60–90 days of daily posting before traction — https://www.stackmatix.com/blog/tiktok-growth-strategies-2026 |

Industry baseline for context: only 1–5% of dropshippers build a sustainable business; beginner net margins under 15%; sources say to expect $5–10k to scale — https://trueprofit.io/blog/dropshipping-success-rate. A €500 test can be lost in full.

## Product picks (3), with the case for each

Selection rules: solves a visible problem, demo-able in a 15-second video, non-electrical (no battery/charger safety exposure), light and small, retail €20–40 with ≥2.5× markup, available from an EU-warehouse supplier so delivery is 2–7 days and the supplier is the EU importer.

### 1. Hard-water shower filter — lead product, Dublin angle
- **Why:** Dublin water is hard, ~177 mg/L, with parts of the Leixlip supply up to ~300 mg/L — https://www.waterhardnessscale.com/en/ireland/dublin/dublin and https://www.water.ie/help/water-quality/hard-water. Limescale on taps and kettles is a daily annoyance people already recognise. A local "check your Eircode on water.ie" hook makes content specific and honest.
- **Market price:** filtered shower heads retail ~$20–50 — https://best-shower-heads.com/best-filtered-shower-heads. Marketplace floor in the EU ~€11–17 for generic units — https://www.ebay.de/itm/197078676192.
- **Supplier route:** Spocket lists a filtered shower head set with dropship fulfilment — https://www.spocket.co/dropship/home-garden/luxury-filtered-shower-head-set-20-stage-shower-filter-for-h. Supplier cost and EU-warehouse availability **to be verified inside the Spocket/BigBuy catalogue** (operator account needed).
- **Our price:** €34.95 incl. delivery. Target cost ≤ €14 landed.
- **Claim discipline:** filters reduce chlorine, sediment and some scale-forming minerals. They do **not** "soften" water. The page says "helps reduce", never "cures" or health claims.

### 2. Reusable pet-hair remover roller — evergreen, high margin
- **Why:** Ireland has a large dog and cat population; the product demos instantly on a sofa. Reusable, no refills.
- **Costs:** wholesale ~$6.50–7.50 per unit from HK suppliers at low quantity; retail $11–27 — https://sourcing.hktdc.com/en/Product-Detail/Dropshipping-Products-2026-Portable-2in-1-Reusable-Pet-Hair-Remover-Brush-Lint-Roller--1Z03PWMZH. CJdropshipping carries it — https://cjdropshipping.com/product/2-1-reusable-pet-hair-remover-brush-lint-roller-portable-effective-self-cleaning-tool-for-cat-dog-fur-hair-dust-removal-brush-p-1368888013161107456.html (check for an EU warehouse option).
- **Our price:** €19.95 incl. delivery. Target cost ≤ €7 landed.

### 3. Satin pillowcase pair — beauty/sleep trend, gift-able
- **Why:** hair-care and sleep accessories are on the 2026 rising-search lists (hair repair masks, sleep bonnets) — https://meetglimpse.com/google-trends/products/. Low weight, no safety exposure, strong Q4 gifting.
- **Our price:** €24.95 for a pair. Target cost ≤ €9 landed. Supplier cost **to verify** in BigBuy/Spocket.
- **Claim discipline:** "less friction on hair and skin than cotton." No dermatological claims.

### Rejected
- Anything with a battery or plug (heated blankets, lint shavers, LED strips): CE/safety exposure falls on the seller.
- Supplements, olive oil, "hydrogen water": health claims and food law.
- Halloween: 7-day shipping and no ad budget means we miss the window.

## Suppliers (EU warehouse first)
| Supplier | Why | Source |
|---|---|---|
| BigBuy (Spain) | EU stock, 2–7 day EU delivery, large catalogue | https://usetorg.com/blog/best-dropshipping-suppliers-in-europe |
| Spocket | EU/US suppliers, 2–7 days | https://www.autods.com/blog/suppliers-marketplaces/dropshipping-suppliers-europe/ |
| CJdropshipping | Cheapest, has some EU warehouses, slower otherwise | https://cjdropshipping.com/blogs/business-insights/How-EU-Duty-Changes-Impact-Your-2026-Dropshipping-EU-Business |

**Why EU warehouse is not optional:**
- Since 1 July 2026 every parcel from outside the EU pays a flat €3 customs duty on top of VAT — https://www.avalara.com/blog/en/europe/2025/11/eu-end-150-customs-duty-exemption-2026.html
- Under the General Product Safety Regulation, whoever places the product on the EU market is responsible and must name an EU responsible person on the listing — https://www.bakermckenzie.com/en/insight/publications/resources/product-risk-radar-articles/general-product-safety-regulation. Buying from an EU-established supplier means that supplier, not you, is the importer.

## Legal minimum for the site (Ireland)
- 14-day cooling-off period, cancellation process and form shown before purchase — https://www.ccpc.ie/business/sell-online-business-know-obligations/
- Trader name, geographic address and email displayed.
- Total price incl. VAT and delivery before checkout.
- Register with Revenue as a sole trader once trading; income declared regardless of amount. (Human-only.)

## Traffic plan
Phase 1 (organic, €0): one 10–20s video per day per product on TikTok and Instagram Reels, filmed with the sample. Expect 4–6 posts/week for 8+ weeks before reliable traction — https://ecommerce.co/blog/tiktok-organic-dropshipping-strategy
Phase 2 (paid, from the €300–400): Meta or TikTok ads, €20/day per product, kill rules in `system/ecommerce_playbook.md`.
