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

## Step 3 — hosting, free, about ten minutes

**The one setting that matters, on any host: the site is in `shop/`, not at the repository
root.** This repository is the whole business, so the root holds the ledger, the research and the
playbook, and there is no `index.html` in it. Point the host at the root and every page returns
"Page not found". That is the single most likely reason a deploy looks broken.

### Netlify

`netlify.toml` in the repository root already sets this, so a fresh site needs nothing typed in.

1. Sign up at app.netlify.com.
2. **Add new site → Import an existing project → GitHub**, and pick `userSkit/SKITROOPER`.
3. Branch to deploy: **`claude/10-to-10k-business-8cf955`**.
   Build command: **empty**. Publish directory: **`shop`**.
4. Deploy. You get a working `*.netlify.app` address straight away.
5. **Domain management → Add a domain**, then follow the DNS records it shows you.

If a site was already created before `netlify.toml` existed, its saved settings win until you
trigger a fresh deploy. Either **Site configuration → Build & deploy → Build settings** and set
the publish directory to `shop` by hand, or **Deploys → Trigger deploy → Clear cache and deploy
site** so it re-reads the file.

### Cloudflare Pages, if you prefer it

1. dash.cloudflare.com → **Workers & Pages → Create → Pages → Connect to Git**.
2. Pick `userSkit/SKITROOPER`, production branch **`claude/10-to-10k-business-8cf955`**.
3. Build command: **empty**. Build output directory: **`shop`**. Cloudflare ignores
   `netlify.toml`, so this one has to be typed in.

Either way there is no build step, no dependencies and nothing to install. The site is plain HTML,
one stylesheet and two scripts, which is why it will still work in five years.

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

---

## If the deploy looks broken

**"Page not found" on every page, including the home page.** The host is serving the repository
root instead of `shop/`. Set the publish directory to `shop`. On Netlify this is already in
`netlify.toml`, but a site created before that file existed keeps its old saved setting until you
clear the cache and redeploy.

**The home page works but every link 404s.** Same cause, caught halfway: the publish directory is
right but the deploy is stale. Trigger a fresh deploy.

**Pages load but there are no covers, no header and no footer.** `shop/assets/site.js` did not
load. Open the browser console. Almost always the publish directory is a level too deep, so
`/assets/site.js` resolves to nothing.

**Prices show as `€42.00` and never change when you edit config.** Same thing: `config.js` is not
loading. The numbers you are seeing are the fallback text in the HTML.

**Everything works but the fonts look wrong.** Google Fonts is blocked or slow. The site falls back
to Garamond and then Georgia, which is a deliberate fallback chain and not a bug.
