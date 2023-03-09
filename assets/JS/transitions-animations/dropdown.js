let dropdownBtns = document.querySelectorAll(".dropdown-btn");

dropdownBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const dropdownID = btn.dataset.dropdown;
    const dropdown = document.querySelector(`#dropdown-${dropdownID}`);
    const dropdownIcon = document.querySelector(`#icon-${dropdownID}`);
    dropdown.classList.toggle("hidden-dropdown");
    dropdownIcon.classList.toggle("rotate-180");
  })
})

