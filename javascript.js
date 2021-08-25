let formbtn = document.querySelector("#login-btn");
let formsbtn = document.querySelector("#signup-btn");
let loginform = document.querySelector(".login-form-container");
let signupform = document.querySelector(".sign");
let formclose = document.querySelector("#form-close");
let formsclose = document.querySelector(".forms-close");

formclose.addEventListener("click", () => {
  loginform.classList.remove("active");
});
formbtn.addEventListener("click", () => {
  loginform.classList.add("active");
});
formsbtn.addEventListener("click", () => {
  signupform.classList.add("active");
});
formsclose.addEventListener("click", () => {
  signupform.classList.remove("active");
});
