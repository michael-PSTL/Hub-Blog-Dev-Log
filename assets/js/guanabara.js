const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px",
  },
);

const seletores = [
  ".hero-inner",
  ".hero-stats",
  ".quote-section blockquote",
  ".section-label",
  ".sobre-section h2",
  ".section-intro",
  ".perfil-card",
  ".tl-item",
  ".pilar",
  ".cursos-section h2",
  ".cat-group",
  ".course-card",
];

document.querySelectorAll(seletores.join(", ")).forEach((el, i) => {
  el.classList.add("reveal");

  const siblings = el.parentElement.querySelectorAll(".reveal");
  const index = Array.from(siblings).indexOf(el);
  if (index > 0) {
    el.style.transitionDelay = `${index * 0.07}s`;
  }
  observer.observe(el);
});
