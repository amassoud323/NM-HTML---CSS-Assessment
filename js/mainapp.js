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
  hamburger.classList.toggle("active");
}


// == BANNER OWL CAROUSEL ==
// base carousel function
var owl = $(".banner-carousel");

owl.owlCarousel({
  items: 1,
  loop: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false
});

// function to pause autoplay if user is manually scrolling through slides
var resumeTimer;

// stop the autoplay timer when user is manually dragging through slides or using dots to navigate slides
owl.on("translate.owl.carousel drag.owl.carousel", function() {
  owl.trigger("stop.owl.autoplay");
  clearTimeout(resumeTimer);
});

// restart autoplay when user stops manually navigating for 1 second
owl.on("translated.owl.carousel dragged.owl.carousel", function() {
  clearTimeout(resumeTimer);
  resumeTimer = setTimeout(function() {
    owl.trigger("play.owl.autoplay", [5000]);
  }, 1000);
});


// == HEADER SEARCHBAR ANIMATION == 
$("#desktopSearchBtn").on("click", function() {
  // make sure function is only active on medium screen sizes
  if (window.matchMedia("(min-width: 992px) and (max-width: 1260px)").matches) {
    var $buttons = $(".header__button");
    var $search = $("#desktopSearch");

    if ($search.css("display") === "none") {
      $buttons.fadeOut(200, function() {
        $search.fadeIn(200, function() {
          $search.css("display", "inline-block");
          $search.focus();
        });
      });
    } else {
      $search.fadeOut(200, function() {
        $buttons.fadeIn(200);
      });
    }
  }
});

// reset css properties if screen size is outside desired range
$(window).on("resize", function() {
  if (!window.matchMedia("(min-width: 992px) and (max-width: 1260px)").matches) {
    $(".header__button").css("display", "");
    $("#desktopSearch").css("display", "");
  }
});


// == LOGO SCROLLBARS ==
$(".partners-carousel").owlCarousel({
  loop: true,
  dots: false,
  nav: true,
  margin: 75,
  autoWidth: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 5000
});


// == STICKY HEADER ==
let lastScroll = 0;
const header = $("#stickyHeader");

$(window).on("scroll", function() {
  const currentScroll = $(this).scrollTop();

  if (currentScroll > lastScroll && currentScroll > 250) {
    // scrolling up
    header.addClass("hide");
  } else {
    //scrolling down
    header.removeClass("hide");
  }

  lastScroll = currentScroll;
});