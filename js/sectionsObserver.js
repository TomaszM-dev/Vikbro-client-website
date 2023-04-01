const sectionAll = document.querySelectorAll(".section");

export const sectionObserver = function () {
  const sectionCallback = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting === true) {
      entry.target.classList.remove("hidden");
    }
  };

  const sectionOptions = {
    root: null,
    threshold: 0.1,
  };

  const sectionObserver = new IntersectionObserver(
    sectionCallback,
    sectionOptions
  );

  sectionAll.forEach(function (section) {
    sectionObserver.observe(section);
  });
};
