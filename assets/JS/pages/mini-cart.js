const toggleFadeOutClassOnMiniCart = () => {
    const miniCart = document.querySelector("#mini-cart");
    miniCart.classList.toggle("fadeOutRight")
}

const OpenMiniCartBtn = document.querySelector("#cart-btn");
OpenMiniCartBtn.addEventListener("click", toggleFadeOutClassOnMiniCart)

const closeMiniCartBtn = document.querySelectorAll(".close-mini-cart");
closeMiniCartBtn.forEach(btn => btn.addEventListener("click", toggleFadeOutClassOnMiniCart))

