// ===== SCROLL REVEAL =====
      const revealEls = document.querySelectorAll(".reveal");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -30px 0px" },
      );
      revealEls.forEach((el) => observer.observe(el));

      // ===== BUTTON CLICK FEEDBACK =====
      document.querySelectorAll(".btn-playlist").forEach((btn) => {
        btn.addEventListener("click", function () {
          const original = this.innerHTML;
          this.classList.add("clicked");
          this.innerHTML = '<i class="fa-solid fa-check"></i> Abrindo...';
          setTimeout(() => {
            this.classList.remove("clicked");
            this.innerHTML = original;
          }, 2200);
        });
      });

      // ===== NAV SCROLL EFFECT =====
      const nav = document.querySelector("nav");
      window.addEventListener(
        "scroll",
        () => {
          nav.style.background =
            window.scrollY > 60 ? "rgba(10,15,30,0.95)" : "rgba(10,15,30,0.8)";
        },
        { passive: true },
      );