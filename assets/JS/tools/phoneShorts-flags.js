let countries;
const options = document.querySelector("#phone-flags-sc");
const phoneInput = document.querySelector("#phone-input");

const setCountryFlagsAndShortCode = () => {
    countries.forEach((country, index) => {
        options.innerHTML += `<option value="${country.name}" index="${index}" short-code="${country.countryShortCode}" dial-num="${country.dial}">${country.flag}</option>`;
    });

    handleOptionSelect();
};

const handleOptionSelect = () => {
    const selectedOption = options.options[options.selectedIndex];
    phoneInput.dataset.dialNum = selectedOption.getAttribute("dial-num");
    phoneInput.value = selectedOption.getAttribute("dial-num");
};

const handlePhoneInput = () => {
    const dialNum = phoneInput.dataset.dialNum;
    const value = phoneInput.value;

    if (!value.startsWith(dialNum)) {
        phoneInput.value = dialNum;
    }
};

fetch("/assets/JSON/countries.json")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        countries = data;
        setCountryFlagsAndShortCode();
    });

options.addEventListener("change", handleOptionSelect);
phoneInput.addEventListener("input", handlePhoneInput);
