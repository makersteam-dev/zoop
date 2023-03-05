"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`http://localhost:${3e3}/esbuild`).addEventListener(
    "change",
    () => location.reload()
  );

  // src/index.ts
  document.addEventListener("DOMContentLoaded", function() {
    let exists = $(".navigation-bar").length ? true : false;
    $(window).on("scroll", function() {
      if (exists && $(window).scrollTop() > 0) {
        $(".navigation-bar").addClass("is--scrolled");
      } else if (exists) {
        $(".navigation-bar").removeClass("is--scrolled");
      }
    });
    function setMenuHeight() {
      const width = window.innerWidth;
      if (width < 992) {
        const menuGradient = document.querySelector(".menu_gradient-links-wrap");
        const windowHeight = window.innerHeight;
        const height = windowHeight - 25.3 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        menuGradient.style.height = `${height}px`;
      } else {
        const menuGradient = document.querySelector(".menu_gradient-links-wrap");
        menuGradient.style.height = "auto";
      }
    }
    setMenuHeight();
    window.addEventListener("resize", setMenuHeight);
  });
})();
//# sourceMappingURL=index.js.map
