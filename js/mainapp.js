// == COOKIES ==

var cookies = document.getElementById("cookies");
var cookiesBtn = document.getElementById("manageCookies");
var cookiesAccept = document.getElementById("close");

// if user has already accepted cookies, don't display if yes
if (localStorage.getItem("cookieConsent") === "true") {
  cookies.style.display = "none";
} else {
  cookies.style.display = "flex";
}

// open cookies if user clicks manage consent button
cookiesBtn.onclick = function() {
  cookies.style.display = "flex";
}

// save and close the cookies if user accepts
cookiesAccept.onclick = function() {
  localStorage.setItem("cookieConsent", "true");
  cookies.style.display = "none";
}


// == SIDEBAR ==
var sidebar = document.getElementById("sidebar");
var hamburger = document.getElementById("hamburger");
var main = document.getElementById("main");

// open sidebar if user clicks hamburger button
hamburger.onclick = function() {
  main.classList.toggle("active");
  sidebar.classList.toggle("active");
}

