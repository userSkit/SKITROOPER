# Putting the shop live and passing Stripe's website check

## What Stripe looks for on the site (all present once `shop/assets/config.js` is filled in)
- Business name and a working contact (email) — footer, contact page
- What you sell, with prices in euro — home page and product pages
- Delivery policy — `/legal/delivery.html`
- Refund and cancellation policy — `/legal/returns.html`
- Terms of sale and privacy — `/legal/terms.html`, `/legal/privacy.html`
- The site must be live on a real domain (not a placeholder)

## Step 1 — fill in `shop/assets/config.js` (2 minutes, or send me the details and I do it)
- `trader.name`, `trader.address`, `trader.email`
- `domain` once bought
- `social.instagram`, `social.tiktok` once created
- `stripe.*` Payment Link URLs once created. Until then, buy buttons read "checkout opening soon" and go to the contact page, which is fine for Stripe's review.

## Step 2 — Cloudflare Pages (free, ~5 minutes)
1. Sign up at dash.cloudflare.com.
2. Workers & Pages → Create → Pages → Connect to Git → pick `userSkit/SKITROOPER`.
3. Production branch: `claude/10-to-10k-business-8cf955`. Build command: leave empty. Build output directory: `shop`.
4. Deploy. You get a `*.pages.dev` address immediately.
5. Custom domains → add your domain → follow the DNS steps (if you buy the domain through Cloudflare Registrar it is automatic).

## Step 3 — Stripe
1. stripe.com → Start now → Individual / sole trader, Ireland. Give the live domain as the website.
2. Payment Links → New. Create five: Ogham A4 €29.95, Ogham A3 €39.95, Name print A4 €27.95, Name print A3 €37.95, Mug €18.95.
   On each: "Collect customers' addresses" → Shipping, Ireland only. "Custom fields" → add "Name to print" (or "Saying" for the mug) and, for the name print, "Optional date line".
3. Paste the five URLs to me (or into `config.js`). Buttons go live on the next push.

## Step 4 — Printful (free) once Stripe is done
1. printful.com → sign up → no store connection needed for manual orders.
2. Order one A4 enhanced matte poster sample to your address (about €12 with shipping) using the design file I give you. Photograph it for the site and social.
3. When a real order arrives: I produce the print file, you upload it to Printful, enter the customer's address, pay with Revolut.

## Step 5 — Etsy (parallel traffic channel)
1. etsy.com → Sell on Etsy → individual, Ireland. If the setup fee shown is over €29, stop and tell me.
2. I write the three listings; you paste them with the images from the site and the sample photos.

## Checking the site before Stripe review
Open the `*.pages.dev` address on your phone. Type a name on the home page: the Ogham print should redraw. Open every footer link. No orange placeholder boxes should remain.
