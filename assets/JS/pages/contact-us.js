const contactUsForm = document.querySelector("#contact-us-form");
const inputsWrapper = contactUsForm.querySelector(".inputs-wrapper")
const spinner = contactUsForm.querySelector(".loader")

contactUsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const contactUsFormData = new FormData(contactUsForm);

    const fields = ["ContactName", "ContactEmail", "ContactSubject", "ContactMsg"];
    const formData = {};

    fields.forEach((field) => {
        formData[field] = contactUsFormData.get(field);
    });
    spinner.classList.add("active--spinner");
    inputsWrapper.classList.add("deActive--inputsWrapper");

    setTimeout(() => {
        spinner.classList.remove("active--spinner");
        inputsWrapper.classList.remove("deActive--inputsWrapper");
    }, 2000)
});
