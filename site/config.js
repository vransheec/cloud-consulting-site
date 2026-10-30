/* ============================================================
   Cloud Consulting Site — configuración editable del sitio
   (DEMO / PORTAFOLIO) Todos los valores son de ejemplo.
   Cambia aquí los enlaces y se actualizan en TODAS las páginas.
   ============================================================ */
window.ABC_CONFIG = {
  // Pasarela de pago (botón COMPRAR). Enlace único de la pasarela.
  checkoutUrl: "https://example.com/checkout",

  // WhatsApp (botón HABLAR CON ASESOR y botón flotante). Solo cambia el número.
  whatsappNumero: "000000000000",
  whatsappMensaje: "Hola, vengo de la web y quiero información sobre: ",

  // Brochure general (PDF). Cada curso puede sobreescribirlo con su propio brochure.
  brochureUrl: "",

  email: "info@example.com",
  libroReclamaciones: "#",
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
  },
};

/* ============================================================
   Consultoría — configuración propia (NO toca Academy)
   ============================================================ */
window.ABC_CONSULTORIA = {
  // URL del formulario embebible. Si se deja vacía, la web muestra un aviso
  // con el correo en lugar del formulario.
  googleFormEmbedUrl: "",

  // Correo para Consultoría.
  email: "info@example.com",

  // URL de la página de LinkedIn de la empresa (vacío = no se muestra el ícono).
  linkedin: "",

  // Ancla del formulario de diagnóstico (landing).
  diagnosticoUrl: "optimizacion-de-costos.html#diagnostico",

  // --- Formulario propio que ENVÍA a un formulario externo ---
  // Los "entry.XXXX" son identificadores del formulario destino (valores de ejemplo).
  form: {
    formId: "EXAMPLE_FORM_ID",
    campos: {
      nombre:        "entry.000000001",
      correo:        "entry.000000002",
      empresa:       "entry.000000003",
      cargo:         "entry.000000004",
      telefono:      "entry.000000005",
      area:          "entry.000000006",
      mensaje:       "entry.000000007",
      consentimiento:"entry.000000008",
    },
    areas: [
      "Optimización de Costos",
      "Migraciones",
      "DRP (recuperación ante desastres)",
      "Landing Zone",
      "Assessment de Seguridad",
      "Data Lake",
      "Data Warehouse",
      "ETL",
      "Chatbots",
      "Automatizaciones",
      "Aún no lo sé",
    ],
    consentimientoValor:
      "Autorizo el tratamiento de mis datos personales para atender esta solicitud y contactarme, conforme a la ley aplicable y la política de privacidad.",
  },
};

window.ABC_VENDOR = {
  aws: { label: "Amazon Web Services", short: "AWS", color: "var(--aws)" },
  azure: { label: "Microsoft Azure", short: "Azure", color: "var(--azure)" },
  gcp: { label: "Google Cloud", short: "Google Cloud", color: "var(--gcp)" },
};
window.abcFmtPrice = function (n) { return "$" + (n % 1 ? n.toFixed(2) : n); };

// Enlaces de WhatsApp derivados del número de arriba (no hace falta tocarlos).
window.ABC_CONFIG.whatsappAsesor =
  "https://api.whatsapp.com/send/?phone=" + window.ABC_CONFIG.whatsappNumero +
  "&text=" + encodeURIComponent(window.ABC_CONFIG.whatsappMensaje);
window.ABC_CONFIG.whatsappComercial =
  "https://api.whatsapp.com/send/?phone=" + window.ABC_CONFIG.whatsappNumero;

/* ============================================================
   Catálogo de cursos — fuente única para index.html y cursos.html
   Datos de ejemplo. priceTier → clave de ABC_PRECIOS.
   ============================================================ */
window.ABC_PRECIOS = {
  "aws-foundational": { basic: 199, pro: 279, certified: 384, simulador: 35 },
  "aws-associate": { basic: 199, pro: 299, certified: 454, simulador: 35 },
  "aws-advanced": { basic: 199, pro: 309, certified: 614, simulador: 35, examenIncluido: true },
  "azure-fundamentals": { basic: 199, pro: 259, certified: 324, simulador: 35 },
  "azure-associate": { basic: 199, pro: 299, certified: 394, simulador: 35 },
  "gcp-leader": { basic: 199, pro: 269, certified: 374, simulador: 35 },
  "gcp-associate": { basic: 199, pro: 299, certified: 434, simulador: 35 },
};

window.ABC_COURSES = [
  // ---------- AWS ----------
  { slug: "ai-practitioner-aws", vendor: "aws", title: "AI Practitioner Foundational", level: "Foundational", code: "AIF-C01", priceTier: "aws-foundational", image: "assets/placeholder-curso.png", url: "curso.html", brochure: "#" },
  { slug: "aws-cloud-practitioner", vendor: "aws", title: "Cloud Practitioner Foundational", level: "Foundational", code: "CLF-C02", priceTier: "aws-foundational", image: "assets/placeholder-curso.png", url: "curso.html", brochure: "#", destacado: true },
  { slug: "data-engineer-associate-aws", vendor: "aws", title: "Data Engineer Associate", level: "Associate", code: "DEA-C01", priceTier: "aws-associate", image: "assets/placeholder-curso.png", url: "curso.html", brochure: "#" },
  { slug: "developer-associate-aws", vendor: "aws", title: "Developer Associate", level: "Associate", code: "DVA-C02", priceTier: "aws-associate", image: "assets/placeholder-curso.png", url: "curso.html", brochure: "#" },
  { slug: "machine-learning-engineer-associate-aws", vendor: "aws", title: "Machine Learning Engineer Associate", level: "Associate", code: "MLA-C01", priceTier: "aws-associate", image: "assets/placeholder-curso.png", url: "curso.html", brochure: "#" },
  { slug: "security-speciality-aws", vendor: "aws", title: "Security Specialty", level: "Specialty", code: "SCS-C02", priceTier: "aws-advanced", image: "assets/placeholder-curso.png", url: "curso.html", brochure: "#" },
  { slug: "aws-solutions-architect", vendor: "aws", title: "Solutions Architect Associate", level: "Associate", code: "SAA-C03", priceTier: "aws-associate", image: "assets/placeholder-curso.png", url: "curso.html", brochure: "#", destacado: true },
  { slug: "aws-solutions-architect-professional", vendor: "aws", title: "Solutions Architect Professional", level: "Professional", code: "SAP-C02", priceTier: "aws-advanced", image: "assets/placeholder-curso.png", url: "curso.html", brochure: "#" },
  // ---------- Azure ----------
  { slug: "azure-fundamentals", vendor: "azure", title: "Azure Fundamentals", level: "Fundamentals", code: "AZ-900", priceTier: "azure-fundamentals", image: "assets/placeholder-curso.png", url: "curso.html", brochure: "#" },
  { slug: "azure-administrator-az104", vendor: "azure", title: "Azure Administrator Associate", level: "Associate", code: "AZ-104", priceTier: "azure-associate", image: "assets/placeholder-curso.png", url: "curso.html", brochure: "#", destacado: true },
  // ---------- Google Cloud ----------
  { slug: "cloud-digital-leader-gcp", vendor: "gcp", title: "Cloud Digital Leader", level: "Foundational", code: "CDL", priceTier: "gcp-leader", image: "assets/placeholder-curso.png", url: "curso.html", brochure: "#" },
  { slug: "associate-cloud-engineer-gcp", vendor: "gcp", title: "Associate Cloud Engineer", level: "Associate", code: "ACE", priceTier: "gcp-associate", image: "assets/placeholder-curso.png", url: "curso.html", brochure: "#", destacado: true },
];

// Testimonios de ejemplo (datos ficticios).
window.ABC_TESTIMONIOS = [
  { quote: "Excelente cada explicación y la dedicación en cada tema. El instructor se asegura de que todo quede claro.", name: "Persona de ejemplo 1", role: "Ingeniería de Sistemas", photo: "assets/placeholder-persona.png", linkedin: "#" },
  { quote: "Muy buen instructor, paciente y con clases muy didácticas. La organización es ágil.", name: "Persona de ejemplo 2", role: "Technology Solutions Director", photo: "assets/placeholder-persona.png", linkedin: "#" },
  { quote: "Excelente contenido. Reta a los alumnos a resolver problemas reales.", name: "Persona de ejemplo 3", role: "Arquitecto de Soluciones Cloud", photo: "assets/placeholder-persona.png", linkedin: "#" },
];

// Docentes de ejemplo (datos ficticios).
window.ABC_DOCENTES = [
  { name: "Instructor de ejemplo 1", role: "Cloud Infrastructure Architect", photo: "assets/placeholder-persona.png", bullets: ["Experiencia en TI", "Experiencia en Cloud Computing", "Certificación de ejemplo"], linkedin: "#" },
  { name: "Instructor de ejemplo 2", role: "Cloud Architect", photo: "assets/placeholder-persona.png", bullets: ["Experiencia en TI", "Experiencia en Cloud Computing", "Certificación de ejemplo"], linkedin: "#" },
  { name: "Instructor de ejemplo 3", role: "Data & AI Architect", photo: "assets/placeholder-persona.png", bullets: ["Experiencia en TI", "Experiencia en Cloud Computing", "Certificación de ejemplo"], linkedin: "#" },
];
