"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`http://localhost:${3e3}/esbuild`).addEventListener(
    "change",
    () => location.reload()
  );

  // src/creator/index.ts
  var creatorItems = document.querySelectorAll(".creator-item");
  creatorItems.forEach((item) => {
    const creatorName = item.getAttribute("mt-creator");
    const fullNameElem = item.querySelector('[mt-creator="full-name"]');
    fullNameElem.textContent = creatorName;
    const creatorLink = item.getAttribute("mt-creator-link");
    const linkElem = item.querySelector('[mt-creator="link"]');
    if (creatorLink !== null) {
      linkElem.href = creatorLink;
    }
    console.log(creatorName);
    console.log(fullNameElem);
    console.log(creatorLink);
  });
})();
//# sourceMappingURL=index.js.map
