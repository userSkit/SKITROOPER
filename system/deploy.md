# Putting Lampblack Press live

Four steps, about an hour of actual work, €11 of actual money.

---

## Step 1 — fill in `shop/assets/config.js`

This is the only file that needs editing. Every page on the site reads from it.

| Field | What goes in it |
|---|---|
| `trader.name` | Your trading name. Required on the site by Irish consumer law. |
| `trader.address` | Your trading address. Also required. |
| `trader.email` | A real inbox you actually read. |
| `domain` | The live domain, once bought. |
| `social.*` | Pinterest first. The others when they exist. |
| `stripe.*` | The four Payment Link URLs, once created in step 3. |

Leave `stripe.*` empty for now. Every buy button then reads "Checkout opening shortly" and points
at the contact page, which is a perfectly respectable state for Stripe's own review to find.

---

## Step 2 — the domain, about €11

Buy `lampblackpress.com` if it is free. Cloudflare Registrar sells domains at cost and makes
step 3 automatic; Porkbun and Namecheap are fine alternatives.

Check first that the name is not already a live publishing business: search the CRO register at
core.cro.ie and the EUIPO trade mark database. Renaming now costs one line of config and a
re-export of the covers. Renaming after launch costs the domain, the Pinterest account and the
search rankings.

---

## Step 3 — Cloudflare Pages, free, about ten minutes

1. Sign up at dash.cloudflare.com.
2. **Workers & Pages → Create → Pages → Connect to Git**, and pick `userSkit/SKITROOPER`.
3. Production branch: **`claude/10-to-10k-business-8cf955`**.
   Build command: **leave it empty**. Build output directory: **`shop`**.
4. Deploy. You get a working `*.pages.dev` address straight away.
5. **Custom domains → add your domain.** If the domain is at Cloudflare this is automatic;
   otherwise follow the two DNS records it shows you.

There is no build step, no dependencies and nothing to install. The site is plain HTML, one
stylesheet and two scripts, which is why it will still work in five years.

---

## Step 4 — Stripe

Stripe checks that a site has six things before it will let you take live payments. All six are
already written and live on the site:

| What Stripe looks for | Where it is |
|---|---|
| Business name and working contact | Footer and `/legal/contact.html` |
| What you sell, priced in euro | Home page, `/collection.html`, and each book page |
| Delivery policy | `/legal/delivery.html` |
| Refund and cancellation policy | `/legal/returns.html` |
| Terms of sale | `/legal/terms.html` |
| Privacy notice | `/legal/privacy.html` |

1. stripe.com → individual / sole trader, Ireland. Give the live domain, not the `pages.dev` one.
2. Create the four Payment Links exactly as set out in `system/lampblack_playbook.md`.
3. Paste the four URLs into `config.js` and redeploy. The buttons go live on the next push.

---

## Before you tell anyone about it

Open the live site on a phone and check all of this:

- [ ] The shelf of book spines appears on the home page and the spines are different widths.
- [ ] Tapping a spine opens that book's page.
- [ ] Every one of the ten covers renders, with the title in gold.
- [ ] Prices show as real numbers, not as `€42.00` frozen in the HTML. They come from `config.js`.
- [ ] Every footer link opens a real page.
- [ ] No dashed red boxes remain anywhere. Each one marks something still to fill in.
- [ ] The trader name and address in the footer are yours, not `TRADER NAME`.
- [ ] `/legal/returns.html` names you in the cancellation form.
- [ ] The site does not scroll sideways at phone width.

---

## What is deliberately not here

**No analytics and no cookie banner.** The site sets no tracking cookies, which is why it needs no
consent banner and why the privacy notice is short and true. Cloudflare Pages gives you visitor
counts server-side, for free, without touching the visitor. If you later add Google Analytics you
will need a consent banner and a rewritten privacy notice, so weigh that properly.

**No cart.** Four Stripe Payment Links do the same job with no backend, no session handling and no
security surface. A cart becomes worth building at roughly twenty orders a week, and not before.

**No newsletter signup.** Worth adding once there is something to send. An empty list sending
nothing is worse than no list.
