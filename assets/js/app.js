// Scroll to top
const scrollToTop = document.querySelector('.scroll-to-top')
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTop.style.display = "grid"
    } else {
        scrollToTop.style.display = "none"
    }
})

// Slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 24,
    speed: 1000,
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
        1024: {
            slidesPerView: 2,
        }
    }
  });

//   Aos
AOS.init({
    duration: 1000,
    easing: "ease-in-out",
});



// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 300,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     loop:true,
//   });
// //   Aos
// AOS.init({
//     duration: 1000,
//     easing: "ease-in-out",
// });

