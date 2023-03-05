console.log('code for home');
window.Webflow ||= [];
window.Webflow.push(() => {
  /*start of swiper initiation*/
  const section = document.querySelector('#trading-now') as HTMLElement;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Section is in view and we destroy and reset webflow interactions
        window.Webflow && window.Webflow.destroy();
        window.Webflow && window.Webflow.ready();
        window.Webflow && window.Webflow.require('ix2').init();
        console.log('section is on view');

        /*Card with custom gradeint mask */
        const cards = document.querySelectorAll('.trade-card-item') as NodeListOf<HTMLElement>;
        const masks = document.querySelectorAll('.mask') as NodeListOf<HTMLElement>;

        cards.forEach((card, index) => {
          const mask = masks[index];
          console.log(card, index);
          console.log(masks[index]);

          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.offsetX / rect.width;
            const y = e.offsetY / rect.height;
            const newX = 1 - x;
            const newY = 1 - y;

            mask.style.background = `radial-gradient(circle at ${newX * 100}% ${
              newY * 100
            }%, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 0.5) 85%, rgba(0, 0, 0, 0.5) 100%), url('https://uploads-ssl.webflow.com/64006d224b75fb1ebc5991a8/6400e52e87bd7fdace579a02_overlay-image-mask.webp')`;
            mask.style.backgroundSize = 'cover';
            mask.style.backgroundRepeat = 'no-repeat';
            mask.style.backgroundPosition = 'center';
            mask.style.filter = 'brightness(1.5) contrast(1.2)';
            mask.style.transform = 'scale(1.2)';
          });
          card.addEventListener('mouseleave', (e) => {
            mask.style.background = 'transparent';
          });
        });
      }
    });
  });
  observer.observe(section);

  const swiper = new Swiper('.swiper', {
    speed: 600,
    loop: true,
    autoHeight: false,
    centeredSlides: true,
    followFinger: true,
    freeMode: false,
    slideToClickedSlide: false,
    slidesPerView: 'auto',
    spaceBetween: 128,
    rewind: false,
    mousewheel: {
      forceToAxis: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: '.slide_next',
      prevEl: '.slide_prev',
    },
    breakpoints: {
      // mobile landscape
      0: {
        slidesPerView: 'auto',
        spaceBetween: 16,
        centeredSlides: false,
      },
      // tablet
      768: {
        slidesPerView: 'auto',
        spaceBetween: 16,
        centeredSlides: false,
      },
      // desktop
      992: {
        slidesPerView: 'auto',
      },
    },

    slideActiveClass: 'is-active',
    slideDuplicateActiveClass: 'is-active',
  });
});
