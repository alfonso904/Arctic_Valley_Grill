/* jQuery for the navigation animation */

var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });


  var $bannerButton = $("#banner-button");
  var $banner = $(".banner");
  $bannerButton.on("click", function(e) {
    $banner.addClass("none");
    $bannerButton.addClass("none");
  });

  /* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".navbar-menu");
    let getSidebarUL = document.querySelector(".side-nav ul");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");

    if (toggleNavStatus === false) {

         getSidebarLinks.forEach((item, index)=>{
          console.log(item);
          item.style.opacity = "1";
         });
        getSidebar.style.width = "60%";

        toggleNavStatus = true;
    } 

    else if (toggleNavStatus === true) {

         getSidebarLinks.forEach((item, index)=>{
          item.style.opacity = "0";
          item.style.transitionDelay = "0s";
         });
        getSidebar.style.width = "0";

        toggleNavStatus = false;
    }
};
