'use strict';
let mobileMenu = document.querySelector(".header_nav");
let burger = document.querySelector(".menu_bar_icon");
let close = document.querySelector(".close_icon");

burger.addEventListener("click", () => {
  mobileMenu.classList.add("gaqroba_gamochena");
  // burger.style.display = "none";

});
close.addEventListener("click", () => {

  mobileMenu.classList.remove("gaqroba_gamochena")

});

// import { accordion as hiFunction, slider as helloFunction } from "./module.js";
// hiFunction();
// helloFunction();




// Sec 1 - Accordion
let accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach(function (element) {
  element.addEventListener("click", function (e) {
    this.classList.toggle("activeAccordion");
  });
});


// Scroll to top
let scrollTop = document.getElementById("upup");
scrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});



// onScroll

let divNavigationStructure = document.getElementById("nav_scroll");

window.onscroll = function () {
  if (window.scrollY > 100) {
    divNavigationStructure.classList.add("scroll");
  } else {
    divNavigationStructure.classList.remove("scroll");
  }
};





// Slider, რომელიც axios/fetch-თან არ მუშაობს

let dataSlider = [
  {
    id: 1,
    imageUrl: "https://lh3.googleusercontent.com/VJYq1ooOgCIDffdclIkC7s6qlP7VOrfqYNHgHvXRcsf8QJmqVaf1xG2QKW2ld95uhr_YvYbHIoNoLu-0C4o7LBRkcM518IMYYV8o1mg=h450-rw",
    title: "Taste of Belgum",
  },

  {
    id: 2,
    imageUrl: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/11/beer-bar-glass-1296x728-header-1296x728.jpg?w=1155&h=1528",
    title: "Taste of Germany",
  },

  {
    id: 3,
    imageUrl: "https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2019/02/Israeli-Beer.jpg?fit=1920%2C1080&ssl=1",
    title: "Taste of Irelnd",
  },

  {
    id: 4,
    title: "Taste of Czech",
    imageUrl: "https://www.datocms-assets.com/75079/1661498789-beercompare-stretch-crop.jpg?w=1600",

  },
];


const sliderContent = document.getElementById("slider_content");
const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");
let sliderIndex = 0;

function createDivTag() {
  let div = document.createElement("div");
  return div;
}

function createImgTag(item) {
  let tagImage = document.createElement("img");
  tagImage.setAttribute("alt", `${item.title}`);
  tagImage.setAttribute("src", `${item.imageUrl}`);


  return tagImage;
}
function createTitle(item) {
  let titleTag = document.createElement("h2");
  titleTag.innerText = `${item.title}`;

  return titleTag;
}
function slide() {
  sliderContent.innerHTML = " ";
  let slideItem = createDivTag();
  let imgTag = createImgTag(dataSlider[sliderIndex]);
  let h2Tag = createTitle(dataSlider[sliderIndex]);

  slideItem.appendChild(imgTag);
  slideItem.appendChild(h2Tag);

  sliderContent.appendChild(slideItem);
}

function arrowLeftClick() {
  if (sliderIndex == 0) {
    sliderIndex = dataSlider.length - 1;
    slide();
    return;
  }
  sliderIndex -= 1;
  slide();
}

function arrowRightClick() {
  if (sliderIndex == dataSlider.length - 1) {
    sliderIndex = 0;
    slide();
    return;
  }
  sliderIndex += 1;
  slide();
}

arrowRight.addEventListener("click", arrowRightClick);
arrowLeft.addEventListener("click", arrowLeftClick);


setInterval(() => {
  arrowRightClick();
}, 2000);

slide();







// Filter + Data.AXIOS

// let result = document.getElementById("result");
// let inputFilter = document.getElementById("filter");
// let listItems = [];

// axios
//   .get("https://api.punkapi.com/v2/beers")
//   .then((responseData) => {
//     responseData.data.forEach((item) => {
// let li = document.createElement('li');


// let pName = document.createElement("p");
//         pName.textContent = `${item.name}`;

//         let pName2 = document.createElement("p");
//         pName2.textContent = `${item.first_brewed}`;

//         let imgUser = document.createElement("img");
//         imgUser.src = `${item.image_url}`;
//         imgUser.classList.add("user-image");

//         filter.style.outline = "none";
//         // li.style.border = "solid 2px red";
//         // li.style.borderRadius = '20px';
//         li.style.justifyContent = 'space-between';

//         li.appendChild(pName);
//         li.appendChild(pName2);
//         li.appendChild(imgUser);

//         listItems.push(li);
//         console.log(listItems);

//         result.appendChild(li);

//     })
//   });

//   function filterData(searchItem) {
//     listItems.forEach((item) => {
//       if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
//         item.classList.remove("hide");
//       } else {
//         item.classList.add("hide");
//       }
//     });
//   }
  
//   inputFilter.addEventListener("keyup", function (event) {
//     filterData(event.target.value);
//   });







// axios გათიშა ასევე ვალიდაციის ველიც და არ აგდებდა ერორებს,
//აქსიოსის გარეშე მუშაობს

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

  // pass
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


  // radio
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

// show/hide pass
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























// cookies ეს მუშაობდა სატესტო რეჟიმში, მაგრამ აქ ვერ ავამუშავე და ერორიც ვერ ვიპოვე სამწუხაროდ
// // COOKIES 

// let formElement = document.getElementById('login');

// formElement.addEventListener('submit', function(e){
//     e.preventDefault();
//     let checkbox = document.getElementById('save');
    
// if (checkbox.checked){
//     let usernameValue = document.getElementById('username').value;
//     Cookies.set('user_save_username', usernameValue);
// }
// else{
//     Cookies.remove('user_save_username');
// }
// formElement.submit();

// })



// let savedUserName = Cookies.get('user_save_username');

// if (savedUserName){
//     document.getElementById('username').value = savedUserName;
//     document.getElementById('save').checked = true;
// }




// LOCALSTORAGE

// let formElement2 = document.getElementById('login');

// formElement2.addEventListener('submit', function(e){
//     e.preventDefault();
//     let checkbox = document.getElementById('save');
    
// if (checkbox.checked){
//     let usernameValue = document.getElementById('username').value;
//     localStorage.setItem('user_save_username', usernameValue);
// }
// else{
//     localStorage.removeItem('user_save_username');
// }
// formElement2.submit();

// })



// let savedUserName2 = localStorage.getItem('user_save_username');

// if (savedUserName2){
//     document.getElementById('username').value = savedUserName2;
//     document.getElementById('save').checked = true;
// }







//VESION 1 ACCEPT COOKIES
// function setCookieExpiration(days) {
//     let  date = new Date();
//     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//     return date.toUTCString();
//   }
//   function setCookie(cookieName, cookieValue, expirationDays) {
//     let  expires = "expires=" + setCookieExpiration(expirationDays);
//     document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
//   }
//   function isCookieAccepted() {
//     return document.cookie.includes("cookieAccepted=true");
//   }
//   function hideCookieBanner() {
//     document.getElementById("cookie-banner").style.display = "none";
//   }
//   function acceptCookies() {
//     setCookie("cookieAccepted", "true", 30); // Set the cookie for 30 days
//     hideCookieBanner();
//   }
//   if (isCookieAccepted()) {
//     hideCookieBanner();
//   }
//   // Add event listener to the accept button
// document.getElementById("accept-cookies-btn").addEventListener("click", acceptCookies);





//VERSION 2 ACCEPT COOKIES

// Check if the user has accepted cookies
// if (!localStorage.getItem("cookiesAccepted")) {
//     // Show the "Accept Cookies" window
//     document.getElementById("cookie-banner").style.display = "block";
//   }
  
//   // Function to handle "Accept" button click
//   function acceptCookies() {
//     // Set the flag in localStorage to remember the user's preference
//     localStorage.setItem("cookiesAccepted", true);
    
//     // Hide the "Accept Cookies" window
//     document.getElementById("cookie-banner").style.display = "none";
//   }
  
//   // Attach event listener to "Accept" button
//   document.getElementById("accept-cookies-btn").addEventListener("click", acceptCookies);

//   if (!localStorage.getItem("cookiesAccepted")) {
//     // Show the "Accept Cookies" window
//     document.getElementById("cookie-banner").style.display = "block";
//   } else {
//     // Hide the "Accept Cookies" window
//     document.getElementById("cookie-banner").style.display = "none";
//   }








