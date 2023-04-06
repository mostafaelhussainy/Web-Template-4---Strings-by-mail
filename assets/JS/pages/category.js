const openFilterBtn = document.querySelector(".open-filter-on-mob");
const filterWindow = document.querySelector("#filter");
const closeFilterWindow = document.querySelector("#close-filter");

openFilterBtn.addEventListener("click", () => {
    filterWindow.classList.remove("hide-in-small-screens")
})

closeFilterWindow.addEventListener("click", () => {
    filterWindow.classList.add("hide-in-small-screens")
})