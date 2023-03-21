const toggleAimatedDivsBtns = document.querySelectorAll(".toggle-address-divs");
const animatedDivs = document.querySelectorAll(".animate--address");

const toggleAnimations = () => {
    animatedDivs.forEach(div => div.classList.toggle("fadeOutRight"))
}
toggleAimatedDivsBtns.forEach(btn => {
    btn.addEventListener("click", toggleAnimations)
})