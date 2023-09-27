// Get references to the password and confirm password input elements
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

// Get a reference to the form and the error message element
const form = document.querySelector("form");
const errorMessage = document.getElementById("error-message");

// Add an event listener to the form's submit button
form.addEventListener("submit", function (event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the values of the password and confirm password fields
  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;

  // Check if the passwords match
  if (passwordValue === confirmPasswordValue) {
    // Passwords match, you can submit the form or perform any other action here
    passwordInput.classList.remove("error");
    confirmPasswordInput.classList.remove("error");

    return undefined; //not necessary
  } else {
    // Passwords do not match, display an error message
    errorMessage.textContent = "* Passwords do not match";

    passwordInput.classList.add("error");
    confirmPasswordInput.classList.add("error");
  }
});