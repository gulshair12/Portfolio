# Gulshair Portfolio

A modern, responsive portfolio site built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Single-page layout with smooth scrolling, section animations, and a dark theme.

---

## Installation

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** (comes with Node) or **pnpm** / **yarn**

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/porfolio.git
   cd porfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173` (or the port Vite shows in the terminal).

4. **Build for production**

   ```bash
   npm run build
   ```

   Output goes to the `dist/` folder. Use `npm run preview` to serve the production build locally.

### Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start dev server with HMR      |
| `npm run build`   | Type-check and build for prod  |
| `npm run preview` | Serve the `dist/` build locally |
| `npm run lint`    | Run ESLint                     |

---

## Using This as a Template

You are welcome to use this project as a template for your own portfolio.

### Permissions

- **Fork** the repository and use it as a starting point.
- **Copy** or **clone** the code and adapt it (replace content, branding, and assets).
- **Modify** layout, sections, styles, and functionality.
- **Deploy** your version to Netlify, Vercel, GitHub Pages, or any static host.

### What to Change When Reusing

1. **Content**: Update `src/sections/` (Hero, About, Experience, Projects, Contact, etc.) with your name, bio, projects, and links.
2. **SEO & branding**: Edit `index.html` (title, meta description, Open Graph) and `public/site.webmanifest` (name, short_name).
3. **Assets**: Replace favicons and images in `public/` (e.g. resume PDF, project images, profile photo).
4. **Theme**: Adjust colors and fonts in `src/index.css` (CSS variables and Tailwind).

### Attribution

Attribution is not required but appreciated (e.g. “Based on Gulshair’s portfolio template” in your README or footer). Do not claim the original design or code as entirely your own.

---

## How It Works

### Project structure

```
porfolio/
├── public/                 # Static assets (favicons, images, PDF, manifest)
├── src/
│   ├── sections/           # Page sections (Hero, About, Projects, Contact, etc.)
│   ├── components/         # Reusable UI (including Radix-based components)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities (e.g. cn)
│   ├── App.tsx             # Main app and section order
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles and Tailwind
├── index.html              # HTML shell, meta tags, favicon links
└── package.json
```

### Tech stack

- **React 19** + **TypeScript**
- **Vite** – build tool and dev server
- **Tailwind CSS** – styling and design tokens
- **Framer Motion** – section and card animations
- **Radix UI** – accessible primitives (used by some components)
- **Lucide React** – icons

### Sections

- **Navigation** – sticky nav with smooth scroll to sections
- **Hero** – intro, headline, CTA
- **About** – bio and resume download
- **Experience** – timeline or role list
- **Skills / Tech stack** – technologies and tools
- **Projects** – grid of project cards (image, title, short description, tech chips, link)
- **Contact** – email, WhatsApp, location, social links
- **Footer** – optional links and credits

### Styling

- **Theme**: Dark theme with indigo/cyan accents; CSS variables in `src/index.css` (e.g. `--color-primary`, `--color-bg`).
- **Tailwind**: Custom theme extended in `tailwind.config` (e.g. `portfolio-*` colors) for consistency.

### Build and deploy

- **Build**: `npm run build` produces a static site in `dist/`.
- **Deploy**: Connect the repo to Netlify (or Vercel, etc.), set build command to `npm run build` and publish directory to `dist`. No server-side code required.

### Static assets

- Files in `public/` are served from the root (e.g. `/favicon.ico`, `/Gulshair-Fontend.pdf`).
- Resume download and favicons are linked from `index.html`; PWA manifest is `public/site.webmanifest`.

---

## License and Copyright

**Copyright © Gulshair.** All rights reserved.

This project is shared for portfolio and template use as described above. You may fork, copy, modify, and deploy your own version for personal or commercial use. Redistribution of the original repository “as-is” or claiming it as your own work is not permitted.

For explicit permission beyond this README, open an issue in the repository.

---

## Contact

- **Portfolio**: [Live site URL]
- **GitHub**: [github.com/gulshair12](https://github.com/gulshair12)
- **LinkedIn**: [linkedin.com/in/gulshair12](https://www.linkedin.com/in/gulshair12/)
