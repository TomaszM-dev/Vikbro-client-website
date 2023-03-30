const itemsContainer = document.querySelector(".items");

export const workFunction = function () {
  itemsContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".item");
    console.log(clicked);
  });
};
