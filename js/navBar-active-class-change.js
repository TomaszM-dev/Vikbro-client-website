"use strict";

const navLinks = document.querySelector(".links");
const navBar = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".link");
const display = document.querySelector(".display");
const btnWork = document.querySelector(".btn-work");

export const navBarFunctions = function () {
  navBar.addEventListener("click", function (e) {
    e.preventDefault();
    const clicked = e.target.closest(".link");
    if (!clicked) return;

    const linkHash = clicked.getAttribute("href");

    console.log(linkHash);
    document
      .querySelector(`${linkHash}`)
      .scrollIntoView({ block: "center", behavior: "smooth" });

    navLink.forEach((t) => {
      t.classList.remove("active");
    });

    clicked.classList.add("active");
  });

  // NAVBAR FROM TRANSPARENT TO BG ON SCROLL
  btnWork.addEventListener("click", function (e) {
    e.preventDefault();

    console.log(work);
    work.scrollIntoView({ block: "end", behavior: "smooth" });
  });

  let scrolled = false;

  window.onscroll = function () {
    if (window.pageYOffset > 110) {
      navBar.classList.remove("top");
    } else {
      navBar.classList.add("top");
      scrolled = false;
    }
  };
};
