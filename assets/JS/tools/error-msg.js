const forms = document.querySelectorAll('form'); // get all forms on the page

forms.forEach((form) => { // loop through each form
  const inputs = form.querySelectorAll('input[required]'); // get all required inputs within this form

  inputs.forEach((input) => { // loop through each required input
    input.addEventListener('invalid', (event) => { // add an event listener for the 'invalid' event
      event.preventDefault(); // prevent the browser's default behavior for invalid input
      const errorMessage = input.parentElement.querySelector('.invalid'); // find the error message element associated with this input
      input.classList.add('invalid-input'); // add a class to the input to indicate it is invalid
      errorMessage.style.display = 'flex'; // show the error message
    });

    input.addEventListener('input', () => { // add an event listener for the 'input' event
      const errorMessage = input.parentElement.querySelector('.invalid'); // find the error message element associated with this input
      if (errorMessage.style.display === 'flex') { // if the error message is currently displayed
        input.classList.remove('invalid-input'); // remove the class indicating the input is invalid
        errorMessage.style.display = 'none'; // hide the error message
      }
    });
  });

  form.addEventListener('submit', (event) => { // add an event listener for the 'submit' event on the form
    inputs.forEach((input) => { // loop through each required input again
      const errorMessage = input.parentElement.querySelector('.invalid'); // find the error message element associated with this input
      if (!input.checkValidity()) { // if the input is invalid
        input.classList.add('invalid-input'); // add a class to the input to indicate it is invalid
        errorMessage.style.display = 'flex'; // show the error message
      } else { // if the input is valid
        input.classList.remove('invalid-input'); // remove the class indicating the input is invalid
        errorMessage.style.display = 'none'; // hide the error message
      }
    });

    if (!form.checkValidity()) { // if any required inputs are invalid
      event.preventDefault(); // prevent the form from submitting
    }
  });
});
