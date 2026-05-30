# Jeet Pal — Portfolio Website

A full-stack portfolio website built with **NestJS** (backend) and **Nuxt 3 / Vue** (frontend), deployed for free on **Vercel**.

---

## 🗂 Project Structure

```
jeet-portfolio/
├── backend/          # NestJS REST API
│   ├── api/          # Vercel serverless entry point
│   ├── src/
│   │   ├── contact/  # Contact form endpoint
│   │   └── portfolio/# Portfolio data endpoint
│   ├── package.json
│   └── vercel.json
│
├── frontend/         # Nuxt 3 (Vue) — SSG/SSR
│   ├── components/   # Hero, About, Skills, Projects, Contact…
│   ├── pages/
│   ├── assets/css/
│   ├── nuxt.config.ts
│   └── vercel.json
│
└── README.md
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 20+
- npm 9+

### 1. Backend (NestJS)

```bash
cd backend
npm install
npm run start:dev
# Runs on http://localhost:3001
```

### 2. Frontend (Nuxt 3)

```bash
cd frontend
npm install
cp .env.example .env        # set NUXT_PUBLIC_API_BASE=http://localhost:3001
npm run dev
# Runs on http://localhost:3000
```

---

## ☁️ Vercel Deployment (Free Tier)

Both apps are deployed as **separate Vercel projects** — both are free.

### Deploy Backend

```bash
cd backend
npx vercel --prod
# Note the deployment URL, e.g. https://jeet-api.vercel.app
```

### Deploy Frontend

```bash
cd frontend
# Set env var in Vercel dashboard:
#   NUXT_PUBLIC_API_BASE = https://jeet-api.vercel.app
npx vercel --prod
```

> **Tip**: Link both to a GitHub repo in the Vercel dashboard for automatic CI/CD on every push.

---

## 🔧 Environment Variables

### Backend (`backend/.env`)
```
PORT=3001
CONTACT_EMAIL=jeetpal7804322@gmail.com
```

### Frontend (`frontend/.env`)
```
NUXT_PUBLIC_API_BASE=http://localhost:3001
```

---

## 📦 Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Backend    | NestJS, TypeScript, class-validator |
| Frontend   | Nuxt 3, Vue 3, TypeScript           |
| Styling    | CSS Custom Properties, CSS Modules  |
| Deployment | Vercel (free tier)                  |
| Fonts      | Syne, DM Sans, JetBrains Mono       |

---

## 📄 API Endpoints

| Method | Route           | Description              |
|--------|-----------------|--------------------------|
| GET    | /api/portfolio  | Returns all portfolio data|
| POST   | /api/contact    | Submits contact form      |
| GET    | /api/health     | Health check              |

---

## 🎨 Design System

- **Background**: `#040C18` (Deep Space)
- **Surface**: `#0A1628`
- **Primary Accent**: `#00A8FF` (Electric Blue)
- **Gold Highlight**: `#F59E0B`
- **Display Font**: Syne (geometric, modern)
- **Body Font**: DM Sans
- **Mono Font**: JetBrains Mono
