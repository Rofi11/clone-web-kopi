// for toggle menu
const toggleMenu = () => {
  const menuMobile = document.querySelector(".body-navbar-menu-mobile");
  if (menuMobile.style.display === "block") {
    menuMobile.style.display = "none";
  } else {
    menuMobile.style.display = "block";
  }
};

// for hidden if width is't for mobile again
const noneMenuMobile = () => {
  const menuMobile = document.querySelector(".body-navbar-menu-mobile");
  if (window.innerWidth > 778) {
    menuMobile.style.display = "none";
  }
};

window.addEventListener("resize", noneMenuMobile);
