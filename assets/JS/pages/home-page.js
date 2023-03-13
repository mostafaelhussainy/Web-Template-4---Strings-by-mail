// C A T E G O R I E S

let categories = document.querySelectorAll(".animation-target")
categories.forEach((category, i) => {
  const delay = (0.3 * i) + 1;
  category.style.animationDelay = `${delay}s`
})

///////////////////////////////////////////////////////

// T E S T I M O N I A L S
var swiper = new Swiper(".testimonialsSlider", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 15,
  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //   },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 50,
  //   },
  // },
});




