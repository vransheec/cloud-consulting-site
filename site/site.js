/* ============================================================
   Consultoría Cloud — comportamiento común del sitio (Consultoría + Academy)
   · Header y footer centralizados con dos variantes: "consultoria" y "academy".
     Uso: <header data-site-header="consultoria" data-current="inicio"></header>
          <footer data-site-footer="consultoria"></footer>
   · Las páginas antiguas de Academy (con header/footer escritos a mano) se
     mantienen tal cual y solo reciben el selector "Consultoría | Academy",
     la columna de Consultoría en el pie y los enlaces de Inicio/Contacto
     apuntando a su línea (ver enhanceLegacyAcademy).
   ============================================================ */
(function () {
  var C = window.ABC_CONFIG || {};
  var K = window.ABC_CONSULTORIA || {};

  /* --- Iconos (Lucide, trazo 2px). Edita o añade aquí. --- */
  var ICONS = {
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    star: '<path d="M11.5 2.6a.6.6 0 0 1 1 0l2.3 4.7 5.2.8a.6.6 0 0 1 .3 1l-3.7 3.6.9 5.1a.6.6 0 0 1-.9.7L12 16.1l-4.6 2.4a.6.6 0 0 1-.9-.7l.9-5.1L3.7 9.1a.6.6 0 0 1 .3-1l5.2-.8Z"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
    whatsapp: '<path d="M21 11.5a8.4 8.4 0 0 1-12.6 7.3L3 20.5l1.8-5.2A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8.6 9.1c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.5l.6 1.4c.1.2 0 .4-.1.6l-.4.4a.4.4 0 0 0-.1.5 6 6 0 0 0 2.7 2.4.4.4 0 0 0 .5-.1l.5-.6c.2-.2.3-.2.5-.1l1.4.7c.2.1.4.2.4.4a1.7 1.7 0 0 1-1.2 1.6 3 3 0 0 1-1.9-.2 9.6 9.6 0 0 1-4.7-4.4 3 3 0 0 1-.4-1.8c0-.4.2-.6.5-.8Z"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6l8-3 8 3Z"/><path d="m9 12 2 2 4-4"/>',
    flask: '<path d="M10 2v7.5L4.6 18A2 2 0 0 0 6.3 21h11.4a2 2 0 0 0 1.7-3L14 9.5V2"/><path d="M8.5 2h7"/><path d="M7 15h10"/>',
    play: '<circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4Z"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h6"/><path d="m9 15 2 2 4-4"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v1.5A6 6 0 0 1 16 8Z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    instagram: '<rect width="20" height="20" x="2" y="2" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"/>',
    tiktok: '<path d="M21 8.5a6.5 6.5 0 0 1-5-2.4V15a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.2a2.8 2.8 0 1 0 2 2.7V2h3a5.5 5.5 0 0 0 5 5.3Z"/>',
    // Consultoría
    chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    trend: '<path d="m22 17-8.5-8.5-5 5L2 7"/><path d="M16 17h6v-6"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
    bot: '<rect width="16" height="12" x="4" y="8" rx="2"/><path d="M12 8V4H8"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
  };
  function icon(name, size) {
    var s = size || 20;
    return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
  }
  function starIcon(size) {
    var s = size || 20;
    return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" fill="currentColor" stroke="none" aria-hidden="true">' + ICONS.star + "</svg>";
  }
  window.abcIcon = icon;

  var VENDOR = window.ABC_VENDOR || {
    aws: { label: "Amazon Web Services", short: "AWS", color: "var(--aws)" },
    azure: { label: "Microsoft Azure", short: "Azure", color: "var(--azure)" },
    gcp: { label: "Google Cloud", short: "Google Cloud", color: "var(--gcp)" },
  };
  window.ABC_VENDOR = VENDOR;

  function waLink(courseTitle) {
    return C.whatsappAsesor + encodeURIComponent(courseTitle || "");
  }
  window.abcWaLink = waLink;

  /* --- Medición por línea (consultoria / academy) ---
     Empuja eventos a window.dataLayer. Si se instala Google Tag Manager / GA4,
     los recoge sin cambiar el HTML. TODO: instalar y verificar el tracking
     de punta a punta antes de pautar. */
  function currentLine() { return document.body.getAttribute("data-line") || "academy"; }
  function track(name, params) {
    window.dataLayer = window.dataLayer || [];
    var ev = { event: name, linea: currentLine() };
    for (var k in params || {}) ev[k] = params[k];
    window.dataLayer.push(ev);
  }
  window.abcTrack = track;

  /* ============================================================
     HEADER Y FOOTER POR LÍNEA
     ============================================================ */
  var NAV = {
    consultoria: [
      { id: "servicios", label: "Servicios", href: "servicios.html", menu: true },
      { id: "equipo", label: "Equipo", href: "equipo.html" },
      { id: "contacto", label: "Contacto", href: "contacto.html?linea=consultoria" },
    ],
    academy: [
      { id: "inicio", label: "Inicio", href: "academy.html" },
      { id: "cursos", label: "Cursos", href: "cursos.html" },
      { id: "beneficios", label: "Beneficios", href: "por-que-elegirnos.html" },
      { id: "docentes", label: "Docentes", href: "docentes.html" },
      { id: "nosotros", label: "Nosotros", href: "nosotros.html" },
      { id: "contacto", label: "Contacto", href: "contacto.html?linea=academy" },
    ],
  };

  function lineBar(variant) {
    return (
      '<div class="line-bar"><div class="line-bar__inner">' +
      '<nav class="line-switch" aria-label="Línea de negocio">' +
      '<a href="index.html" data-track="cambio_linea"' + (variant === "consultoria" ? ' aria-current="true"' : "") + ">Consultoría</a>" +
      '<a href="academy.html" data-track="cambio_linea"' + (variant === "academy" ? ' aria-current="true"' : "") + ">Academy</a>" +
      "</nav></div></div>"
    );
  }

  /* Catálogo de servicios de Consultoría (mega-menú, pie y servicios.html) */
  var SERVICIOS = [
    { grupo: "Cloud AWS", items: [
      { label: "Optimización de Costos", href: "optimizacion-de-costos.html", destacado: true },
      { label: "Migraciones", href: "migraciones.html" },
      { label: "DRP", href: "drp.html" },
      { label: "Landing Zone", href: "landing-zone.html" },
      { label: "Seguridad", href: "assessment-de-seguridad.html" },
    ] },
    { grupo: "Data", items: [
      { label: "Data Lake", href: "data-lake.html" },
      { label: "Data Warehouse", href: "data-warehouse.html" },
      { label: "ETL", href: "etl.html" },
    ] },
    { grupo: "Inteligencia artificial", items: [
      { label: "Chatbots", href: "chatbots.html" },
      { label: "Automatizaciones", href: "automatizaciones.html" },
    ] },
  ];
  window.ABC_SERVICIOS = SERVICIOS;

  function megaMenu(current) {
    var groups = SERVICIOS.map(function (g) {
      return '<div class="mega__group"><p class="mega__label">' + g.grupo + "</p>" +
        g.items.map(function (i) { return '<a href="' + i.href + '"' + (i.destacado ? ' class="mega__star"' : "") + ">" + i.label + (i.destacado ? " ★" : "") + "</a>"; }).join("") + "</div>";
    }).join("");
    return (
      '<div class="nav-dd" data-dd>' +
      '<button class="nav-dd__btn" type="button" aria-expanded="false" aria-controls="mega-servicios"' + (current === "servicios" ? ' data-current="true"' : "") + ">Servicios" +
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button>' +
      '<div class="nav-dd__panel mega" id="mega-servicios">' + groups + "</div></div>"
    );
  }

  function navLinks(variant, current, mobile) {
    return NAV[variant].map(function (n) {
      if (n.menu && !mobile) return megaMenu(current);
      if (n.menu && mobile) {
        return '<details class="mnav-group"><summary>Servicios</summary>' +
          SERVICIOS.map(function (g) { return g.items.map(function (i) { return '<a href="' + i.href + '">' + i.label + "</a>"; }).join(""); }).join("") +
          '<a href="servicios.html">Ver todos los servicios</a></details>';
      }
      return '<a href="' + n.href + '"' + (n.id === current ? ' aria-current="page"' : "") + ">" + n.label + "</a>";
    }).join("");
  }

  function renderHeader(variant, current, ctaHref) {
    var skip = '<a class="skip-link" href="#contenido">Saltar al contenido</a>';
    var toggle = '<button class="nav-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-nav"></button>';
    if (variant === "consultoria") {
      var cta = ctaHref || K.diagnosticoUrl || "optimizacion-de-costos.html#diagnostico";
      return (
        skip + lineBar("consultoria") +
        '<header class="site-header" data-rendered="consultoria">' +
        '<div class="site-header__inner">' +
        '<a class="site-header__logo" href="index.html"><img src="assets/logo-horizontal-white.png" alt="Consultoría Cloud" height="34"></a>' +
        '<nav class="site-nav" aria-label="Principal">' + navLinks("consultoria", current) + "</nav>" +
        '<div class="site-header__actions">' +
        '<a class="btn btn--primary btn--sm" href="' + cta + '" data-track="cta_diagnostico" data-track-pos="header">Solicite su diagnóstico</a>' +
        toggle + "</div></div>" +
        '<nav class="mobile-nav" id="mobile-nav" aria-label="Principal">' + navLinks("consultoria", current, true) +
        '<a class="btn btn--primary btn--sm" href="' + cta + '" data-track="cta_diagnostico" data-track-pos="menu_movil">Solicite su diagnóstico</a></nav>' +
        "</header>"
      );
    }
    // Academy: misma cabecera de siempre + topbar de preventa + selector de línea
    return (
      skip +
      '<div class="topbar"><span>🔥 Preventa activa: hasta 50 % de descuento y exoneración de inscripción</span><a data-link="wa-comercial" href="' + C.whatsappComercial + '" target="_blank" rel="noopener">Activa tu precio por WhatsApp →</a></div>' +
      lineBar("academy") +
      '<header class="site-header" data-rendered="academy">' +
      '<div class="site-header__inner">' +
      '<a class="site-header__logo" href="academy.html"><img src="assets/logo-horizontal-color.png" alt="Academy"></a>' +
      '<nav class="site-nav">' + navLinks("academy", current) + "</nav>" +
      '<div class="site-header__actions">' +
      '<a class="btn btn--ghost btn--sm" data-link="wa" data-course="Consulta general" href="' + waLink("Consulta general") + '">Hablar con asesor</a>' +
      '<a class="btn btn--buy btn--sm" href="cursos.html">Ver cursos</a>' +
      toggle + "</div></div>" +
      '<nav class="mobile-nav" id="mobile-nav">' + navLinks("academy", null) +
      '<a class="btn btn--wa btn--sm" data-link="wa" data-course="Consulta general" href="' + waLink("Consulta general") + '">Hablar con asesor</a></nav>' +
      "</header>"
    );
  }

  function footerConsultoriaCol() {
    return '<div class="site-footer__col" data-col="consultoria"><h4>Consultoría</h4><a href="optimizacion-de-costos.html">Optimización de Costos</a><a href="servicios.html">Servicios</a><a href="equipo.html">Equipo</a><a href="contacto.html?linea=consultoria">Contacto empresas</a></div>';
  }
  function footerServiciosCol() {
    return '<div class="site-footer__col"><h4>Servicios</h4><a href="optimizacion-de-costos.html">Optimización de Costos</a><a href="migraciones.html">Migraciones</a><a href="drp.html">DRP</a><a href="landing-zone.html">Landing Zone</a><a href="assessment-de-seguridad.html">Assessment de Seguridad</a><a href="servicios.html#data">Data e IA</a></div>';
  }
  function footerEmpresaCol() {
    return '<div class="site-footer__col"><h4>Empresa</h4><a href="equipo.html">Equipo</a><a href="index.html#como-funciona">Cómo trabajamos</a><a href="index.html#preguntas">Preguntas frecuentes</a><a href="contacto.html?linea=consultoria">Contacto</a><a href="academy.html">Academy</a></div>';
  }
  function footerAcademyCol() {
    return '<div class="site-footer__col"><h4>Academy</h4><a href="academy.html">Inicio Academy</a><a href="cursos.html">Cursos</a><a href="por-que-elegirnos.html">Beneficios</a><a href="docentes.html">Docentes</a><a href="nosotros.html">Nosotros</a></div>';
  }
  function socialAcademy() {
    var s = C.social || {};
    return '<div class="social">' +
      '<a href="' + s.facebook + '" target="_blank" rel="noopener" aria-label="Facebook">' + icon("facebook", 17) + "</a>" +
      '<a href="' + s.instagram + '" target="_blank" rel="noopener" aria-label="Instagram">' + icon("instagram", 17) + "</a>" +
      '<a href="' + s.tiktok + '" target="_blank" rel="noopener" aria-label="TikTok">' + icon("tiktok", 17) + "</a></div>";
  }

  function renderFooter(variant) {
    var libro = C.libroReclamaciones || "#";
    var year = new Date().getFullYear();
    if (variant === "consultoria") {
      var email = K.email || C.email;
      // Pie compacto (diseño v3): marca, enlaces y legales en dos filas
      return (
        '<footer class="site-footer v-foot" data-rendered="consultoria">' +
        '<div class="v-foot__top">' +
        '<img src="assets/logo-horizontal-white.png" alt="Consultoría Cloud" style="height:30px;width:auto">' +
        '<nav class="v-foot__links" aria-label="Pie de página">' +
        '<a href="servicios.html">Servicios</a><a href="optimizacion-de-costos.html">Optimización de Costos</a><a href="equipo.html">Equipo</a><a href="contacto.html?linea=consultoria">Contacto</a><a href="academy.html">Academy</a>' +
        '<a href="mailto:' + email + '">' + email + "</a>" +
        (K.linkedin ? '<a href="' + K.linkedin + '" target="_blank" rel="noopener">LinkedIn</a>' : "") +
        "</nav></div>" +
        '<div class="v-foot__bottom"><span>© ' + year + ' Consultoría Cloud · TI en AWS</span>' +
        '<span style="display:flex;flex-wrap:wrap;gap:16px"><a href="' + libro + '" target="_blank" rel="noopener">Libro de Reclamaciones</a><a href="terminos.html">Términos</a><a href="politica-reembolso.html">Reembolso</a><a href="privacidad.html">Privacidad</a></span></div>' +
        "</footer>"
      );
    }
    // Academy: el pie de siempre + columna de Consultoría
    return (
      '<footer class="site-footer" data-rendered="academy">' +
      '<div class="site-footer__top">' +
      '<div class="site-footer__col">' +
      '<img src="assets/logo-horizontal-white.png" alt="Academy" style="height:34px;width:auto">' +
      "<p>Academia de TI en todo LATAM. Formación práctica en Cloud, IA y Data, guiada por expertos certificados.</p>" +
      socialAcademy() + "</div>" +
      footerConsultoriaCol() +
      '<div class="site-footer__col"><h4>Certificaciones</h4><a href="cursos.html#aws">Amazon Web Services</a><a href="cursos.html#azure">Microsoft Azure</a><a href="cursos.html#gcp">Google Cloud Platform</a></div>' +
      '<div class="site-footer__col"><h4>Academia</h4><a href="por-que-elegirnos.html">Beneficios</a><a href="docentes.html">Docentes</a><a href="nosotros.html">Nosotros</a></div>' +
      '<div class="site-footer__col"><h4>Ayuda</h4><a href="contacto.html?linea=academy">Contáctanos</a><a data-link="wa-comercial" href="' + C.whatsappComercial + '" target="_blank" rel="noopener">WhatsApp comercial</a><a href="' + libro + '" target="_blank" rel="noopener">Libro de reclamaciones</a><a href="terminos.html">Términos del servicio</a><a href="politica-reembolso.html">Política de reembolso</a><a href="privacidad.html">Política de privacidad</a></div>' +
      "</div>" +
      '<p style="max-width:var(--container);margin-inline:auto;padding:16px var(--gutter) 0;font-size:12px;color:rgba(255,255,255,.55);line-height:1.5">Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, este establecimiento cuenta con un Libro de Reclamaciones Virtual a tu disposición. <a href="' + libro + '" target="_blank" rel="noopener" style="color:rgba(255,255,255,.75);text-decoration:underline">Solicítalo aquí</a> para registrar una queja o reclamo.</p>' +
      '<div class="site-footer__legal"><div><span>© ' + year + ' Academy. Todos los derechos reservados.</span><span style="font-family:var(--font-mono)">AWS · Azure · Google Cloud</span></div></div>' +
      "</footer>"
    );
  }
  window.abcRenderHeader = renderHeader;
  window.abcRenderFooter = renderFooter;

  function replaceWithHTML(el, html) {
    var tpl = document.createElement("template");
    tpl.innerHTML = html;
    var first = tpl.content.firstElementChild;
    el.parentNode.replaceChild(tpl.content, el);
    return first;
  }

  function mountChrome() {
    document.querySelectorAll("[data-site-header]").forEach(function (el) {
      replaceWithHTML(el, renderHeader(el.getAttribute("data-site-header"), el.getAttribute("data-current"), el.getAttribute("data-cta-href")));
    });
    document.querySelectorAll("[data-site-footer]").forEach(function (el) {
      replaceWithHTML(el, renderFooter(el.getAttribute("data-site-footer")));
    });
  }

  /* Cambia la cabecera en caliente (p. ej. contacto.html al elegir interés) */
  function swapHeader(variant, current, ctaHref) {
    document.querySelectorAll(".skip-link, .topbar, .line-bar, header.site-header").forEach(function (n) { n.remove(); });
    var holder = document.createElement("div");
    document.body.insertBefore(holder, document.body.firstChild);
    replaceWithHTML(holder, renderHeader(variant, current, ctaHref));
    hydrate(document);
  }
  function swapFooter(variant) {
    var f = document.querySelector("footer.site-footer");
    if (f) replaceWithHTML(f, renderFooter(variant));
    hydrate(document);
  }

  /* Páginas de Academy que aún tienen header/footer escritos a mano:
     se conservan idénticas y solo se agregan el selector y la columna de Consultoría. */
  function enhanceLegacyAcademy() {
    if (document.body.hasAttribute("data-line")) return;
    var header = document.querySelector("header.site-header:not([data-rendered])");
    if (header && !document.querySelector(".line-bar")) {
      var tpl = document.createElement("template");
      tpl.innerHTML = lineBar("academy");
      header.parentNode.insertBefore(tpl.content, header);
    }
    document.querySelectorAll("header.site-header:not([data-rendered]) a, footer.site-footer:not([data-rendered]) a").forEach(function (a) {
      var h = a.getAttribute("href");
      if (h === "index.html") a.setAttribute("href", "academy.html");
      else if (h === "contacto.html") a.setAttribute("href", "contacto.html?linea=academy");
    });
    var top = document.querySelector("footer.site-footer:not([data-rendered]) .site-footer__top");
    if (top && !top.querySelector('[data-col="consultoria"]') && top.firstElementChild) {
      var t2 = document.createElement("template");
      t2.innerHTML = footerConsultoriaCol();
      top.insertBefore(t2.content, top.firstElementChild.nextSibling);
    }
  }

  /* --- Tarjeta de curso --- */
  function fmtPrice(n) { return window.abcFmtPrice ? window.abcFmtPrice(n) : "$" + n; }
  function courseCard(c) {
    var v = VENDOR[c.vendor];
    var pr = (window.ABC_PRECIOS || {})[c.priceTier] || { basic: 0 };
    return (
      '<article class="course">' +
      '<div class="course__media"><img src="' + c.image + '" alt="' + c.title + '" loading="lazy"><span class="course__rule" style="background:' + v.color + '"></span></div>' +
      '<div class="course__body">' +
      '<span class="course__vendor" style="color:' + v.color + '">' + icon("cloud", 16) + v.short + "</span>" +
      '<a class="course__title" href="' + (c.url || "curso.html") + '?c=' + c.slug + '">' + c.title + "</a>" +
      '<div class="course__meta"><span>' + c.level + '</span><span class="course__code">' + c.code + "</span></div>" +
      '<div class="course__foot">' +
      (c.destacado ? '<span class="badge badge--warn badge--tiny">Más elegido</span>' : "") +
      '<span class="course__price">Desde ' + fmtPrice(pr.basic) + "</span>" +
      "</div></div>" +
      '<div class="course__actions">' +
      '<a class="btn btn--buy btn--sm" href="' + C.checkoutUrl + '" target="_blank" rel="noopener">' + icon("cart", 16) + "Comprar</a>" +
      '<a class="btn btn--wa btn--sm" href="' + waLink(c.title) + '" target="_blank" rel="noopener">' + icon("whatsapp", 16) + "Asesor</a>" +
      "</div></article>"
    );
  }

  /* --- Testimonio --- */
  function quoteCard(t, onDark) {
    var stars = "";
    for (var i = 0; i < 5; i++) stars += starIcon(16);
    return (
      '<div class="card quote' + (onDark ? " card--glass" : "") + '">' +
      '<div class="quote__stars">' + stars + "</div>" +
      "<blockquote>“" + t.quote + "”</blockquote>" +
      '<div class="quote__who"><img src="' + t.photo + '" alt="' + t.name + '" loading="lazy">' +
      '<span><span class="quote__name">' + t.name + '</span><span class="quote__role">' + t.role + "</span></span>" +
      (t.linkedin ? '<a href="' + t.linkedin + '" target="_blank" rel="noopener" aria-label="LinkedIn de ' + t.name + '" style="margin-left:auto;color:' + (onDark ? "var(--signal-400)" : "var(--abc-steel)") + '">' + icon("linkedin", 18) + "</a>" : "") +
      "</div></div>"
    );
  }

  /* --- Docente --- */
  function teacherCard(d) {
    return (
      '<article class="card teacher">' +
      '<img src="' + d.photo + '" alt="' + d.name + '" loading="lazy">' +
      '<div class="teacher__body"><h3>' + d.name + "</h3>" +
      '<p style="font-size:14px;font-weight:600;color:var(--abc-steel)">' + d.role + "</p>" +
      '<ul class="teacher__bullets">' + d.bullets.map(function (b) { return "<li>" + icon("check", 14) + b + "</li>"; }).join("") + "</ul>" +
      (d.linkedin ? '<a href="' + d.linkedin + '" target="_blank" rel="noopener" style="font-size:14px;font-weight:700;display:inline-flex;gap:6px;align-items:center">' + icon("linkedin", 16) + "LinkedIn</a>" : "") +
      "</div></article>"
    );
  }

  /* --- Enlaces, iconos y menú (se puede volver a llamar tras re-renderizar) --- */
  function hydrate(root) {
    root.querySelectorAll("[data-link=buy]").forEach(function (el) { el.href = C.checkoutUrl; el.target = "_blank"; el.rel = "noopener"; });
    root.querySelectorAll("[data-link=wa]").forEach(function (el) {
      el.href = waLink(el.getAttribute("data-course") || "");
      el.target = "_blank"; el.rel = "noopener";
    });
    root.querySelectorAll("[data-link=brochure]").forEach(function (el) {
      el.href = el.getAttribute("data-brochure") || C.brochureUrl;
    });
    root.querySelectorAll("[data-link=wa-comercial]").forEach(function (el) {
      el.href = C.whatsappComercial; el.target = "_blank"; el.rel = "noopener";
    });
    root.querySelectorAll("[data-icon]").forEach(function (el) {
      if (el.querySelector("svg")) return;
      el.innerHTML = icon(el.getAttribute("data-icon"), parseInt(el.getAttribute("data-size") || "20", 10));
    });

    // Menú móvil
    var toggle = root.querySelector(".nav-toggle");
    var mobile = root.querySelector(".mobile-nav");
    if (toggle && mobile && !toggle.hasAttribute("data-bound")) {
      toggle.setAttribute("data-bound", "");
      toggle.innerHTML = icon("menu", 20);
      toggle.addEventListener("click", function () {
        var open = mobile.classList.toggle("is-open");
        toggle.innerHTML = icon(open ? "close" : "menu", 20);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      });
    }
    bindDropdowns(root);
  }

  /* --- Mega-menú "Servicios" (clic / teclado; en escritorio también abre con hover vía CSS) --- */
  function bindDropdowns(root) {
    root.querySelectorAll("[data-dd]").forEach(function (dd) {
      if (dd.hasAttribute("data-bound")) return;
      dd.setAttribute("data-bound", "");
      var btn = dd.querySelector(".nav-dd__btn");
      function set(open) { dd.classList.toggle("is-open", open); btn.setAttribute("aria-expanded", open ? "true" : "false"); }
      btn.addEventListener("click", function () { set(!dd.classList.contains("is-open")); });
      dd.addEventListener("keydown", function (e) { if (e.key === "Escape") { set(false); btn.focus(); } });
      document.addEventListener("click", function (e) { if (!dd.contains(e.target)) set(false); });
      dd.addEventListener("focusout", function (e) { if (!dd.contains(e.relatedTarget)) set(false); });
    });
  }

  /* --- Slider del hero (Consultoría): rota cada 6 s; pausa con hover/foco; sin animación si el usuario la reduce --- */
  function mountSliders() {
    document.querySelectorAll("[data-slider]").forEach(function (sl) {
      var slides = sl.querySelectorAll("[data-slide]");
      var dots = sl.querySelectorAll("[data-slide-to]");
      if (slides.length < 2) return;
      var i = 0, timer = null, paused = false;
      function show(n) {
        i = (n + slides.length) % slides.length;
        slides.forEach(function (s, k) { s.hidden = k !== i; });
        dots.forEach(function (d, k) { d.setAttribute("aria-current", k === i ? "true" : "false"); });
      }
      dots.forEach(function (d) { d.addEventListener("click", function () { show(parseInt(d.getAttribute("data-slide-to"), 10)); }); });
      sl.addEventListener("mouseenter", function () { paused = true; });
      sl.addEventListener("mouseleave", function () { paused = false; });
      sl.addEventListener("focusin", function () { paused = true; });
      sl.addEventListener("focusout", function () { paused = false; });
      show(0);
      var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!reduce) timer = setInterval(function () { if (!paused && !document.hidden) show(i + 1); }, 6000);
    });
  }

  /* --- Formulario propio de Consultoría Cloud que envía al Google Form (sin que se vea Google) --- */
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function mountContactForms() {
    var F = K.form || {};
    var campos = F.campos || {};
    var ok = F.formId && campos.nombre && campos.correo && campos.empresa && campos.area && campos.consentimiento;

    document.querySelectorAll("[data-gform]").forEach(function (host) {
      var pending = host.parentNode.querySelector("[data-gform-pending]");
      if (!ok) { host.hidden = true; if (pending) pending.hidden = false; return; }
      if (pending) pending.hidden = true;
      host.hidden = false;

      var areas = (F.areas || []).map(function (a) {
        return '<option value="' + esc(a) + '">' + esc(a) + "</option>";
      }).join("");

      host.innerHTML =
        '<form class="abc-form" novalidate>' +
          '<div class="abc-form__grid">' +
            fieldText("nombre", "Nombre y apellido", true) +
            fieldText("correo", "Correo corporativo", true, "email") +
            fieldText("empresa", "Empresa", true) +
            fieldText("cargo", "Cargo", false) +
            fieldText("telefono", "Teléfono", false, "tel") +
            '<p class="field abc-form__full"><label for="abc-area">¿En qué área necesita apoyo? <span class="req">*</span></label>' +
              '<select id="abc-area" name="area" required><option value="" disabled selected>Elija una opción</option>' + areas + "</select></p>" +
            '<p class="field abc-form__full"><label for="abc-mensaje">Cuéntenos más</label>' +
              '<textarea id="abc-mensaje" name="mensaje" rows="4" placeholder="Describa brevemente lo que busca o el reto que enfrenta."></textarea></p>' +
          "</div>" +
          '<label class="abc-consent"><input type="checkbox" name="consentimiento" required> ' +
            '<span>Autorizo el tratamiento de mis datos personales para atender esta solicitud y contactarme, conforme a la ley aplicable y la <a href="privacidad.html">política de privacidad</a>.</span></label>' +
          '<div class="abc-form__foot">' +
            '<button class="btn btn--primary btn--lg" type="submit">Enviar mensaje</button>' +
            '<p class="abc-form__status" data-status role="status" aria-live="polite"></p>' +
          "</div>" +
        "</form>";

      wireContactForm(host.querySelector("form"), F, campos);
    });

    document.querySelectorAll("[data-config-k]").forEach(function (el) {
      var v = K[el.getAttribute("data-config-k")];
      if (typeof v !== "string" || !v) return;
      el.textContent = v;
      if (el.tagName === "A" && el.hasAttribute("data-mailto")) el.href = "mailto:" + v + (el.getAttribute("data-mailto") || "");
    });
  }

  function fieldText(name, label, required, type) {
    var id = "abc-" + name;
    return '<p class="field"><label for="' + id + '">' + esc(label) + (required ? ' <span class="req">*</span>' : "") + "</label>" +
      '<input id="' + id + '" name="' + name + '" type="' + (type || "text") + '"' + (required ? " required" : "") + "></p>";
  }

  function wireContactForm(form, F, campos) {
    if (!form) return;
    var status = form.querySelector("[data-status]");
    // iframe oculto: recibe la respuesta de Google para que la página no navegue a Google.
    var sink = document.createElement("iframe");
    sink.name = "abc-gform-sink-" + Math.random().toString(36).slice(2);
    sink.setAttribute("aria-hidden", "true");
    sink.style.display = "none";
    document.body.appendChild(sink);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      if (status) { status.textContent = "Enviando…"; status.className = "abc-form__status"; }

      // Construye el envío al Google Form, dirigido al iframe oculto.
      var action = "https://docs.google.com/forms/d/e/" + F.formId + "/formResponse";
      var ghost = document.createElement("form");
      ghost.action = action; ghost.method = "POST"; ghost.target = sink.name; ghost.style.display = "none";
      function add(entry, value) {
        if (!entry) return;
        var i = document.createElement("input"); i.type = "hidden"; i.name = entry; i.value = value; ghost.appendChild(i);
      }
      var d = new FormData(form);
      add(campos.nombre, d.get("nombre") || "");
      add(campos.correo, d.get("correo") || "");
      add(campos.empresa, d.get("empresa") || "");
      add(campos.cargo, d.get("cargo") || "");
      add(campos.telefono, d.get("telefono") || "");
      add(campos.area, d.get("area") || "");
      add(campos.mensaje, d.get("mensaje") || "");
      add(campos.consentimiento, F.consentimientoValor || "");
      document.body.appendChild(ghost);

      // No podemos leer la respuesta de Google (otro dominio); asumimos éxito al enviar.
      var done = false;
      function success() {
        if (done) return; done = true;
        track("contacto_form_enviado", { posicion: form.closest("[id]") ? form.closest("[id]").id : "" });
        form.innerHTML = '<div class="abc-form__ok"><strong>Gracias. Recibimos su mensaje.</strong>' +
          "<p>Le escribiremos pronto para coordinar una reunión.</p></div>";
      }
      sink.addEventListener("load", success, { once: true });
      ghost.submit();
      ghost.remove();
      // Respaldo por si el iframe no dispara "load" (algunos navegadores con POST a otro dominio).
      setTimeout(success, 1200);
    });
  }

  /* --- Contacto: selector de interés Consultoría / Academy --- */
  function mountInterest() {
    var form = document.querySelector("[data-interest]");
    if (!form) return;
    var params = new URLSearchParams(location.search);
    var initial = params.get("linea") === "academy" || location.hash === "#academy" ? "academy" : "consultoria";
    function apply(line, fromUser) {
      document.body.setAttribute("data-line", line);
      document.body.classList.toggle("l-consultoria", line === "consultoria");
      document.querySelectorAll("[data-panel]").forEach(function (p) { p.hidden = p.getAttribute("data-panel") !== line; });
      var wa = document.querySelector(".wa-float");
      if (wa) wa.hidden = line !== "academy";
      swapHeader(line, "contacto", line === "consultoria" ? "#diagnostico" : null);
      swapFooter(line);
      document.title = line === "consultoria" ? "Contacto — Consultoría Cloud" : "Contáctanos — Academy";
      if (fromUser) {
        try { history.replaceState(null, "", "contacto.html?linea=" + line); } catch (e) {}
        track("contacto_interes", { interes: line });
      }
    }
    form.querySelectorAll('input[name="interes"]').forEach(function (r) {
      r.checked = r.value === initial;
      r.addEventListener("change", function () { if (r.checked) apply(r.value, true); });
    });
    apply(initial, false);
  }

  /* --- Montaje --- */
  function render() {
    mountChrome();
    enhanceLegacyAcademy();
    mountInterest();
    hydrate(document);
    mountContactForms();
    mountSliders();

    // Textos editables desde config.js: <span data-config="email"></span>
    document.querySelectorAll("[data-config]").forEach(function (el) {
      var v = C[el.getAttribute("data-config")];
      if (typeof v === "string") el.textContent = v;
    });

    // Rejillas de cursos
    document.querySelectorAll("[data-courses]").forEach(function (el) {
      var filter = el.getAttribute("data-courses");
      var limit = parseInt(el.getAttribute("data-limit") || "0", 10);
      var list = (window.ABC_COURSES || []).filter(function (c) {
        if (filter === "all" || !filter) return true;
        if (filter === "destacados") return c.destacado;
        return c.vendor === filter;
      });
      if (limit) list = list.slice(0, limit);
      el.innerHTML = list.map(courseCard).join("");
    });

    // Testimonios y docentes
    document.querySelectorAll("[data-testimonios]").forEach(function (el) {
      var limit = parseInt(el.getAttribute("data-limit") || "0", 10);
      var onDark = !!el.closest(".dark");
      var list = window.ABC_TESTIMONIOS || [];
      el.innerHTML = (limit ? list.slice(0, limit) : list).map(function (t) { return quoteCard(t, onDark); }).join("");
      var carousel = el.closest(".carousel");
      if (carousel) {
        carousel.querySelectorAll("[data-carousel-nav]").forEach(function (btn) {
          btn.addEventListener("click", function () {
            var card = el.querySelector(".quote");
            var step = card ? card.getBoundingClientRect().width + 20 : 320;
            el.scrollBy({ left: btn.getAttribute("data-carousel-nav") === "next" ? step : -step, behavior: "smooth" });
          });
        });
      }
    });
    document.querySelectorAll("[data-docentes]").forEach(function (el) {
      el.innerHTML = (window.ABC_DOCENTES || []).map(teacherCard).join("");
    });

    // Filtros del catálogo
    var chips = document.querySelectorAll("[data-filter]");
    if (chips.length) {
      chips.forEach(function (chip) {
        chip.addEventListener("click", function () {
          chips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
          chip.setAttribute("aria-pressed", "true");
          var grid = document.querySelector("[data-courses]");
          grid.setAttribute("data-courses", chip.getAttribute("data-filter"));
          var f = chip.getAttribute("data-filter");
          var list = (window.ABC_COURSES || []).filter(function (c) { return f === "all" ? true : c.vendor === f; });
          grid.innerHTML = list.map(courseCard).join("");
          var count = document.querySelector("[data-count]");
          if (count) count.textContent = list.length + (list.length === 1 ? " curso" : " cursos");
        });
      });
      var count0 = document.querySelector("[data-count]");
      if (count0) count0.textContent = (window.ABC_COURSES || []).length + " cursos";
    }

    // Formularios de contacto de Academy: envían a WhatsApp del asesor
    document.querySelectorAll("form[data-wa-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var d = new FormData(form);
        var msg = "Hola, soy " + (d.get("nombre") || "") + ". Email: " + (d.get("email") || "") +
          ". Me interesa: " + (d.get("curso") || "información general") + ". " + (d.get("mensaje") || "");
        window.open(C.whatsappAsesor + encodeURIComponent(msg), "_blank");
        track("academy_form_whatsapp");
      });
    });

    // Medición: vista por línea y clics marcados con data-track (delegado)
    track("vista_linea", { pagina: location.pathname });
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("[data-track]");
      if (a) track(a.getAttribute("data-track"), { posicion: a.getAttribute("data-track-pos") || "", destino: a.getAttribute("href") || "" });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
