// THIS IS FOR TOGGLE BUTTON IN MOBILE VERSION FOR NAVIGATION

$(document).ready(function () {
  $("#theSearchLink").click(function () {
    $(".nav-search").toggle();
  });
});
$(document).ready(function () {
  $("#theLinksHoverMobile").click(function () {
    $(".nav-drop-down-mobile").toggle();
  });
});

// THIS IS FOR THE BLUR EFFECT WHE TOGGLE MOBILE VERSION BUTTON FOR MENU
function openMenu() {
  document.getElementById("theMobileNavLink").style.display = "block";
  document.getElementById("windowEffect").classList.add("mobile-effect");
}

function closeMenu() {
  document.getElementById("theMobileNavLink").style.display = "none";
  document.getElementById("windowEffect").classList.remove("mobile-effect");
}

// THIS IS FOR STICKY NAGIGATION. AUTOMATIC HIDE WHEN SCROLL
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("theNavigation").style.top = "0";
  } else {
    document.getElementById("theNavigation").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

// DEPARTMENT DROP DOWNS
let office = document.querySelectorAll(".office-btn").length;
for (var i = 0; i < office; i++){
  document.querySelectorAll(".office-btn")[i].addEventListener("click", yawa);
}
function yawa() {
  let tuf = this.innerHTML;
  switch (tuf) {
    case "Department of External Affairs":
      document.getElementById("yawa1").classList.toggle("piste");
      $(".one").slideToggle("slow");
      break;
  
    default:
      document.getElementById("yawa2").classList.toggle("piste");
      $(".two").slideToggle("slow");
      break;
  }
}

// ADDED COMPONENTS FOR BETTER DEBUGGING
$("#navigation").load("../components/Navigation.html");
$("#footer").load("../components/Footer.html");
$("#imgCarousel").load("../components/ImgCarousel.html");

