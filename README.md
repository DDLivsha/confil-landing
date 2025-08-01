# Consentfillers Landing

Landing page for the **Consentfillers** platform — a service that helps clinics digitize paperwork and consent forms effortlessly and securely.

---

## 🚀 Demo

- **Live Demo:** [Consentfillers Landing](https://confil-landing.vercel.app/)  
- **Repository:** [GitHub](https://github.com/DDLivsha/confil-landing)

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Styling:** SASS + Tailwind CSS (BEM naming convention)
- **Forms:** React Hook Form + Zod validation
- **Backend:** Supabase (REST API + Storage)
- **Deployment:** Vercel
- **Notifications:** React Hot Toast

---

## 📂 Features

- 🔹 Fully responsive design
- 🔹 Dynamic content from Supabase (features, pricing, testimonials, FAQ)
- 🔹 Contact form with Zod validation and Supabase POST integration
- 🔹 SEO-optimized metadata + OpenGraph/Twitter previews
- 🔹 Lighthouse performance ~100 (load <0.5s)
- 🔹 Clean and reusable component structure

---

## ⚙️ Setup & Development

Clone the repository:
```bash
git clone https://github.com/DDLivsha/confil-landing.git
cd confil-landing

Install dependencies:
npm install

Create .env.local and add environment variables:

NEXT_PUBLIC_API_URL
NEXT_PUBLIC_API_KEY
NEXT_PUBLIC_APP_LINK

Run locally:
npm run dev 