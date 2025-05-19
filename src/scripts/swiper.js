import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

let swiper = null;

function toggleSwiper() {
  const isMobile = window.matchMedia('(max-width: 1023px)').matches;

  if (isMobile && !swiper) {
    swiper = new Swiper('.mySwiper', {
      loop: true,
      slidesPerView: 1,
    });
  } else if (!isMobile && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

toggleSwiper();
window.addEventListener('resize', toggleSwiper);