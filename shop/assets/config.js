// Single place to fill in real details. Everything on the site reads from here.
window.SITE = {
  brand: "Slán Home",
  tagline: "Personalised Irish gifts, designed in Dublin, printed to order in the EU.",
  domain: "https://example.com",              // replace with the live domain once bought
  trader: {
    name: "TRADER NAME",                        // your legal trading name (required by Irish consumer law)
    address: "TRADING ADDRESS, DUBLIN, IRELAND",
    email: "hello@example.com",
    phone: ""                                   // optional
  },
  social: {
    instagram: "",                              // e.g. https://instagram.com/slanhome
    tiktok: ""                                  // e.g. https://tiktok.com/@slanhome
  },
  // Stripe Payment Links. Leave empty until created; buttons then show "Checkout opening soon".
  stripe: {
    ogham_a4: "",
    ogham_a3: "",
    name_a4: "",
    name_a3: "",
    mug: ""
  },
  prices: { ogham_a4: 29.95, ogham_a3: 39.95, name_a4: 27.95, name_a3: 37.95, mug: 18.95 },
  delivery: { ireland: "Free, tracked, about 5–8 working days from order", production: "1–2 working days after you approve the proof" }
};
