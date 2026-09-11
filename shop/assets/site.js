/* Lampblack Press — shared chrome, the cover engine, and checkout wiring.
   No dependencies, no build step. Every page loads config.js, books.js, then this. */
(function () {
  "use strict";

  /* Scroll reveals are opt-in via this class, so if this script ever fails to load
     the static copy is still visible rather than a page of invisible divs. */
  document.documentElement.classList.add("js");

  var S = window.SITE || {};
  var T = S.trader || {};
  var BOOKS = window.BOOKS || [];
  var byslug = {};
  BOOKS.forEach(function (b) { byslug[b.slug] = b; });

  var money = function (n) { return "€" + Number(n).toFixed(2); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var clamp = function (v, lo, hi) { return Math.max(lo, Math.min(hi, v)); };

  /* ------------------------------------------------------------------ *
   * The press device. A lamp flame, because lampblack is the soot a
   * lamp leaves behind and it is what the best printing ink was made of.
   * ------------------------------------------------------------------ */
  function mark(fill) {
    return '<path d="M12 1.4c.2 3.4 2 4.7 3.5 6.6 1.4 1.7 2.2 3.3 2.2 5.2A5.7 5.7 0 0 1 12 18.9a5.7 5.7 0 0 1-5.7-5.7c0-1.9.8-3.5 2.2-5.2C10 6.1 11.8 4.8 12 1.4Z" fill="' + fill + '"/>' +
           '<path d="M12 7.6c.15 1.9 1.9 2.7 1.9 4.9A1.9 1.9 0 0 1 12 14.4a1.9 1.9 0 0 1-1.9-1.9c0-2.2 1.75-3 1.9-4.9Z" fill="#12100D" opacity=".55"/>';
  }

  /* Shared paint servers. Defined once, referenced by every cover on the page. */
  function injectDefs() {
    if (document.getElementById("lp-defs")) return;
    var d = document.createElement("div");
    d.innerHTML =
      '<svg id="lp-defs" width="0" height="0" aria-hidden="true" focusable="false" ' +
      'style="position:absolute;width:0;height:0;overflow:hidden"><defs>' +
        '<linearGradient id="lp-foil" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0" stop-color="#8C6F32"/><stop offset=".3" stop-color="#EBD79E"/>' +
          '<stop offset=".52" stop-color="#C3A05A"/><stop offset=".74" stop-color="#F0DEA9"/>' +
          '<stop offset="1" stop-color="#94763A"/>' +
        '</linearGradient>' +
        '<pattern id="lp-weave" width="4" height="4" patternUnits="userSpaceOnUse">' +
          '<path d="M0 .5h4M0 2.5h4" stroke="#fff" stroke-width=".6" opacity=".045"/>' +
          '<path d="M.5 0v4M2.5 0v4" stroke="#000" stroke-width=".6" opacity=".07"/>' +
        '</pattern>' +
        '<linearGradient id="lp-hinge" x1="0" x2="1">' +
          '<stop offset="0" stop-color="#000" stop-opacity=".34"/>' +
          '<stop offset=".35" stop-color="#000" stop-opacity=".06"/>' +
          '<stop offset=".5" stop-color="#fff" stop-opacity=".05"/>' +
          '<stop offset="1" stop-color="#000" stop-opacity="0"/>' +
        '</linearGradient>' +
        '<linearGradient id="lp-spine-l" x1="0" x2="1">' +
          '<stop offset="0" stop-color="#000" stop-opacity=".42"/>' +
          '<stop offset=".22" stop-color="#fff" stop-opacity=".07"/>' +
          '<stop offset=".8" stop-color="#000" stop-opacity=".06"/>' +
          '<stop offset="1" stop-color="#000" stop-opacity=".42"/>' +
        '</linearGradient>' +
      '</defs></svg>';
    document.body.insertBefore(d.firstChild, document.body.firstChild);
  }

  /* ------------------------------------------------------------------ *
   * Front cover. Case cloth, blind rules, foil-stamped title.
   * ------------------------------------------------------------------ */
  function coverSVG(b, opts) {
    opts = opts || {};
    var W = 340, H = 520;
    var lines = b.lines || [String(b.title).toUpperCase()];
    var longest = lines.reduce(function (m, l) { return Math.max(m, l.length); }, 0);
    var fs = clamp(244 / (longest * 0.62), 17, 44);
    var lh = fs * 1.2;
    var top = H * 0.375 - (lines.length * lh) / 2 + fs * 0.78;

    var t = lines.map(function (l, i) {
      return '<text x="' + (W / 2) + '" y="' + (top + i * lh).toFixed(1) + '" text-anchor="middle" ' +
        'font-family="Cormorant Garamond,Garamond,serif" font-size="' + fs.toFixed(1) + '" ' +
        'letter-spacing="' + (fs * 0.085).toFixed(2) + '" fill="url(#lp-foil)">' + esc(l) + '</text>';
    }).join("");

    var ruleY = top + (lines.length - 1) * lh + fs * 0.95;
    var authorY = ruleY + 34;

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" ' +
      'width="' + (opts.w || W) + '" role="img" aria-label="' + esc(b.title + " by " + b.author) + '">' +
      '<rect width="' + W + '" height="' + H + '" fill="' + b.cloth + '"/>' +
      '<rect width="' + W + '" height="' + H + '" fill="url(#lp-weave)"/>' +
      '<rect width="26" height="' + H + '" fill="url(#lp-hinge)"/>' +
      '<rect x="' + (W - 3) + '" width="3" height="' + H + '" fill="#000" opacity=".22"/>' +
      '<rect x="22" y="22" width="' + (W - 44) + '" height="' + (H - 44) + '" fill="none" stroke="url(#lp-foil)" stroke-width="1.4"/>' +
      '<rect x="29" y="29" width="' + (W - 58) + '" height="' + (H - 58) + '" fill="none" stroke="url(#lp-foil)" stroke-width=".6" opacity=".7"/>' +
      t +
      '<line x1="' + (W / 2 - 34) + '" y1="' + ruleY + '" x2="' + (W / 2 + 34) + '" y2="' + ruleY + '" stroke="url(#lp-foil)" stroke-width="1"/>' +
      '<text x="' + (W / 2) + '" y="' + authorY + '" text-anchor="middle" font-family="Inter,system-ui,sans-serif" ' +
        'font-size="11.5" font-weight="500" letter-spacing="3.4" fill="url(#lp-foil)">' + esc(b.author.toUpperCase()) + '</text>' +
      (b.translator
        ? '<text x="' + (W / 2) + '" y="' + (authorY + 22) + '" text-anchor="middle" font-family="Cormorant Garamond,Garamond,serif" ' +
          'font-size="13" font-style="italic" fill="url(#lp-foil)" opacity=".8">translated by ' + esc(b.translator) + '</text>'
        : "") +
      '<g transform="translate(' + (W / 2 - 11) + ' ' + (H - 128) + ') scale(.92)">' + mark("url(#lp-foil)") + '</g>' +
      '<text x="' + (W / 2) + '" y="' + (H - 78) + '" text-anchor="middle" font-family="Inter,system-ui,sans-serif" ' +
        'font-size="8" font-weight="500" letter-spacing="3.6" fill="url(#lp-foil)" opacity=".85">LAMPBLACK PRESS</text>' +
      '</svg>';
  }

  /* ------------------------------------------------------------------ *
   * Spine. Width comes from the page count, so a shelf of these is an
   * honest picture of the collection rather than a decorative one.
   * ------------------------------------------------------------------ */
  function spineSVG(b, opts) {
    opts = opts || {};
    var H = opts.h || 400;
    var W = Math.round(30 + b.pages * 0.05);
    var scale = H / 400;
    var w = Math.round(W * scale);
    /* Spines carry the short title. "The Picture of Dorian Gray" does not fit on
       11mm of board, and real books have always shortened it to "Dorian Gray". */
    var title = b.short || String(b.title).toUpperCase();
    /* Surname only, as every real spine does it. "F. SCOTT FITZGERALD" set across
       11mm of board leaves no room for the title above it. */
    var surname = String(b.author).split(" ").pop().toUpperCase();
    /* Fit to the panel between the gold rules, not just to the spine width, so a
       long title shrinks instead of running into the author line. */
    var fs = clamp(Math.min(W * 0.42, 170 / (title.length * 0.58)), 8, 15);

    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' 400" width="' + w + '" height="' + H + '" ' +
      'role="img" aria-label="Spine of ' + esc(b.title) + '">' +
      '<rect width="' + W + '" height="400" fill="' + b.cloth + '"/>' +
      '<rect width="' + W + '" height="400" fill="url(#lp-weave)"/>' +
      '<rect width="' + W + '" height="400" fill="url(#lp-spine-l)"/>' +
      '<line x1="5" y1="52" x2="' + (W - 5) + '" y2="52" stroke="url(#lp-foil)" stroke-width="1"/>' +
      '<line x1="5" y1="57" x2="' + (W - 5) + '" y2="57" stroke="url(#lp-foil)" stroke-width=".5"/>' +
      '<line x1="5" y1="330" x2="' + (W - 5) + '" y2="330" stroke="url(#lp-foil)" stroke-width="1"/>' +
      '<line x1="5" y1="335" x2="' + (W - 5) + '" y2="335" stroke="url(#lp-foil)" stroke-width=".5"/>' +
      /* centred in the panel between the rules, so every spine on the shelf lines up */
      '<text transform="translate(' + (W / 2 + fs * 0.35).toFixed(1) + ' 180) rotate(-90)" text-anchor="middle" ' +
        'font-family="Cormorant Garamond,Garamond,serif" font-size="' + fs.toFixed(1) + '" ' +
        'letter-spacing="1.5" fill="url(#lp-foil)">' + esc(title) + '</text>' +
      /* author sits just above the lower rule and reads upward, like the title */
      '<text transform="translate(' + (W / 2 + 2.3).toFixed(1) + ' 320) rotate(-90)" font-family="Inter,system-ui,sans-serif" ' +
        'font-size="6.5" font-weight="500" letter-spacing="1.6" fill="url(#lp-foil)" opacity=".78">' +
        esc(surname) + '</text>' +
      '<g transform="translate(' + (W / 2 - 6.5) + ' 20) scale(.55)">' + mark("url(#lp-foil)") + '</g>' +
      '</svg>';
  }

  window.LP = { coverSVG: coverSVG, spineSVG: spineSVG, books: BOOKS, bySlug: byslug };

  /* ------------------------------------------------------------------ *
   * Chrome
   * ------------------------------------------------------------------ */
  function header() {
    var here = location.pathname.replace(/index\.html$/, "");
    var nav = [
      ["/collection.html", "The Collection"],
      ["/sets.html", "Sets"],
      ["/about.html", "The Press"],
      ["/legal/delivery.html", "Delivery"],
      ["/legal/contact.html", "Contact"]
    ].map(function (n) {
      return '<a href="' + n[0] + '"' + (here === n[0] ? ' aria-current="page"' : "") + ">" + n[1] + "</a>";
    }).join("");

    return '<div class="strip">Printed to order, never in advance &middot; Free delivery in ' +
      ((S.delivery && S.delivery.freeText) || 'Ireland and the EU') + '</div>' +
      '<header class="masthead"><div class="wrap">' +
        '<a class="brand" href="/"><svg viewBox="0 0 24 20" aria-hidden="true">' + mark("#C3A05A") + '</svg>' +
        '<span class="brand-txt"><b>' + esc(S.brand || "Lampblack Press") + '</b>' +
        '<span>Dublin</span></span></a>' +
        '<nav aria-label="Main">' + nav + '</nav>' +
      '</div></header>';
  }

  function footer() {
    var soc = [];
    if (S.social) {
      if (S.social.pinterest) soc.push('<li><a href="' + esc(S.social.pinterest) + '" rel="noopener me" target="_blank">Pinterest</a></li>');
      if (S.social.instagram) soc.push('<li><a href="' + esc(S.social.instagram) + '" rel="noopener me" target="_blank">Instagram</a></li>');
      if (S.social.tiktok) soc.push('<li><a href="' + esc(S.social.tiktok) + '" rel="noopener me" target="_blank">TikTok</a></li>');
    }
    var titles = BOOKS.slice(0, 5).map(function (b) {
      return '<li><a href="/books/' + b.slug + '.html">' + esc(b.title) + "</a></li>";
    }).join("");

    return '<footer class="site-foot"><div class="wrap">' +
      '<div class="cols">' +
        '<div><h4>' + esc(S.brand || "Lampblack Press") + '</h4>' +
          '<p>' + esc(S.tagline || "") + '</p>' +
          (soc.length ? "<ul>" + soc.join("") + "</ul>" : "") + "</div>" +
        '<div><h4>The books</h4><ul>' + titles +
          '<li><a href="/collection.html">All ten titles</a></li></ul></div>' +
        '<div><h4>Help</h4><ul>' +
          '<li><a href="/legal/delivery.html">Delivery</a></li>' +
          '<li><a href="/legal/returns.html">Returns and cancellation</a></li>' +
          '<li><a href="/legal/terms.html">Terms of sale</a></li>' +
          '<li><a href="/legal/privacy.html">Privacy</a></li>' +
          '<li><a href="/legal/contact.html">Contact</a></li></ul></div>' +
        '<div><h4>Trader</h4><p>' + esc(T.name || "") + '<br>' + esc(T.address || "") + '<br>' +
          '<a href="mailto:' + esc(T.email || "") + '">' + esc(T.email || "") + "</a>" +
          (T.phone ? "<br>" + esc(T.phone) : "") + "</p></div>" +
      "</div>" +
      '<p class="fine">Every title we publish is in the public domain, set and printed by us. ' +
        'Printed books carry no VAT in Ireland, so the price you see is the price you pay. ' +
        'Payments handled by Stripe; we never see your card details. ' +
        "&copy; " + new Date().getFullYear() + " " + esc(T.name || S.brand || "") + ".</p>" +
      "</div></footer>";
  }

  /* ------------------------------------------------------------------ *
   * Boot
   * ------------------------------------------------------------------ */
  function boot() {
    injectDefs();

    document.querySelectorAll("[data-site-header]").forEach(function (el) { el.outerHTML = header(); });
    document.querySelectorAll("[data-site-footer]").forEach(function (el) { el.outerHTML = footer(); });

    /* covers, spines, shelves */
    document.querySelectorAll("[data-cover]").forEach(function (el) {
      var b = byslug[el.getAttribute("data-cover")];
      if (b) el.innerHTML = coverSVG(b, { w: el.getAttribute("data-w") || 340 });
    });
    document.querySelectorAll("[data-spine]").forEach(function (el) {
      var b = byslug[el.getAttribute("data-spine")];
      if (b) el.innerHTML = spineSVG(b, { h: +el.getAttribute("data-h") || 400 });
    });
    document.querySelectorAll("[data-shelf]").forEach(function (el) {
      var h = +el.getAttribute("data-h") || 400;
      el.innerHTML = BOOKS.map(function (b) {
        return '<a href="/books/' + b.slug + '.html" title="' + esc(b.title) + '">' + spineSVG(b, { h: h }) + "</a>";
      }).join("");
    });

    /* the collection grid, built from books.js so it can never drift from the catalogue */
    document.querySelectorAll("[data-grid]").forEach(function (el) {
      var limit = +el.getAttribute("data-grid") || BOOKS.length;
      el.innerHTML = BOOKS.slice(0, limit).map(function (b) {
        return '<a class="book" href="/books/' + b.slug + '.html">' +
          '<span class="book-art">' + coverSVG(b, { w: 340 }) + "</span>" +
          "<h3>" + esc(b.title) + "</h3>" +
          '<span class="by">' + esc(b.author) + "</span>" +
          '<span class="blurb">' + esc(b.blurb) + "</span>" +
          '<span class="meta"><span>' + b.pages + " pp</span><span>" + money((S.prices && S.prices.single) || 34) + "</span></span>" +
          "</a>";
      }).join("");
    });

    /* prices from config */
    document.querySelectorAll("[data-price]").forEach(function (el) {
      var p = S.prices && S.prices[el.getAttribute("data-price")];
      if (p != null) el.textContent = money(p);
    });

    /* checkout. An empty Stripe link degrades to a clearly-labelled dead button
       rather than a broken one, so the site is safe to publish before Stripe is live. */
    document.querySelectorAll("[data-buy]").forEach(function (btn) {
      var key = btn.getAttribute("data-buy") || "";
      var st = S.stripe || {};
      /* "book:odyssey" uses a Payment Link for that exact title if one has been made,
         and otherwise falls back to the single generic link where the customer picks
         the title in a Stripe custom field. Launch on one link, upgrade to ten later
         without touching a single page. */
      var link = key.indexOf("book:") === 0
        ? ((st.books && st.books[key.slice(5)]) || st.single)
        : st[key];
      if (link) {
        btn.setAttribute("href", link);
        btn.setAttribute("rel", "noopener");
      } else {
        btn.setAttribute("href", "/legal/contact.html");
        btn.classList.add("btn--soon");
        btn.textContent = "Checkout opening shortly";
      }
    });

    document.querySelectorAll("[data-email]").forEach(function (el) {
      el.textContent = T.email || "";
      el.setAttribute("href", "mailto:" + (T.email || ""));
    });
    document.querySelectorAll("[data-trader]").forEach(function (el) {
      el.textContent = (T.name || "") + ", " + (T.address || "");
    });
    document.querySelectorAll("[data-brand]").forEach(function (el) { el.textContent = S.brand || ""; });
    document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

    /* also-in-the-collection strip on product pages */
    document.querySelectorAll("[data-more]").forEach(function (el) {
      var not = el.getAttribute("data-more");
      el.innerHTML = BOOKS.filter(function (b) { return b.slug !== not; }).slice(0, 4).map(function (b) {
        return '<a class="book" href="/books/' + b.slug + '.html">' +
          '<span class="book-art">' + coverSVG(b, { w: 340 }) + "</span>" +
          "<h3>" + esc(b.title) + "</h3>" +
          '<span class="by">' + esc(b.author) + "</span></a>";
      }).join("");
    });

    /* slow reveal, disabled for anyone who asked for less motion */
    if (!window.matchMedia || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px" });
      document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
