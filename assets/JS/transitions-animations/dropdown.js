let dropdownBtns = document.querySelectorAll(".dropdown-btn");

dropdownBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const dropdownID = btn.dataset.dropdown;
    const dropdown = document.querySelector(`#dropdown-${dropdownID}`);
    const dropdownIcon = document.querySelector(`#icon-${dropdownID}`);
    dropdown.style.maxHeight ? dropdown.style.maxHeight = null : dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    if (dropdownIcon) {
      dropdownIcon.classList.toggle("rotate-180");
    } else {
      const dropdownMinus = document.querySelector(`#minus-${dropdownID}`);
      const dropdownPlus = document.querySelector(`#plus-${dropdownID}`);
      dropdownMinus.classList.toggle("hidden");
      dropdownPlus.classList.toggle("hidden");
    }
  })
})

