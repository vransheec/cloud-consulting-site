# Cloud Consulting Site

Sitio corporativo de una consultora TI (Cloud, Data e IA), construido como **HTML, CSS y JavaScript plano**, sin framework ni paso de build, y pensado para desplegarse en hosting estático (Firebase Hosting).

> **Nota.** Este es un repositorio de **portafolio**. El contenido (marca, textos de negocio, datos de contacto, nombres de personas, precios y enlaces) ha sido **sanitizado y reemplazado por datos de ejemplo**. No contiene información real de ninguna empresa ni de personas.

## Qué demuestra

- Arquitectura de un sitio multi-página **sin framework**: componentes compartidos (header, footer, iconos, formularios) inyectados por un único `site.js`.
- **Configuración centralizada** en `config.js`: enlaces, catálogo, precios y datos de contacto viven en un solo objeto y se reflejan en todas las páginas.
- Dos "líneas" de producto conviviendo en el mismo sitio (una consultora B2B y una academia), con header/footer y tono que cambian según la página.
- Formulario propio que arma y envía el `POST` a un formulario externo (patrón "Google Form headless"), con estado de respaldo cuando no hay configuración.
- **Diseño mobile-first**, accesible (roles ARIA, `aria-labelledby`, foco visible) y con sistema de design tokens en CSS (`:root`): colores, tipografía, radios, sombras y espaciado.
- Ilustraciones **SVG animadas** inline (sin librerías) para explicar el servicio de optimización de costos.

## Stack

| Capa | Tecnología |
| --- | --- |
| Markup | HTML5 semántico |
| Estilos | CSS3 con custom properties (design tokens), sin preprocesador |
| Comportamiento | JavaScript (ES5/ES6) vanilla, sin dependencias |
| Iconos | SVG inline (set propio, trazo 2px) |
| Hosting | Estático (Firebase Hosting) |

## Estructura

```
site/
├── index.html                   # Home de la consultora
├── servicios.html               # Catálogo de servicios (Cloud / Data / IA)
├── optimizacion-de-costos.html  # Landing del servicio estrella (FinOps)
├── contacto.html                # Contacto + formulario
├── config.js                    # Configuración central (enlaces, catálogo, precios)
├── site.js                      # Header, footer, iconos y lógica de formularios
├── styles.css                   # Design tokens + estilos del sitio
└── assets/                      # Logos e imágenes (placeholders)
```

## Cómo verlo en local

No necesita build. Basta un servidor estático:

```bash
cd site
python3 -m http.server 8080
# abrir http://localhost:8080
```

## Decisiones de diseño

- **Sin framework a propósito.** Un sitio institucional de pocas páginas no justifica el peso ni el mantenimiento de un framework. Vanilla da carga instantánea y cero dependencias que actualizar.
- **Un solo punto de configuración.** Precios, enlaces y catálogo en `config.js` para que un cambio de negocio no obligue a tocar el HTML de cada página.
- **Componentes por inyección.** Header y footer se pintan desde `site.js`, evitando duplicar markup entre páginas y manteniendo la navegación consistente.

## Mi rol

Diseño de la arquitectura de front, sistema de design tokens, componentes compartidos e integración del formulario, además de la estrategia de contenido y despliegue.

---

_Repositorio de portafolio. Datos y marca de ejemplo._
