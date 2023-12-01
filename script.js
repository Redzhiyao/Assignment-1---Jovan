const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => { //if button is pressed, open up menu
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => { //if X button is pressed, close the menu
  overlay.classList.remove("overlay--active");
});