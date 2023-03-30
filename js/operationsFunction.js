const tabContainer = document.querySelector(".operations__tab-container");
const tabContent = document.querySelectorAll(".operations__content");
const operations = document.querySelector(".operations");
const tabs = document.querySelectorAll(".operations__tab");

export const operationsFunction = function () {
  tabContainer.addEventListener("click", function (e) {
    e.preventDefault();
    const clicked = e.target.closest(".operations__tab");

    const trans = e.target.parentElement.parentElement.children;
    console.log(trans[clicked.dataset.tab]);
    console.log(clicked.dataset.tab);
    if (!clicked) return;

    tabs.forEach((t) => {
      t.classList.remove("operations__tab-active");
    });
    clicked.classList.add("operations__tab-active");

    tabContent.forEach((t) => {
      console.log(t);

      t.classList.remove("operations__content--active");
      document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add("operations__content--active");
    });
  });

  const operationsCallback = function (entries) {
    const [entry] = entries;

    if (entry.isIntersecting === true) {
      entry.target.classList.remove("operations-hidden");
    }
  };

  const operationsOptions = {
    root: null,
    threshold: 0.1,
  };

  const operationsObserver = new IntersectionObserver(
    operationsCallback,
    operationsOptions
  );

  operationsObserver.observe(operations);
};
