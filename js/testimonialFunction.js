const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dots");
const slides = document.querySelectorAll(".slide");
const maxSlide = slides.length;
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const info = document.querySelector(".info");

export const testimonialFunction = function () {
  let curSlide = 0;

  const goToSlide = function (curSlide) {
    slides.forEach(function (slide, i) {
      slide.style.transform = `translateX(${(i - curSlide) * 100}%)`;
    });
  };

  goToSlide(0);

  const prevSlide = function () {
    if (maxSlide - 1 === curSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
  };

  const nextSlide = function () {
    if (0 === curSlide) {
      curSlide = 2;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
  };

  btnRight.addEventListener("click", prevSlide);
  btnLeft.addEventListener("click", nextSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      prevSlide();
    } else if (e.key === "ArrowLeft") {
      nextSlide();
    } else {
      return;
    }
  });

  const createDots = function () {
    slides.forEach((slide, i) => {
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class=dot  data-slide=${i}></button>`
      );
    });
  };

  const activeDot = function (slide) {
    document.querySelectorAll(".dot").forEach((dot) => {
      dot.classList.remove("dot-active");

      document
        .querySelector(`.dot[data-slide="${slide}"]`)
        .classList.add("dot-active");
    });
  };

  createDots();
  activeDot(0);

  dotsContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dot")) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activeDot(slide);
    }
  });
};
