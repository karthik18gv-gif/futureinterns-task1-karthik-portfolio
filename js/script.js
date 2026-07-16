// =========================================================
// Karthik G V — Portfolio interactivity
// =========================================================

document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- THEME TOGGLE (dark / light, persisted) ---------- */
(function themeInit(){
  const root = document.documentElement;
  const stored = localStorage.getItem('kgv-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', theme);
  updateIcon(theme);

  document.getElementById('themeToggle').addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('kgv-theme', next);
    updateIcon(next);
  });

  function updateIcon(theme){
    document.getElementById('iconMoon').style.display = theme === 'dark' ? 'none' : 'block';
    document.getElementById('iconSun').style.display = theme === 'dark' ? 'block' : 'none';
  }
})();

/* ---------- MOBILE NAV ---------- */
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
mainNav.querySelectorAll('a').forEach(link=>{
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded','false');
  });
});

/* ---------- HEADER SHADOW ON SCROLL ---------- */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(0,0,0,0.08)' : 'none';
});

/* ---------- BACK TO TOP ---------- */
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({top:0, behavior:'smooth'});
});

/* ---------- SCROLL REVEAL ANIMATIONS ---------- */
const revealTargets = document.querySelectorAll(
  '.section-head, .about-text, .about-timeline, .skill-card, .project-card, .resume-panel, .contact-form, .contact-side'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));

/* ---------- CONTACT FORM ----------
   No backend is bundled with this static build (backend was
   optional per the task brief). This submits to Formspree if
   configured, and otherwise gracefully falls back to opening
   the user's email client via mailto so the form always works.
   To wire up real email notifications:
     1. Create a free form at https://formspree.io
     2. Replace FORMSPREE_ENDPOINT below with your endpoint URL
------------------------------------------------------------ */
const FORMSPREE_ENDPOINT = ''; // e.g. 'https://formspree.io/f/xxxxxxx'

const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name').trim();
  const email = data.get('email').trim();
  const subject = data.get('subject').trim();
  const message = data.get('message').trim();

  if (!name || !email || !subject || !message){
    statusEl.textContent = 'Please fill in all fields before sending.';
    statusEl.style.color = '#e0575b';
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  if (FORMSPREE_ENDPOINT){
    try{
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      });
      if (res.ok){
        statusEl.textContent = 'Thanks! Your message has been sent — I\'ll get back to you soon.';
        statusEl.style.color = '';
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err){
      statusEl.textContent = 'Something went wrong. Please email me directly instead.';
      statusEl.style.color = '#e0575b';
    }
  } else {
    // Fallback: open a pre-filled mailto so the message still reaches Karthik
    const mailto = `mailto:karthikgv.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailto;
    statusEl.textContent = 'Opening your email client to send this message...';
    statusEl.style.color = '';
  }

  submitBtn.disabled = false;
  submitBtn.textContent = 'Send Message';
});
