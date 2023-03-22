const toggleAimatedDivsBtns = document.querySelectorAll(".toggle-address-divs");
const animatedDivs = document.querySelectorAll(".animate--address");

const toggleAnimations = (btn) => {
  animatedDivs.forEach(div => {
    div.classList.add("fadeOutRight");
  })
  const target = btn.getAttribute('target');
  document.querySelector(`.div-${target}`).classList.remove("fadeOutRight");
}
toggleAimatedDivsBtns.forEach(btn => {
  btn.addEventListener("click", () => (toggleAnimations(btn)))
})