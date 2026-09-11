/* Lampblack Press — the only file you edit to go live.
   Everything on every page reads from here. Fill in the marked fields, redeploy, done. */
window.SITE = {
  brand: "Lampblack Press",
  tagline: "The classics, printed one at a time and bound to be kept.",
  domain: "https://example.com",                 // <- the live domain, once bought

  // Irish consumer law requires a real trading name, address and contact on the site.
  trader: {
    name: "TRADER NAME",                         // <- your trading name
    address: "TRADING ADDRESS, DUBLIN, IRELAND", // <- your address
    email: "hello@example.com",                  // <- a real monitored inbox
    phone: ""                                    // optional
  },

  social: {
    pinterest: "",                               // e.g. https://pinterest.com/lampblackpress
    instagram: "",
    tiktok: ""
  },

  /* Stripe Payment Links. Create one per line in the Stripe dashboard, paste the URL here.
     While a value is empty its button reads "opening soon" and points at the contact page,
     so the site is safe to publish before Stripe is finished. */
  stripe: {
    single: "",        // one volume, customer picks the title in the link's custom field
    set3: "",          // any three volumes
    set6: "",          // any six volumes
    set10: "",         // the complete collection

    /* Optional. Start with the single link above and leave this empty: four links is a
       ten-minute job. Later, make one Payment Link per title and paste them here by slug
       (e.g. odyssey: "https://buy.stripe.com/...") — each book page then checks out its
       own title instead of asking the buyer to name it again. Nothing else changes. */
    books: {}
  },

  /* Retail prices. Every price shown anywhere on the site comes from here.
     Built on a print cost of roughly €7.50 + €0.016 per page, plus delivery,
     plus Stripe at 1.5% + €0.25 with 23% Irish VAT on the fee.

     Per book that works out at €34 / €31 / €29 / €28 as the set grows.
     Sets run at about 46% gross margin. The single runs thinner, about 41%,
     because one book absorbs a whole parcel's postage — that is deliberate,
     and it is why every page pushes the three-volume set.

     Floor: 40%. Below that a sale is not worth making. Recheck these against
     the real Lulu figures (local task 14) before changing anything. */
  prices: { single: 34.00, set3: 93.00, set6: 174.00, set10: 280.00 },

  delivery: {
    ireland: "3 to 5 working days to print, then 2 to 4 days with the courier.",
    eu: "3 to 5 working days to print, then 4 to 8 days. Printed inside the EU, so no customs charges.",
    world: "3 to 5 working days to print, then 7 to 14 days. Duties may apply outside the EU.",
    freeText: "Ireland and the EU"               // where delivery is included in the price
  }
};
