/* ============================================================
   PIXELORIA — Enhanced UI interactions
============================================================ */

/* ------------------------------------------------------------------
   Utilities
------------------------------------------------------------------ */
const qs  = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

/* ------------------------------------------------------------------
   Header: scroll shadow
------------------------------------------------------------------ */
const header = qs(".site-header");
if (header) {
  const onScroll = () =>
    header.classList.toggle("scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ------------------------------------------------------------------
   Mobile nav toggle
------------------------------------------------------------------ */
const menuToggle = qs(".menu-toggle");
const nav        = qs(".site-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );
  });

  /* Close on link click */
  qsa("a", nav).forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    });
  });

  /* Close on outside click */
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* ------------------------------------------------------------------
   Active nav link on scroll
------------------------------------------------------------------ */
const sections = qsa("main section[id]");
const navLinks = qsa(".nav-link");

if (sections.length && navLinks.length) {
  const activateLink = () => {
    const scrollY = window.scrollY + 120;
    let current = "";
    sections.forEach((sec) => {
      if (sec.offsetTop <= scrollY) current = sec.id;
    });
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${current}`);
    });
  };
  window.addEventListener("scroll", activateLink, { passive: true });
  activateLink();
}

/* ------------------------------------------------------------------
   Reveal on scroll (IntersectionObserver)
------------------------------------------------------------------ */
const revealEls = qsa(".reveal");

if ("IntersectionObserver" in window && !prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

/* ------------------------------------------------------------------
   Animated counters (hero metrics)
------------------------------------------------------------------ */
function animateCounter(el) {
  const target  = parseFloat(el.dataset.target);
  const decimal = parseInt(el.dataset.decimal || "0", 10);
  const duration = 1600;
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = eased * target;
    el.textContent = decimal
      ? (value / 10).toFixed(1)
      : Math.floor(value).toString();
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = decimal ? (target / 10).toFixed(1) : target.toString();
  };
  requestAnimationFrame(step);
}

/* ------------------------------------------------------------------
   Custom cursor (desktop only)
------------------------------------------------------------------ */
if (window.matchMedia("(pointer: fine)").matches && !prefersReducedMotion) {
  const cursor   = qs("#cursor");
  const follower = qs("#cursor-follower");

  if (cursor && follower) {
    let mx = -100, my = -100;
    let fx = -100, fy = -100;

    const moveCursor = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top  = my + "px";
    };

    const animateFollower = () => {
      fx += (mx - fx) * 0.14;
      fy += (my - fy) * 0.14;
      follower.style.left = fx + "px";
      follower.style.top  = fy + "px";
      requestAnimationFrame(animateFollower);
    };

    document.addEventListener("mousemove", moveCursor, { passive: true });
    animateFollower();

    const hoverEls = "a, button, input, textarea, select, [data-cursor-hover]";
    document.querySelectorAll(hoverEls).forEach((el) => {
      el.addEventListener("mouseenter", () =>
        document.body.classList.add("cursor-hover")
      );
      el.addEventListener("mouseleave", () =>
        document.body.classList.remove("cursor-hover")
      );
    });

    document.addEventListener("mouseleave", () => {
      cursor.style.opacity   = "0";
      follower.style.opacity = "0";
    });
    document.addEventListener("mouseenter", () => {
      cursor.style.opacity   = "1";
      follower.style.opacity = "1";
    });
  }
}

/* ------------------------------------------------------------------
   Contact form — validated async submit to /api/submit-lead
------------------------------------------------------------------ */
const form        = qs("#contact-form");
const formSuccess = qs("#form-success");
const submitBtn   = form ? qs("button[type='submit']", form) : null;

if (form && formSuccess && submitBtn) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    /* Client-side validation */
    const requiredFields = qsa("[required]", form);
    let valid = true;
    requiredFields.forEach((field) => {
      const ok = field.checkValidity();
      field.setAttribute("aria-invalid", String(!ok));
      if (!ok) valid = false;
    });
    if (!valid) {
      qs("[aria-invalid='true']", form)?.focus();
      return;
    }

    /* Loading state */
    submitBtn.classList.add("is-loading");
    submitBtn.disabled = true;

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        form.setAttribute("hidden", "");
        formSuccess.removeAttribute("hidden");
      } else {
        /* API error — fall back to native submit so data isn't lost */
        form.submit();
      }
    } catch {
      /* No network / API absent — fall back to native submit */
      form.submit();
    }
  });

  /* Live validation feedback */
  qsa("input, textarea, select", form).forEach((field) => {
    field.addEventListener("blur", () => {
      if (field.hasAttribute("required") || field.value) {
        field.setAttribute("aria-invalid", String(!field.checkValidity()));
      }
    });
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") {
        field.setAttribute("aria-invalid", String(!field.checkValidity()));
      }
    });
  });
}

/* ------------------------------------------------------------------
   Footer year
------------------------------------------------------------------ */
const yearEl = qs("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

/* ------------------------------------------------------------------
   Smooth anchor scroll with offset compensation
------------------------------------------------------------------ */
qsa('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const id     = anchor.getAttribute("href").slice(1);
    const target = id ? document.getElementById(id) : null;
    if (!target) return;

    const headerOffset = parseInt(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--header-h") || "72",
      10
    );

    const y =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerOffset -
      16;

    window.scrollTo({ top: y, behavior: "smooth" });
  });
});
