function toggle_click() {
  var menu_container = document.querySelector(".navbar-container");
  menu_container.computedStyleMap.display = "block";
  document.body.classList.add("content-hidden");
  document.querySelector(".drawer").style.display = "block";
  document.querySelector(".drawer").classList.add("open");
  document.querySelector(".drawer").classList.remove("close");
}
function closeMenu() {
  document.body.classList.remove("content-hidden");
  document.querySelector(".drawer").style.display = "none";
  document.querySelector(".drawer").classList.remove("open");
  document.querySelector(".drawer").classList.add("close");
}
