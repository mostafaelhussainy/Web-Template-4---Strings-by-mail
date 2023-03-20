const showPasswordBtn = document.querySelector(".show-password");
const userNameField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const form = document.querySelector("form");

function showPassword() {
  passwordField.type = "text";
}

function hidePassword() {
  passwordField.type = "password";
}

showPasswordBtn.addEventListener("mousedown", showPassword);
showPasswordBtn.addEventListener("mouseup", hidePassword);

userNameField.addEventListener("invalid", (e) => {
  e.preventDefault();
  document.querySelector(".invalid-username").style.display = "flex";
})

passwordField.addEventListener("invalid", (e) => {
  e.preventDefault();
  if (userNameField.checkValidity()) {
    document.querySelector(".invalid-username").style.display = "none";
    document.querySelector(".invalid-password").style.display = "flex";
  }
})

userNameField.addEventListener("input", (e) => {
  document.querySelector(".invalid-username").style.display = "none";
})

passwordField.addEventListener("input", (e) => {
  document.querySelector(".invalid-password").style.display = "none";
})