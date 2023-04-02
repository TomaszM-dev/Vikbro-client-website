const itemsContainer = document.querySelector(".items");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close-btn");
const popupContent = document.querySelector(".popup__content");
const composition = document.querySelector(".composition");
const compositionPhoto = document.querySelectorAll(".composition__photo");
const contentStarterBox = document.querySelector(".content__left-box0");
const compositionBtn = document.querySelectorAll(".composition__btn");
const compositionBtnLeft = document.querySelector(".composition__btn-left");
const compositionBtnRight = document.querySelector(".composition__btn-right");
const content = document.querySelectorAll(".content__left");
const compositionBntReturn = document.querySelector(".composition__btn-return");
const compositionContent = document.querySelector(".content__headline");

export const workFunction = function () {
  // pierwszy slide
  let curSlide = 1;
  // max slidow
  const maxSlide = 3;

  // otwarcie popupa
  const initState = function () {
    popup.classList.remove("popup__close");
    popupContent.classList.remove("scale__open");
    popupContent.classList.remove("scale__close");
  };

  itemsContainer.addEventListener("click", function (e) {
    e.preventDefault();

    initState();

    // otwarcie itemu za posrednictwiem klikniecia w btn na worku
    popup.classList.add("popup__open");
    popupContent.classList.add("scale__open");
  });

  // powrot do poczatkowego ustawienia

  const compositionReset = function () {
    curSlide = 1;

    // ustawienia poczatkowe zdjec
    compositionPhoto.forEach((c) => {
      c.classList.remove("composition__photo-height");
      c.classList.remove("composition__display");
      c.classList.add("composition__photo-selection");
    });

    // wywalenie btn-ow
    compositionBtn.forEach((btn) => {
      btn.classList.add("composition__display");
    });

    // wywalenie aktualnego kontentu
    content.forEach((con) => {
      con.classList.add("composition__display");
    });

    // wyswietlenie kontentu poczatkowego
    contentStarterBox.classList.remove("composition__display");
  };

  // next slide
  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 1;
    } else {
      curSlide++;
    }
  };

  // previous slide
  const prevSlide = function () {
    if (curSlide === 1) {
      curSlide = Number(maxSlide);
    } else {
      curSlide--;
    }
  };

  // cala mechanika dzialania
  const compositionSlider = function () {
    compositionPhoto.forEach((con) =>
      con.classList.add("composition__photo-height")
    );

    // aktualne zdjecie
    compositionPhoto.forEach((con) => {
      if (con.classList.contains("composition__display")) {
      } else {
        con.classList.add("composition__display");
      }
    });

    // zmiana zdjecia na nastepne
    document
      .querySelector(`.composition__photo--p${curSlide}`)
      .classList.remove("composition__display");

    // aktualny content
    content.forEach((con) => {
      if (con.classList.contains("composition__display")) {
      } else {
        con.classList.add("composition__display");
        con.classList.remove("composition__photo-height");
      }
    });

    // zmiana kontentu na nastepny
    document
      .querySelector(`.content__left-box${curSlide}`)
      .classList.remove("composition__display");
  };

  //                        event handlery

  // btn left
  compositionBtnLeft.addEventListener("click", function (e) {
    e.preventDefault();
    prevSlide();

    compositionSlider();
  });

  // btn right
  compositionBtnRight.addEventListener("click", function (e) {
    e.preventDefault();
    nextSlide();
    compositionSlider();
  });

  // btn return
  compositionBntReturn.addEventListener("click", function (e) {
    e.preventDefault();
    compositionReset();
  });

  // zamkniecie popupa
  popupClose.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.remove("popup__open");
    popupContent.classList.remove("scale__open");

    popupContent.classList.add("scale__close");
    popup.classList.add("popup__close");

    compositionReset();
  });

  // otwarcie z punktu startowego
  composition.addEventListener("click", function (e) {
    const clicked = e.target.closest(".composition__photo");

    if (!clicked) return;

    curSlide = Number(clicked.dataset.set);

    // 1. DODAC DISPLY NONE DO STARTERA
    contentStarterBox.classList.add("composition__display");

    // 2. ODJAC DISPLAY NON OD WPASOWANEGO DATA SETA
    document
      .querySelector(`.content__left-box${clicked.dataset.set}`)
      .classList.remove("composition__display");

    // 3. WSZYSTKIE KLASY DO WYJEBANIA
    compositionPhoto.forEach((c) =>
      c.classList.remove("composition__photo-selection")
    );

    // 4. KLIKNIETA KLASA + BUTTONY DO ZMIAN SLIDOW
    clicked.classList.add("composition__photo-height");
    compositionBtn.forEach((btn) => {
      btn.classList.remove("composition__display");
    });

    // 5. WSZYSTKIE KLASY OPROCZ AKTYWNEJ DOSTAJA DISPLAY NONE
    compositionPhoto.forEach((c) => {
      if (!c.classList.contains("composition__photo-height")) {
        c.classList.add("composition__display");
      }
    });
  });
};

// to do

/* 
  1. klikajac na dany projekt (item work) bedzie sie wyswietlal do niego adekwatny popup czyli np popup1 === item1

  2. 






*/
