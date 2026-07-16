# Karthik G V — Personal Portfolio Website

A professional portfolio website built for the **Future Interns — Full Stack Web Development, Task 1 (2026)**.

**Live site:** _add your deployed link here_
**Author:** Karthik G V — MCA Final Year, CIMS, Bangalore City University

---

## 📖 About

This is a fully responsive, single-page portfolio built with plain **HTML, CSS and JavaScript** (no framework/build step required — easy to deploy anywhere). It presents:

- A homepage / hero introduction with a signature "Developer Service Card" design
- An About section covering education and background
- A Skills section (languages, frameworks, databases, cloud, security, certifications)
- A Projects section featuring real academic/personal projects (NagrikSeva, PetHub, Hostel Mitra, Interview Scheduling Automation System, Online Marketing & Shopping Platform)
- An interactive Resume section with a downloadable PDF
- A working Contact form
- Dark / light mode toggle (persisted via localStorage)
- SEO meta tags, Open Graph tags, `robots.txt` and `sitemap.xml`

## 🗂️ Project Structure

```
portfolio/
├── index.html              # Main page (all sections)
├── css/
│   └── style.css           # Design system + responsive styles
├── js/
│   └── script.js           # Theme toggle, nav, scroll reveal, contact form
├── assets/
│   ├── images/
│   │   └── favicon.svg
│   └── Karthik_GV_Resume.pdf   # ⚠️ Add your real resume here (see below)
├── robots.txt
├── sitemap.xml
└── README.md
```

## 🛠️ Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom design system (CSS variables, Grid/Flexbox, responsive breakpoints, no framework)
- **Vanilla JavaScript** — theme persistence, mobile nav, IntersectionObserver-based scroll reveals, form handling
- **Fonts:** Fraunces (display), Inter (body), JetBrains Mono (accents) via Google Fonts
- Backend/database were optional per the task brief — this build ships as a fully static site so it can be deployed instantly on free static hosting. See "Adding a real backend" below if you want to extend it.

## 🚀 Setup & Local Development

No build tools or dependencies are required.

1. Download / clone this repository
2. Open `index.html` directly in a browser, **or** serve it locally for the best experience:
   ```bash
   # Python 3
   python -m http.server 8000
   # then visit http://localhost:8000
   ```

## ✏️ Before You Deploy — Customize These

1. **Resume PDF** — replace `assets/Karthik_GV_Resume.pdf` with your real resume (see `assets/README_RESUME.txt`).
2. **Contact form email delivery** — this form works out of the box via a `mailto:` fallback. For real inbox email notifications without writing a backend:
   - Create a free form at [Formspree](https://formspree.io)
   - In `js/script.js`, set `FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-id'`
3. **GitHub / LinkedIn links** — update the placeholder URLs in `index.html` (`#projects` and `#contact` sections) to your real GitHub repos and LinkedIn profile.
4. **og-cover image** — add a 1200×630 screenshot of the site to `assets/images/og-cover.png` for nicer link previews on social media.
5. **Canonical domain** — update `<link rel="canonical">`, `og:url`, `robots.txt` and `sitemap.xml` once you have your final deployed domain.

## 🌐 Deployment (free options)

**GitHub Pages**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```
Then in the repo: **Settings → Pages → Deploy from branch → main → / (root)**.

**Netlify / Vercel**
- Drag-and-drop the project folder onto [Netlify Drop](https://app.netlify.com/drop), or
- Import the GitHub repo into [Vercel](https://vercel.com/new) (framework preset: "Other" / static)

## 🔌 Adding a Real Backend (optional, per task brief)

The task brief lists a backend/database as optional. If you want to extend this into a full-stack app later:
- **Node.js + Express** — add an `/api/contact` route that saves messages to MongoDB/MySQL and sends an email via Nodemailer
- Given your existing stack, a **Flask** backend (matching your NagrikSeva/PetHub experience) would also drop in cleanly — a single `/contact` POST route writing to SQLite is enough to satisfy "contact form with email notifications."

## ✅ Task Checklist (Future Interns — Task 1)

- [x] Professional homepage introducing who you are
- [x] Projects section showcasing real work
- [x] About / resume section highlighting skills
- [x] Contact section with working form
- [x] Responsive design (mobile + desktop)
- [x] SEO-friendly structure (meta tags, semantic HTML, sitemap, robots.txt)
- [x] Dark / light mode (bonus)
- [ ] Deploy to live URL and add the link at the top of this README
- [ ] Push to a public GitHub repository
- [ ] Share on LinkedIn tagging Future Interns

## 📄 License

Free to use and adapt as your own personal portfolio.
