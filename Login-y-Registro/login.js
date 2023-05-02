const loginComponent = document.getElementById("login-component");
const signUpComponent = document.getElementById("sign-up-component");

const accountComponent = document.getElementById("account-component");

const toSignUp = document.getElementById("register-text");
const toLogin = document.getElementById("to-login");

toSignUp.addEventListener("click", () => {
  loginComponent.style.display = "none";
  signUpComponent.style.display = "block";
});

toLogin.addEventListener("click", () => {
  signUpComponent.style.display = "none";
  loginComponent.style.display = "block";
});

const createAccount = document.getElementById("create-account");
const login = document.getElementById("login");

function signUpUser() {
  let user = {
    names: document.getElementById("name").value,
    lastNames: document.getElementById("last-name").value,
    genre: document.getElementById("genre").value,
    birthday: document.getElementById("birthday").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  let confirmPassword = document.getElementById("confirm-password").value;
  if (
    user.password === confirmPassword &&
    user.password !== "" &&
    confirmPassword !== ""
  ) {
    let json = JSON.stringify(user);
    localStorage.setItem(user.email, json);
    resetInputs();
    signUpComponent.style.display = "none";
    accountComponent.style.display = "block";
  }
}

function resetInputs() {
  document.getElementById("name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("birthday").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}

function loginUser() {
  let inputEmail = document.getElementById("email-login").value;
  let inputPassword = document.getElementById("password-login").value;

  const account = document.getElementById("welcome");

  let json = localStorage.getItem(inputEmail);
  let user = JSON.parse(json);

  if (json === null) {
    console.log("Wrong email");
  } else if (user.email === inputEmail && user.password === inputPassword) {
    loginComponent.style.display = "none";
    account.style.display = "block";
    //Aqui se debe redirigir a la landing
  } else {
    console.log("Wrong Password!");
  }
}

createAccount.addEventListener("click", () => {
  signUpUser();
});

login.addEventListener("click", () => {
  loginUser();
});
