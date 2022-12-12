const email = document.querySelector("#email");
const password = document.querySelector("#password");

const togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";

  if (type === "password") {
    togglePassword.src = "/assets/eye.svg";
  } else {
    togglePassword.src = "/assets/eye2.svg";
  }

  password.setAttribute("type", type);
});
