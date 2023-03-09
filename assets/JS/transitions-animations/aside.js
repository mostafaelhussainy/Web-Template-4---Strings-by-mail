// V A R I A B L E S
const categoriesBtns = document.querySelectorAll(".sub-category-btn");
const closeSubCategory = document.querySelectorAll(".back-arrow");
const closeAside = document.querySelectorAll(".close-side-nav");
const aside = document.querySelector("aside");
const subCategories = document.querySelectorAll(".sub-categories");
const openAsideBtn = document.querySelector(".shop-icon-wrapper")

// O P E N    A S I D E
openAsideBtn.addEventListener("click", () => {
  console.log(aside.classList.contains("open-subcategory"))
  if (!aside.classList.contains("open-subcategory")) aside.classList.add("open-aside")
})
// O P E N    S U B C A T E G O R I E S
categoriesBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const btnID = btn.dataset.subcategory;
    const category = document.querySelector(`#${btnID}`);
    category.classList.add("open-subcategory");
    categoriesBtns.forEach(btn => { btn.classList.add("hide") });
  })
})

// C L O S E    S U B - C A T E G O R I E S
closeSubCategory.forEach(btn => {
  btn.addEventListener("click", () => {
    const btnID = btn.dataset.subcategory;
    const category = document.querySelector(`#${btnID}`);
    category.classList.remove("open-subcategory");
    categoriesBtns.forEach(btn => { btn.classList.remove("hide") });
  })
})

// C L O S E    A S I D E & S U B - C A T E G O R I E S
closeAside.forEach(btn => {
  btn.addEventListener("click", () => {
    aside.classList.remove("open-aside");
    console.log(subCategories)
    subCategories.forEach(sub => {
      if (sub.classList.contains("open-subcategory")) sub.classList.remove("open-subcategory")
    })
    categoriesBtns.forEach(btn => { btn.classList.remove("hide") })
  })
})