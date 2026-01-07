# Project Overview

This is a static marketing website for "Фабрика НП" (Fabrika NP), a company specializing in the installation of stretch ceilings in St. Petersburg and the Leningrad region. The website aims to showcase their services, advantages, catalog, and portfolio, as well as provide contact information.

The site is built using standard web technologies: HTML5, CSS3, and vanilla JavaScript for interactivity. It features a responsive design, smooth scrolling, a mobile navigation menu, and parallax scroll effects for various sections.

# Technologies Used

*   **Frontend:** HTML5, CSS3 (with Google Fonts: Montserrat, Roboto), Vanilla JavaScript
*   **External Services:**
    *   `formspree.io`: Used for handling contact form submissions.
    *   `picsum.photos`: Placeholder images used throughout the site for various sections (Hero, Parallax backgrounds, Catalog, Portfolio).
    *   Yandex Metrika (implied in `privacy-policy.html`): Potentially used for website analytics, though the snippet is within a `noscript` tag.

# Building and Running

This is a static website and does not require a complex build process.

*   **To Run:** Simply open `index.html` in any modern web browser.
    *   For local development or to simulate a live environment, you can use a simple static file server (e.g., Python's `http.server`, Node.js `serve` package, or similar). For example, if Python is installed, navigate to the project root in your terminal and run:
        ```bash
        python3 -m http.server
        ```
        Then, open `http://localhost:8000` in your browser.

*   **No specific build steps** (like transpilation, bundling, or minification) are explicitly defined or required by the current project structure. Changes to HTML, CSS, or JS files will directly reflect in the browser upon refresh.

# Development Conventions

*   **Structure:**
    *   `index.html`: The main entry point for the website.
    *   `src/style.css`: Contains all global and component-specific CSS styling, including responsive breakpoints and CSS variables for theming.
    *   `src/main.js`: Houses the client-side JavaScript logic, including smooth scrolling, mobile menu toggles, and the parallax effect.
    *   `src/pages/privacy-policy.html`: A dedicated page for the privacy policy.
    *   `favicon.svg`: The website's favicon.
    *   `src/assets/`: Intended for static assets like images, although it may not contain all assets directly referenced (e.g., `og-image.jpg` mentioned in `privacy-policy.html` is outside of `src`).

*   **Styling:**
    *   Utilizes CSS variables (`:root`) for consistent color management.
    *   Employs a mobile-first approach with `@media` queries for responsive design across different screen sizes.
    *   Makes extensive use of flexbox and CSS Grid for layout.

*   **Scripting:**
    *   Pure vanilla JavaScript is used, without external libraries or frameworks.
    *   Interactivity primarily includes navigation (smooth scrolling, mobile menu) and visual enhancements (parallax effect).

*   **Content:**
    *   The website content is primarily in Russian, catering to a local audience in St. Petersburg.

# Key Files

*   `index.html`: Main page, structure, and content.
*   `src/style.css`: All visual styling and responsive rules.
*   `src/main.js`: Client-side interactivity.
*   `src/pages/privacy-policy.html`: Legal document for user data handling.
*   `favicon.svg`: Website icon.
