'use strict';

// validtion
let formElement = document.getElementById("registration-form");

formElement.addEventListener("submit", function(e) {
  e.preventDefault();
  let errors = {};

  // username
  let usernameValue = document.getElementById("username-field").value;

  if (usernameValue.length < 5) {
    errors.username = "Username must be more than 5 characters";
  }
  if (usernameValue == "") {
    errors.username = "Username field can not be empty";
  }

  pass
  let password1 = document.getElementById("password-field").value;
  let password2 = document.getElementById("password-field2").value;

  if (password1.length < 6) {
    errors.password = "Password must be more than 6 characters";
  }
  if (password1 == "") {
    errors.password = "Password field can not be empty";
  }

  if (password1 != password2) {
    errors.password2 = "Password do not match";
  }


  // // radio
  let userAge = false;
  document.querySelectorAll('[name="age"]').forEach((item) => {
    if (item.checked) {
      userAge = true;
    }
  });
  if (!userAge) {
    errors.age = "Please Select your Age";
  }


  // checkbox
  let agree = document.getElementById("agree").checked;
  if (!agree) {
    errors.agree = "You must agree our terms and conditions";
  }
  document.querySelectorAll(".error-text").forEach((content) => {
    content.innerText = "";
  });
  for (let objectKey in errors) {
    let pErrorElement = document.getElementById("error-" + objectKey);

    if (pErrorElement) {
      pErrorElement.innerText = errors[objectKey];
    }
    console.log(pErrorElement);
  }
  if (Object.keys(errors).length == 0) {
    formElement.submit();
  }
});

// // show/hide pass
let passwordField = document.getElementById("password-field");
let toggleIcone = document.getElementById("toggleIcon");

toggleIcone.addEventListener("click", function () {
  if (passwordField.type == "password") {
    passwordField.setAttribute("type", "text");
    toggleIcone.classList.remove("fa-eye");
    toggleIcone.classList.add("fa-eye-slash");
  } else {
    passwordField.setAttribute("type", "password");
    toggleIcone.classList.remove("fa-eye-slash");
    toggleIcone.classList.add("fa-eye");
  }
});

let emailField = document.getElementById("emailField");

emailField.addEventListener("keyup", function () {
  let emailValue = document.getElementById("emailField").value;
  let pErrorEmail = document.querySelector(".error-email");
  let emailPatter =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailValue.match(emailPatter)) {
    pErrorEmail.innerText = "your email is valid";
    pErrorEmail.style.color = "green";
    emailField.style.outline = "none";
    emailField.style.border = "solid 2px green";
  } else {
    pErrorEmail.innerText = "your email is invalid";
    pErrorEmail.style.color = "red";
    emailField.style.outline = "none";
    emailField.style.border = "solid 2px red";
  }
  if (emailValue == "") {
    pErrorEmail.innerHTML = " ";
    emailField.style.border = "solid 2px black";
  }
});






// Cookies
let formElement3 = document.getElementById('registration-form');

formElement.addEventListener('submit', function(e){
    e.preventDefault();
    let checkbox = document.getElementById('save');
    
if (checkbox.checked){
    let usernameValue = document.getElementById('username').value;
    Cookies.set('user_save_username', usernameValue);
}
else{
    Cookies.remove('user_save_username');
}
formElement.submit();

})



// Accept cookies
let savedUserName = Cookies.get('user_save_username');

if (savedUserName){
    document.getElementById('username').value = savedUserName;
    document.getElementById('save').checked = true;
}


if (!localStorage.getItem("cookiesAccepted")) {
  document.getElementById("cookie-banner").style.display = "block";
}
function acceptCookies() {
  localStorage.setItem("cookiesAccepted", true);

  document.getElementById("cookie-banner").style.display = "none";
}

document.getElementById("accept-cookies-btn").addEventListener("click", acceptCookies);

if (!localStorage.getItem("cookiesAccepted")) {
  document.getElementById("cookie-banner").style.display = "block";
} else {
  document.getElementById("cookie-banner").style.display = "none";
}