let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirm-password");
let createAccountButton = document.getElementById("submittable");

createAccountButton.addEventListener("submit", (event) => {
  if (passwordInput !== confirmPasswordInput.value) {
    passwordInput.classList.add("error");
    confirmPasswordInput.classList.add("error");
    event.preventDefault();
  }
});
