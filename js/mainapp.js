// == COOKIES ==

var modal = document.getElementById("cookies");
var btn = document.getElementById("manageCookies");
var accept = document.getElementById("close");

// if user has already accepted cookies, don't display if yes
if (localStorage.getItem("cookieConsent") === "true") {
  modal.style.display = "none";
} else {
  modal.style.display = "flex";
}

// open modal if user clicks manage consent button
btn.onclick = function() {
  modal.style.display = "flex";
}

// save and close the modal if user accepts
accept.onclick = function() {
  localStorage.setItem("cookieConsent", "true");
  modal.style.display = "none";
}

