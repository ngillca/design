/* DOM elements */
const nav = document.querySelector(".nav");
const ham = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const massText = document.querySelector(".mass-text");

massText.innerText = "";
let text = "";

/** Hide navbar onScroll up */
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
  } else {
    nav.classList.remove("nav--hidden");
  }

  lastScrollY = window.scrollY;
});

/** Hamburger menu show links */
ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  navMenu.classList.toggle("active");
});

/** Show nav li a links */
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    ham.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

/** Dynamically add mass text */
for (let i = 0; i < 100; i++) {
  text += "imagine. create. repeat. ";
}
massText.innerText = text;
