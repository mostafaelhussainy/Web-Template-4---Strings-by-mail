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
const newsLetterPopUp = document.querySelector("#news-letter");
const newsLetterContainer = document.querySelector(".news-letter-container");
const subscribeBtn = document.querySelector("#subscribe-btn");
const subscribeInput = newsLetterPopUp.querySelector("input");

closeNewsLetterBtn.addEventListener("click", () => {
  newsLetterPopUp.classList.add("closeNewsLetter")
});

const subscribeToNewsLetter = (e) => {
  e.preventDefault()
  if (subscribeInput.validity.valid) {
    newsLetterContainer.innerHTML = '<h6>Thanks for your subscription!</h6>';
    setTimeout(() => newsLetterPopUp.classList.add("closeNewsLetter"), 1500)
  } else {
    newsLetterPopUp.querySelector(".invalid").style.display = "flex";
  }
}

subscribeBtn.addEventListener("click", subscribeToNewsLetter);

