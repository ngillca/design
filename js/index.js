/* DOM elements */
const nav = document.querySelector(".nav");
const ham = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const faders = document.querySelectorAll(".fade-in");
const fadeHeader = document.querySelectorAll(".fade-in-header");
const fadeHeader2 = document.querySelectorAll(".fade-in-header2");
const scrollText = document.querySelector("#scroll-text");
const scrollText2 = document.querySelector("#scroll-text2");
// const sliders = document.querySelectorAll(".slide-in");
// const massText = document.querySelector(".mass-text");
let lastScrollY = window.scrollY;
// massText.innerText = "";
let text = "";
let scrollTextAppend = "";

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
for (let i = 0; i < 10; i++) {
  text += "imagine. create. repeat. ";
}
// massText.innerText = text;

for (let i = 0; i < 10; i++) {
  scrollTextAppend += "imagine. create. repeat. ";
}
scrollText.innerText = scrollTextAppend;
scrollText2.innerText = scrollTextAppend;

/** Scroll animation */
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -50px -0px",
};
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

const appearOptions2 = {
  threshold: 1,
  rootMargin: "0px 0px 0px 0px",
};

const appearOptions3 = {
  threshold: 0,
};
const appearOnScroll2 = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions2);

fadeHeader.forEach((fader) => {
  appearOnScroll2.observe(fader);
});

const appearOnScroll3 = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions3);

fadeHeader2.forEach((fader) => {
  appearOnScroll3.observe(fader);
});

// sliders.forEach((slider) => {
//   appearOnScroll.observe(slider);
// });
