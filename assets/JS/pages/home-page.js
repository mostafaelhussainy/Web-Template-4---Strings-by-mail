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
  breakpoints: {
    370: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
    },
    1550: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});

///////////////////////////////////////////////////////
// N E W S    L E T T E R

const closeNewsLetterBtn = document.querySelector(".close-news-letter");
closeNewsLetterBtn.addEventListener("click", () => {
  const newsLetterPopUp = document.querySelector("#news-letter");
  newsLetterPopUp.classList.add("closeNewsLetter")
})


