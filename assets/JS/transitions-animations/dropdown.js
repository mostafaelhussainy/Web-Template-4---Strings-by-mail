// Get all dropdown buttons and add click event listener
const dropdownBtns = document.querySelectorAll(".dropdown-btn");
dropdownBtns.forEach(btn => btn.addEventListener("click", handleClick));

function handleClick() {
  const dropdownID = this.dataset.dropdown;
  const dropdown = document.querySelector(`#dropdown-${dropdownID}`);
  const dropdownIcon = document.querySelector(`#icon-${dropdownID}`);
  const dropdownWrappers = getDropdownWrappers(this.dataset.dropdowngroup);

  // Close all other dropdowns in the same group
  dropdownWrappers.forEach(dropdownWrapper => {
    if (dropdownWrapper !== dropdown) {
      closeDropdown(dropdownWrapper);
    }
  });

  // Toggle current dropdown and icon
  toggleDropdown(dropdown, dropdownIcon);
}

function getDropdownWrappers(groupName) {
  // If dropdown button doesn't belong to a group, return empty array
  if (!groupName) {
    return [];
  }
  // Get all dropdown wrappers with the same group name
  return document.querySelectorAll(`[data-dropdowngroupname='${groupName}']`);
}

function closeDropdown(dropdown) {
  dropdown.style.maxHeight = null;
  const dropdownIcon = document.querySelector(`#icon-${dropdown.id.split("-")[1]}`);
  if (dropdownIcon) {
    dropdownIcon.classList.remove("rotate-180");
  } else {
    const dropdownMinus = document.querySelector(`#minus-${dropdown.id.split("-")[1]}`);
    const dropdownPlus = document.querySelector(`#plus-${dropdown.id.split("-")[1]}`);

    dropdownMinus.classList.add("hidden");
    dropdownPlus.classList.remove("hidden");
  }
}

function toggleDropdown(dropdown, dropdownIcon) {
  dropdown.style.maxHeight ? dropdown.style.maxHeight = null : dropdown.style.maxHeight = dropdown.scrollHeight + "px";
  if (dropdownIcon) {
    dropdownIcon.classList.toggle("rotate-180");
  } else {
    console.log(`#minus-${dropdown.id.split("-")[1]}`)
    const dropdownMinus = document.querySelector(`#minus-${dropdown.id.split("-")[1]}`);
    const dropdownPlus = document.querySelector(`#plus-${dropdown.id.split("-")[1]}`);
    dropdownMinus.classList.toggle("hidden");
    dropdownPlus.classList.toggle("hidden");
  }
}
