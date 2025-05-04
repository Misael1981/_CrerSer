export function ourStories() {
  var swiper = new Swiper(".ourStories__cards", {
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 4,
      },
      1800: {
        slidesPerView: 5,
      },
      1900: {
        slidesPerView: 6,
      },
    },
  });
}
