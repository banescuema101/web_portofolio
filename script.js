function toggleMenu(){
  const icon = document.querySelector(".hamburger-icon");
  const menu = document.querySelector(".menu-links");

  icon.classList.toggle("open");
  // If force is not given, "toggles" token,
  // removing it if it's present and adding it as a class
  // if it's not present.
  menu.classList.toggle("open");
}