const showPasswordBtns = document.querySelectorAll(".show-password");

function showPassword(event) {
	const passwordInput = event.target.parentNode.previousElementSibling;
	passwordInput.type = "text";
}

function hidePassword(event) {
	const passwordInput = event.target.parentNode.previousElementSibling;
	passwordInput.type = "password";
}

showPasswordBtns.forEach(function (button) {
	button.addEventListener("mousedown", showPassword);
	button.addEventListener("mouseup", hidePassword);
});
