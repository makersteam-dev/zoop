console.log('code for global');

document.addEventListener('DOMContentLoaded', function () {
  // code to run after page has loaded

  /* check if navigation-bar exists (to avoid js console errors) */
  const exists: boolean = document.querySelectorAll('.navigation-bar').length > 0;

  /* if user scroll add is--scrolled class */
  window.addEventListener('scroll', function () {
    if (exists && window.scrollY > 0) {
      document.querySelector('.navigation-bar')?.classList.add('is--scrolled');
    } else if (exists) {
      /* remove is--scrolled class */
      document.querySelector('.navigation-bar')?.classList.remove('is--scrolled');
    }
  });

  /*navbar on mobile calculate 100vh*/
  function setMenuHeight() {
    const width: number = window.innerWidth;
    const menuGradient: HTMLElement = document.querySelector(
      '.menu_gradient-links-wrap'
    ) as HTMLElement;

    if (width < 992) {
      const windowHeight: number = window.innerHeight;
      const height: number =
        windowHeight - 25.3 * parseFloat(getComputedStyle(document.documentElement).fontSize);
      menuGradient.style.height = `${height}px`;
    } else {
      menuGradient.style.height = 'auto';
    }
  }

  // Set initial height on page load
  setMenuHeight();

  // Check for changes in screen size
  window.addEventListener('resize', setMenuHeight);
});
