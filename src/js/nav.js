//  humburger menu
const Menu = document.querySelector(".menu");
const Burger = document.querySelector(".menu-burger");
var bool = true;

Burger.addEventListener("click", () => {
  if (bool == true) {
    Burger.classList.add("open");
    Menu.style.right = 0;
    bool = false;
  } else {
    Burger.classList.remove("open");
    Menu.style.right = "-100%";
    bool = true;
  }
});
//
const dropdownContainer = document.getElementById("dropdown-container");
const menuButton = document.getElementById("menu-button");
const dropdownMenu = document.getElementById("dropdown-menu");

dropdownContainer.addEventListener("mouseenter", () => {
  menuButton.setAttribute("aria-expanded", "true");
  dropdownMenu.classList.remove("hidden");
});

dropdownContainer.addEventListener("mouseleave", () => {
  menuButton.setAttribute("aria-expanded", "false");
  dropdownMenu.classList.add("hidden");
});
