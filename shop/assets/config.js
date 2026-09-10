// Single place to fill in real details. Everything on the site reads from here.
window.SITE = {
  brand: "Slán Home",
  tagline: "Personalised Irish gifts, designed and printed in Dublin, posted next working day.",
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
    ogham_framed: "",
    name_a4: "",
    name_framed: "",
    mug: ""
  },
  prices: { ogham_a4: 24.95, ogham_framed: 39.95, name_a4: 22.95, name_framed: 37.95, mug: 18.95 },
  delivery: { ireland: "Prints: posted next working day after proof approval, 1–2 days with An Post. Framed: hand-delivered in Dublin within 2 working days. Mugs: about a week.", production: "Printed in Dublin the same or next working day" }
};
