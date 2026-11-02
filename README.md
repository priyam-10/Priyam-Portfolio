# Priyam Singh — Personal Portfolio Website

> **Data Analyst | Machine Learning Engineer**  
> Turning Data into Actionable Insights.

A modern, responsive, animated, and production-ready portfolio website built with **React 19**, **TypeScript**, **Vite 7**, **Tailwind CSS 4**, and **Framer Motion**.

---

## 🚀 Live Demo & Deployment

- **Production Build**: Optimized for [Vercel](https://vercel.com) with `vercel.json` routing.
- **GitHub Repository**: [github.com/priyam-10](https://github.com/priyam-10)
- **Direct Resume Download**: `Priyam-Singh-Resume.pdf`

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, TypeScript, Vite 7 |
| **Styling & Layout** | Tailwind CSS 4, CSS3 Custom Properties |
| **Motion & Interactivity** | Framer Motion (respects `prefers-reduced-motion`) |
| **Icons & Visuals** | Lucide React |
| **Architecture** | Component-driven, typed data files, accessible semantic HTML |
| **Form Handling** | Client validation, honeypot spam protection, Formspree / direct mailto delivery |

---

## 📂 Project Structure

```text
Priyam-Portfolio/
├── images and content reference/  # Original untouched assets & certificates
├── public/
│   ├── assets/
│   │   ├── certificates/          # High-resolution certificate images
│   │   ├── profile/               # Original profile photograph
│   │   └── projects/              # Verified project screenshots
│   ├── favicon.svg                # Custom branded SVG favicon
│   └── Priyam-Singh-Resume.pdf    # Direct download resume
├── src/
│   ├── components/
│   │   ├── Buttons/               # Reusable Button (Primary, Outline, Ghost, Link)
│   │   ├── CertificateCard/       # Certificate item card with image preview
│   │   ├── ContactForm/           # Validated, spam-protected contact form
│   │   ├── Footer/                # Global footer with quick navigation & social links
│   │   ├── Modal/                 # Accessible Project & Certificate Lightbox modals
│   │   ├── Navbar/                # Sticky header with active section spy & mobile drawer
│   │   ├── ProjectCard/           # Project card with screenshot, tags, & live links
│   │   └── SectionHeading/        # Standardized section headings with gradient accents
│   ├── data/
│   │   ├── certifications.ts      # 7 verified certificates data
│   │   ├── education.ts           # B.E. at SIRTE Bhopal & Senior Secondary
│   │   ├── experience.ts          # Future Interns & InAmigos Foundation internships
│   │   ├── profile.ts             # Bio, titles, highlight cards, contact details
│   │   ├── projects.ts            # 7 verified repositories & analytical projects
│   │   └── skills.ts              # Categorized skills (including FastAPI)
│   ├── lib/
│   │   ├── animations.ts          # Framer Motion transitions and variants
│   │   └── utils.ts               # Class merging utilities (clsx + tailwind-merge)
│   ├── sections/
│   │   ├── Hero/                  # Hero section with headline, CTA, and 4 highlight cards
│   │   ├── About/                 # Narrative, quick snapshot, core pillars
│   │   ├── Skills/                # Categorized technical competencies
│   │   ├── Projects/              # Featured projects, category filters, inspection modal
│   │   ├── Experience/            # Chronological vertical internship timeline
│   │   ├── Education/             # B.E. Degree & Class XII academic cards
│   │   ├── Certifications/        # Certificate gallery with lightbox enlargement
│   │   └── Contact/               # Opportunities checklist & functional contact form
│   ├── types/
│   │   └── index.ts               # TypeScript interfaces and types
│   ├── App.tsx                    # Single-page layout containing exactly 8 sections
│   ├── index.css                  # Tailwind v4 configuration, theme colors, custom scrollbars
│   ├── main.tsx                   # React root entry point
│   └── vite-env.d.ts              # Vite environment types
├── vercel.json                    # Vercel SPA routing and caching headers
├── package.json                   # Project dependencies and build scripts
└── tsconfig.json                  # Strict TypeScript configuration
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized static bundle in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📬 Contact Form Configuration

To connect the contact form to your own email via **Formspree**:
1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form and copy your Form ID (e.g. `xpzgvkrq`).
3. Create a `.env` file in the root directory:
   ```env
   VITE_FORMSPREE_ID=your_form_id_here
   ```
4. Rebuild the application (`npm run build`).

*Note: Without a Formspree ID, the form will securely compose and open a pre-filled direct email via the visitor's email client (`mailto:priyamsingh0017@gmail.com`), guaranteeing messages are never lost or falsely marked as sent.*

---

## 📄 License & Attribution

© 2026 Priyam Singh. All Rights Reserved.  
Original certificates and photographs are property of Priyam Singh.
