//  COUNTER FUNCTION

const numbers = document.querySelectorAll(".boxes__numbers");
const containerGrid1 = document.querySelector(".boxes");

export const counterFunction = function () {
  const realizationCallBack = function (entries) {
    entries.forEach((entrie) => {
      const isVisible = entrie.isIntersecting;

      // IF IS INTERSECTING VISIBLE THEN  START COUNTER FUNCTION

      if (isVisible === true) {
        function animateValue(obj, start, end, duration) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
        numbers.forEach((number) => {
          let obj = number;
          const finishedValue = number.dataset.value;

          animateValue(obj, 0, finishedValue, 700);
        });

        realizationObserver.unobserve(containerGrid1);
      }
    });
  };
  const realizationOptions = {
    root: null,
    threshold: 0.8,
  };

  const realizationObserver = new IntersectionObserver(
    realizationCallBack,
    realizationOptions
  );

  realizationObserver.observe(containerGrid1);
};
