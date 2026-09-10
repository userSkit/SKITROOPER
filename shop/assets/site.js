/* Slán Home — shared header/footer, buy buttons, and the Ogham renderer. No dependencies. */
(function () {
  const S = window.SITE || {};
  const T = S.trader || {};
  const money = (n) => "€" + n.toFixed(2);

  /* ---------- Header / footer ---------- */
  const header = `
  <div class="bar">Made in Dublin · Posted next working day · Proof before anything prints</div>
  <header class="site-head"><div class="wrap">
    <a class="brand" href="/"><span class="brand-mark" aria-hidden="true"></span>${S.brand || "Slán Home"}</a>
    <nav aria-label="Main">
      <a href="/#products">Shop</a>
      <a href="/about.html">Our story</a>
      <a href="/legal/delivery.html">Delivery</a>
      <a href="/legal/contact.html">Contact</a>
    </nav>
  </div></header>`;

  const social = [
    S.social && S.social.instagram ? `<a href="${S.social.instagram}" rel="noopener" target="_blank">Instagram</a>` : "",
    S.social && S.social.tiktok ? `<a href="${S.social.tiktok}" rel="noopener" target="_blank">TikTok</a>` : ""
  ].filter(Boolean).join(" · ");

  const footer = `
  <footer class="site-foot"><div class="wrap">
    <div class="cols">
      <div><h4>${S.brand || "Slán Home"}</h4><p>${S.tagline || ""}</p>${social ? `<p>${social}</p>` : ""}</div>
      <div><h4>Help</h4><p>
        <a href="/legal/delivery.html">Delivery</a><br>
        <a href="/legal/returns.html">Returns &amp; cancellation</a><br>
        <a href="/legal/terms.html">Terms of sale</a><br>
        <a href="/legal/privacy.html">Privacy</a><br>
        <a href="/legal/contact.html">Contact</a></p></div>
      <div><h4>Trader details</h4><p>${T.name || ""}<br>${T.address || ""}<br><a href="mailto:${T.email || ""}">${T.email || ""}</a>${T.phone ? "<br>" + T.phone : ""}</p></div>
    </div>
    <p class="fine">Payments processed securely by Stripe. All prices include VAT and delivery in Ireland. © ${new Date().getFullYear()} ${T.name || S.brand || ""}.</p>
  </div></footer>`;

  document.querySelectorAll("[data-site-header]").forEach(el => el.outerHTML = header);
  document.querySelectorAll("[data-site-footer]").forEach(el => el.outerHTML = footer);

  /* ---------- Buy buttons ---------- */
  document.querySelectorAll("[data-buy]").forEach(btn => {
    const key = btn.getAttribute("data-buy");
    const link = S.stripe && S.stripe[key];
    const price = S.prices && S.prices[key];
    if (price && !btn.hasAttribute("data-keep-label")) btn.textContent = btn.textContent.replace(/€[\d.]+/, money(price));
    if (link) { btn.setAttribute("href", link); btn.setAttribute("rel", "noopener"); }
    else { btn.setAttribute("href", "/legal/contact.html"); btn.classList.add("soon"); btn.setAttribute("title", "Checkout opening soon — message us to reserve"); }
  });
  document.querySelectorAll("[data-price]").forEach(el => {
    const p = S.prices && S.prices[el.getAttribute("data-price")]; if (p) el.textContent = money(p);
  });
  document.querySelectorAll("[data-email]").forEach(el => { el.textContent = T.email || ""; el.setAttribute("href", "mailto:" + (T.email || "")); });
  document.querySelectorAll("[data-trader]").forEach(el => { el.textContent = (T.name || "") + ", " + (T.address || ""); });

  /* ---------- Ogham renderer ----------
     Classical 20-letter Ogham in four aicmí, plus Peith (P) from the forfeda.
     group b: strokes on one side of the stem; h: other side; m: diagonal across; a: short across. */
  const OG = {
    B:["b",1],L:["b",2],F:["b",3],S:["b",4],N:["b",5],
    H:["h",1],D:["h",2],T:["h",3],C:["h",4],Q:["h",5],
    M:["m",1],G:["m",2],NG:["m",3],Z:["m",4],R:["m",5],
    A:["a",1],O:["a",2],U:["a",3],E:["a",4],I:["a",5],
    P:["p",1]
  };
  const SUBS = { K:"C", V:"F", W:"F", Y:"I", J:"I", X:"CS" };
  const stripAccents = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "");

  function tokens(name) {
    const up = stripAccents(name).toUpperCase().replace(/[^A-Z]/g, "");
    const out = []; let i = 0;
    while (i < up.length) {
      if (up.slice(i, i + 2) === "NG") { out.push("NG"); i += 2; continue; }
      let ch = up[i]; if (SUBS[ch]) { for (const c of SUBS[ch]) out.push(c); i++; continue; }
      if (OG[ch]) out.push(ch); i++;
    }
    return out;
  }
  window.oghamTokens = tokens;

  // Draws vertical Ogham (reads bottom to top, as on stones). Returns SVG markup.
  window.oghamSVG = function (name, opts) {
    opts = opts || {};
    const toks = tokens(name || "");
    const gap = 9, reach = 30, pad = 26, W = 120;
    let lengths = toks.map(t => OG[t][1] * gap + 10);
    const H = Math.max(160, lengths.reduce((a, b) => a + b, 0) + pad * 2 + 30);
    const cx = W / 2, stroke = opts.color || "#1f2a26", sw = opts.width || 3;
    let y = H - pad - 15; // start at bottom
    let parts = [`<line x1="${cx}" y1="${pad}" x2="${cx}" y2="${H - pad}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round"/>`];
    // feather marks
    parts.push(`<path d="M${cx - 10} ${H - pad + 2} L${cx} ${H - pad - 8} L${cx + 10} ${H - pad + 2}" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round"/>`);
    parts.push(`<path d="M${cx - 10} ${pad - 2} L${cx} ${pad + 8} L${cx + 10} ${pad - 2}" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round"/>`);
    toks.forEach((t, idx) => {
      const [g, n] = OG[t]; const len = lengths[idx]; const top = y - len + 5;
      for (let k = 0; k < n; k++) {
        const yy = top + k * gap;
        if (g === "b") parts.push(`<line x1="${cx}" y1="${yy}" x2="${cx + reach}" y2="${yy}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" class="og"/>`);
        else if (g === "h") parts.push(`<line x1="${cx - reach}" y1="${yy}" x2="${cx}" y2="${yy}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" class="og"/>`);
        else if (g === "m") parts.push(`<line x1="${cx - reach}" y1="${yy + 9}" x2="${cx + reach}" y2="${yy - 9}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" class="og"/>`);
        else if (g === "a") parts.push(`<line x1="${cx - 11}" y1="${yy}" x2="${cx + 11}" y2="${yy}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" class="og"/>`);
        else if (g === "p") parts.push(`<path d="M${cx} ${yy} L${cx + reach} ${yy} L${cx + reach - 8} ${yy - 8}" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" class="og"/>`);
      }
      y -= len;
    });
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${opts.w || W}" height="${opts.h || H}" role="img" aria-label="${name} written in Ogham">${parts.join("")}</svg>`;
  };

  // Full poster preview: cream sheet, Ogham, name, meaning.
  window.posterSVG = function (name, meaning, opts) {
    opts = opts || {};
    const toks = tokens(name || "");
    const inner = window.oghamSVG(name, { color: "#1f2a26", width: 3.2 });
    const vb = inner.match(/viewBox="0 0 (\d+) (\d+)"/); const ow = +vb[1], oh = +vb[2];
    const W = 420, H = 594; // A4 ratio
    const scale = Math.min(200 / ow, 330 / oh);
    const gx = (W - ow * scale) / 2, gy = 70 + (330 - oh * scale) / 2;
    const body = inner.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "");
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" class="poster" role="img" aria-label="Ogham print preview for ${name}">
      <defs><filter id="sh" x="-5%" y="-5%" width="110%" height="110%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-opacity=".18"/></filter></defs>
      <rect x="0" y="0" width="${W}" height="${H}" fill="#f6f1e7" filter="url(#sh)"/>
      <g transform="translate(${gx} ${gy}) scale(${scale})">${body}</g>
      <text x="${W / 2}" y="455" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="34" letter-spacing="6" fill="#1f2a26">${(name || "").toUpperCase()}</text>
      <text x="${W / 2}" y="486" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="12.5" fill="#5b6663" font-style="italic">${meaning || ""}</text>
      <text x="${W / 2}" y="540" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="9" letter-spacing="2" fill="#8a918e">OGHAM · THE FIRST WRITTEN IRISH · ${toks.join(" ")}</text>
    </svg>`;
  };

  // Irish name meaning poster (typographic).
  window.namePosterSVG = function (name, say, meaning, origin) {
    const W = 420, H = 594;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" class="poster" role="img" aria-label="Irish name print preview for ${name}">
      <defs><filter id="sh2" x="-5%" y="-5%" width="110%" height="110%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-opacity=".18"/></filter></defs>
      <rect width="${W}" height="${H}" fill="#f6f1e7" filter="url(#sh2)"/>
      <rect x="40" y="40" width="${W - 80}" height="${H - 80}" fill="none" stroke="#1f2a26" stroke-width="1"/>
      <text x="${W / 2}" y="230" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="58" fill="#1f2a26">${name}</text>
      <text x="${W / 2}" y="268" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="13" letter-spacing="3" fill="#5b6663">${say}</text>
      <line x1="170" y1="300" x2="250" y2="300" stroke="#1f2a26" stroke-width="1"/>
      <text x="${W / 2}" y="340" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="22" font-style="italic" fill="#1f2a26">${meaning}</text>
      <text x="${W / 2}" y="372" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="11.5" fill="#5b6663">${origin}</text>
    </svg>`;
  };

  // Mug mock-up with a saying.
  window.mugSVG = function (saying) {
    const W = 420, H = 340;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" class="mug" role="img" aria-label="Mug with the saying ${saying}">
      <defs><linearGradient id="mg" x1="0" x2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".7" stop-color="#f3f3f1"/><stop offset="1" stop-color="#dcdcd8"/></linearGradient>
      <filter id="sh3" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="10" stdDeviation="10" flood-opacity=".18"/></filter></defs>
      <ellipse cx="210" cy="305" rx="120" ry="14" fill="#000" opacity=".08"/>
      <path d="M300 120 h28 a42 42 0 0 1 0 84 h-28" fill="none" stroke="#e6e6e3" stroke-width="22" stroke-linecap="round"/>
      <path d="M300 120 h28 a42 42 0 0 1 0 84 h-28" fill="none" stroke="#cfcfcb" stroke-width="3"/>
      <rect x="110" y="70" width="200" height="220" rx="18" fill="url(#mg)" filter="url(#sh3)"/>
      <ellipse cx="210" cy="72" rx="100" ry="14" fill="#f7f7f5" stroke="#d6d6d2"/>
      <ellipse cx="210" cy="72" rx="88" ry="10" fill="#e9e9e6"/>
      <text x="210" y="190" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="${saying.length > 16 ? 22 : 28}" font-weight="700" fill="#0f6e56">${saying}</text>
    </svg>`;
  };

  /* ---------- Live previews on pages ---------- */
  const SAMPLE = { Saoirse: "freedom, liberty", Aoife: "beautiful, radiant", Cian: "ancient, enduring", Niamh: "bright, radiant" };
  document.querySelectorAll("[data-ogham-preview]").forEach(box => {
    const input = document.querySelector(box.getAttribute("data-ogham-preview"));
    const draw = () => {
      const n = (input && input.value.trim()) || "Saoirse";
      const m = SAMPLE[n] ? SAMPLE[n] : (input && input.value.trim() ? "meaning added by hand after you order" : SAMPLE.Saoirse);
      box.innerHTML = window.posterSVG(n.slice(0, 12), m);
    };
    if (input) input.addEventListener("input", draw); draw();
  });
  document.querySelectorAll("[data-name-preview]").forEach(box => {
    box.innerHTML = window.namePosterSVG("Saoirse", "SEER-sha", "freedom · liberty", "Irish, from saoirse, “freedom”. Popular since the 1920s.");
  });
  document.querySelectorAll("[data-mug-preview]").forEach(box => {
    const sel = document.querySelector(box.getAttribute("data-mug-preview"));
    const draw = () => { box.innerHTML = window.mugSVG(sel ? sel.value : "Sure look."); };
    if (sel) sel.addEventListener("change", draw); draw();
  });
  document.querySelectorAll("[data-ogham-inline]").forEach(el => {
    el.innerHTML = window.oghamSVG(el.getAttribute("data-ogham-inline"), { color: el.getAttribute("data-color") || "#0f6e56", width: 3 });
  });
  // Hero animation: strokes draw in.
  document.querySelectorAll(".hero-ogham .og").forEach((l, i) => { l.style.animationDelay = (0.05 + i * 0.035) + "s"; });
})();
