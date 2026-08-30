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
          entry.target.classList.add("is-visible");
          entry.target.classList.remove("is-exit");
        } else {
          entry.target.classList.remove("is-visible");
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

function initCarousel(carousel) {
  const track = carousel.querySelector(".carousel-track");
  const viewport = carousel.querySelector(".carousel-viewport");
  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  const prevBtn = carousel.querySelector(".carousel-arrow--prev");
  const nextBtn = carousel.querySelector(".carousel-arrow--next");

  let index = 0;
  let offset = 0;

  const mobileQuery = window.matchMedia("(max-width: 720px)");
  const perViewDesktop = Number(carousel.dataset.perView) || 3;
  const perViewMobile = Number(carousel.dataset.perViewMobile) || 1;
  const perView = () =>
    Math.min(slides.length, mobileQuery.matches ? perViewMobile : perViewDesktop);

  const maxIndex = () => Math.max(0, slides.length - perView());

  function targetFor(i) {
    const pv = perView();
    const first = slides[i];
    const last = slides[Math.min(i + pv - 1, slides.length - 1)];
    const groupWidth = last.offsetLeft + last.offsetWidth - first.offsetLeft;
    const sideSpace = (viewport.clientWidth - groupWidth) / 2;
    return -(first.offsetLeft - slides[0].offsetLeft - sideSpace);
  }

  function markActive() {
    const pv = perView();
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i >= index && i < index + pv);
    });
  }

  function settle(animate = true) {
    index = Math.max(0, Math.min(index, maxIndex()));
    offset = targetFor(index);
    track.classList.toggle("no-transition", !animate);
    track.style.transform = `translateX(${offset}px)`;
    markActive();
    prevBtn.disabled = index <= 0;
    nextBtn.disabled = index >= maxIndex();
  }

  function nearestIndex(px) {
    let best = 0;
    let bestDist = Infinity;
    for (let i = 0; i <= maxIndex(); i++) {
      const d = Math.abs(targetFor(i) - px);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    }
    return best;
  }

  prevBtn.addEventListener("click", () => {
    index -= 1;
    settle();
  });

  nextBtn.addEventListener("click", () => {
    index += 1;
    settle();
  });

  let pointerActive = false;
  let dragging = false;
  let startX = 0;
  let startOffset = 0;
  let moved = false;

  viewport.addEventListener("pointerdown", (e) => {
    if (e.button != null && e.button !== 0) return;
    pointerActive = true;
    dragging = false;
    moved = false;
    startX = e.clientX;
    startOffset = offset;
  });

  window.addEventListener("pointermove", (e) => {
    if (!pointerActive) return;
    const dx = e.clientX - startX;

    if (!dragging) {
      if (Math.abs(dx) <= 4) return;
      dragging = true;
      moved = true;
      viewport.classList.add("is-dragging");
      track.classList.add("no-transition");
    }

    const hi = targetFor(0);
    const lo = targetFor(maxIndex());
    let next = startOffset + dx;
    if (next > hi) next = hi + (next - hi) * 0.3;
    if (next < lo) next = lo + (next - lo) * 0.3;
    offset = next;
    track.style.transform = `translateX(${offset}px)`;
  });

  window.addEventListener("pointerup", () => {
    if (!pointerActive) return;
    pointerActive = false;
    if (!dragging) return;
    dragging = false;
    viewport.classList.remove("is-dragging");
    index = nearestIndex(offset);
    settle();
  });

  viewport.addEventListener(
    "click",
    (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    },
    true
  );
  slides.forEach((s) =>
    s.addEventListener("dragstart", (e) => e.preventDefault())
  );

  let resizeRaf;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(() => settle(false));
  });
  window.addEventListener("load", () => settle(false));

  settle(false);
}

document.querySelectorAll(".carousel").forEach(initCarousel);
