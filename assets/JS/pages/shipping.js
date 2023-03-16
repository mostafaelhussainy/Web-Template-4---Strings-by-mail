const checkBox = document.querySelector("#billing-equal-shipping");
const billingSection = document.querySelector("#billing-address");

checkBox.addEventListener("change", function () {
  if (this.checked) {
    billingSection.style.maxHeight = "none";
  } else {
    billingSection.style.maxHeight = "0";
  }
});


const deliveryRadioBtns = document.querySelectorAll(".delivery-radios")
const deliveryMethods = document.querySelectorAll(".delivery-method")
deliveryRadioBtns.forEach(radio => {
  radio.addEventListener("change", function () {
    deliveryMethods.forEach(div => {
      div.classList.remove("border-active");
    });
    const deliveryMethodID = radio.dataset.target;
    const deliveryMethod = document.querySelector(`#${deliveryMethodID}`);
    deliveryMethod.classList.add("border-active")
  });
})