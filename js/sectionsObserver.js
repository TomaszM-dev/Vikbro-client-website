const sectionAll = document.querySelectorAll(".section");
const navbarLinks = document.querySelectorAll(".navbar__link");

export const sectionObserver = function () {
  const sectionCallback = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting === true) {
      entry.target.classList.remove("hidden");

      navbarLinks.forEach((link) => {
        if (`#${entry.target.id}` === link.getAttribute("href")) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  };

  const sectionOptions = {
    root: null,
    threshold: 0.9,
  };

  const sectionObserver = new IntersectionObserver(
    sectionCallback,
    sectionOptions
  );

  sectionAll.forEach(function (section) {
    sectionObserver.observe(section);
  });
};
