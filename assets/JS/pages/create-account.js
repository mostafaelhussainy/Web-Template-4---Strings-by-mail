const formInputs = document.querySelectorAll("input[required]");
formInputs.forEach((input, index, arr) => {
  if (index == 0) {
    input.addEventListener("invalid", (e) => {
      e.preventDefault();
      document.querySelector(`.invalid-msg-${input.id}`).style.display = "flex";
    });
  } else {
    input.addEventListener("invalid", (e) => {
      e.preventDefault();
      if (arr[index - 1].checkValidity()) {
        if (input.validationMessage == "Please fill out this field." || input.validationMessage == 'Please check this box if you want to proceed.') {
          console.log('test 1:', input)
          document.querySelector(`.invalid-msg-${arr[index - 1].id}`).style.display = "none";
          document.querySelector(`.invalid-msg-${input.id}`).style.display = "flex";
        }
        else {
          console.log('test 2:', input.validationMessage)
          document.querySelector(`.invalid-msg-${arr[index - 1].id}`).style.display = "none";
          document.querySelector(`.invalid-form-email`).style.display = "flex";
          document.querySelector(`.invalid-msg-${input.id}`).style.display = "none";
        }
      }
    });
  }
});