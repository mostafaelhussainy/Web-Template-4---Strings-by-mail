const toggleAimatedDivsBtns = document.querySelectorAll(".toggle-pass-divs");
const animatedDivs = document.querySelectorAll(".animate--password");

const toggleAnimations = () => {
    animatedDivs.forEach(div => div.classList.toggle("fadeOutRight"))
}
toggleAimatedDivsBtns.forEach(btn => {
    btn.addEventListener("click", toggleAnimations)
})
