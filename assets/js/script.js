const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

applyTheme(storedTheme || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

const languageToggle = document.getElementById("languageToggle");
const FLAGS = { es: "🇬🇧", en: "🇪🇸" };
const LANG_LABELS = { es: "Switch to English", en: "Cambiar a español" };
const storedLang = localStorage.getItem("lang");

function applyLanguage(lang) {
  languageToggle.dataset.lang = lang;
  languageToggle.textContent = FLAGS[lang];
  languageToggle.setAttribute("aria-label", LANG_LABELS[lang]);
}

applyLanguage(storedLang === "en" ? "en" : "es");

languageToggle.addEventListener("click", () => {
  const next = languageToggle.dataset.lang === "es" ? "en" : "es";
  applyLanguage(next);
  localStorage.setItem("lang", next);
});

const revealEls = document.querySelectorAll(".reveal-left");

if (revealEls.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Entra en pantalla: aparece desde la izquierda
          entry.target.classList.add("is-visible");
          entry.target.classList.remove("is-exit");
        } else {
          entry.target.classList.remove("is-visible");
          // Si ha salido por arriba, se va hacia la derecha; si aún no ha
          // llegado (queda por debajo), vuelve a su posición inicial a la izquierda
          entry.target.classList.toggle(
            "is-exit",
            entry.boundingClientRect.top < 0
          );
        }
      });
    },
    { threshold: 0.2 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));
}
