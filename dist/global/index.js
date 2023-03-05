"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`http://localhost:${3e3}/esbuild`).addEventListener(
    "change",
    () => location.reload()
  );

  // src/global/index.ts
  console.log("code for global");
  document.addEventListener("DOMContentLoaded", function() {
    const exists = document.querySelectorAll(".navigation-bar").length > 0;
    window.addEventListener("scroll", function() {
      if (exists && window.scrollY > 0) {
        document.querySelector(".navigation-bar")?.classList.add("is--scrolled");
      } else if (exists) {
        document.querySelector(".navigation-bar")?.classList.remove("is--scrolled");
      }
    });
    function setMenuHeight() {
      const width = window.innerWidth;
      const menuGradient = document.querySelector(
        ".menu_gradient-links-wrap"
      );
      if (width < 992) {
        const windowHeight = window.innerHeight;
        const height = windowHeight - 25.3 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        menuGradient.style.height = `${height}px`;
      } else {
        menuGradient.style.height = "auto";
      }
    }
    setMenuHeight();
    window.addEventListener("resize", setMenuHeight);
  });
})();
//# sourceMappingURL=index.js.map
