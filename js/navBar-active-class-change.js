"use strict";

const navBar = document.querySelector(".navbar");
const navLink = document.querySelectorAll("navbar__link");
const btnWork = document.querySelector(".btn-main");

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
      navBar.classList.remove("navbar__top");
    } else {
      navBar.classList.add("navbar__top");
      scrolled = false;
    }
  };
};
