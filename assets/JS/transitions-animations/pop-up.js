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

{/*
// O P E N    B U T T O N
<button type="button" data-popup="(POPUP NAME)" class="pop-up-button"></button> 

// P O P - U P    W R A P P E R
<div class="overlay-wrapper" id="(POPUP NAME)-pop-up">

  // P O P - U P    O V E R L A Y
  <i class="pop-up-overlay close-pop-up" data-popup="(POPUP NAME)" id="(POPUP NAME)-pop-up-overlay"></i>
  <div class="pop-up">
    // P O P - U P    T I T L E
    <h5>
      // P O P - U P    C L O S E   I C O N
      <img src="../assets/icons/close.svg"
        class="close-pop-up" data-popup="(POPUP NAME)">
    </h5>
  // P O P - U P    C O N T E N T
  </div>
</div>
*/}
