# Dgit-Grow-

High-performance, responsive landing page for **Dgit Grow** — a modern digital marketing and SEO growth agency.

Built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Formspree** email integration.

---

## 🚀 Features

- **Hero Section**: High-converting headline, dual CTAs, and a custom interactive SaaS dashboard mockup showing SEO rankings and traffic growth analytics.
- **Dark Stats Strip**: 4 core business metrics (`250+ Clients`, `450+ Projects`, `10+ Years`, `99% Satisfaction`).
- **Client Trust Badges**: Minimalist grayscale partner logos.
- **Service Modules**: 4 alternating feature blocks covering Digital Marketing, SEO & Visibility, Web Development, and Automated Lead Generation.
- **Mid-Page CTA**: High-engagement conversion panel.
- **Testimonials**: Authentic reviews with 5-star ratings and client avatars.
- **Enquiry Form**: Formspree-powered lead capture with full frontend validation and inline success/error states.
- **Floating WhatsApp Button**: Circular fixed CTA with hover tooltip and pulse effect.
- **Footer**: Multi-column navigation with service links, social channels, and copyright.
- **Fully Responsive**: Optimized for mobile (320px–767px), tablet (768px–1023px), and desktop (1024px+).

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite 5 + TypeScript
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React + custom SVG icons
- **Form Handling**: Formspree API via native Fetch
- **Deployment**: Configured for Vercel with SPA routing (`vercel.json`)

---

## 📦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` and add your Formspree endpoint:
```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
Production output will be generated in the `dist/` directory.

---

## 🌐 Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Add the environment variable `VITE_FORMSPREE_ENDPOINT` with your Formspree form URL.
4. Click **Deploy**.
