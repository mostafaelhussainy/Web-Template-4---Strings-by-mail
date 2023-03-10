let popUpBtns = document.querySelectorAll(".pop-up-button");
let closepopUpBtns = document.querySelectorAll(".close-pop-up");

// open pop up
popUpBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let popUpID = btn.dataset.popup;
    let popUp = document.querySelector(`#${popUpID}-pop-up`);
    popUp.classList.add("pop-up-visible");
  })
})

// close popup
closepopUpBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let popUpID = btn.dataset.popup;
    let popUp = document.querySelector(`#${popUpID}-pop-up`);
    popUp.classList.remove("pop-up-visible");
  })
})