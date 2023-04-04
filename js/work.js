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
const compositionImage = document.querySelectorAll(".composition__image");

//  query selectors that will be dependent upon choossed project
const headingH2 = document.querySelector(".popup__content-heading");
const contentParagraph0 = document.querySelector(".content__paragraph-box0");
const contentParagraph1 = document.querySelector(".content__paragraph-box1");
const contentParagraph2 = document.querySelector(".content__paragraph-box2");
const contentParagraph3 = document.querySelector(".content__paragraph-box3");
const contentHeadline0 = document.querySelector(".content__headline-box0");
const contentHeadline1 = document.querySelector(".content__headline-box1");
const contentHeadline2 = document.querySelector(".content__headline-box2");
const contentHeadline3 = document.querySelector(".content__headline-box3");
const compositionImage1 = document.querySelector(".image-1");
const compositionImage2 = document.querySelector(".image-2");
const compositionImage3 = document.querySelector(".image-3");

export const workFunction = function () {
  const altana = {
    position: "1",
    heading: "Altana",
    headline: "project altanka",
    paragraph: ` TU BEDZIE ZNAJDOWAL SIE GLOWNY OPIS CO TO ZA PROJEKT ITP ITD,
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,`,
    photo1: "./img/work/altana1.jpeg",
    photo2: "./img/work/altana2.jpeg",
    photo3: "./img/work/altana3.jpeg",
  };

  const dom = {
    position: "2",
    heading: "Dom",
    headline: "project dom",
    paragraph: ` TU BEDZIE ZNAJDOWAL SIE GLOWNY OPIS CO TO ZA PROJEKT ITP ITD,
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,`,
    photo1: "/img/work/dom1.jpeg",
    photo2: "/img/work/dom2.jpeg",
    photo3: "/img/work/dom3.jpeg",
  };

  const garazParking = {
    position: "3",
    heading: "garaz",
    headline: "project garaz",
    paragraph: ` TU BEDZIE ZNAJDOWAL SIE GLOWNY OPIS CO TO ZA PROJEKT ITP ITD,
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,`,
    photo1: "/img/work/garaz1.jpeg",
    photo2: "/img/work/garaz2.jpeg",
    photo3: "/img/work/garaz3.jpeg",
  };
  const domek = {
    position: "4",
    heading: "Domek",
    headline: "project domek",
    paragraph: ` TU BEDZIE ZNAJDOWAL SIE GLOWNY OPIS CO TO ZA PROJEKT ITP ITD,
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,`,
    photo1: "/img/work/garazyk1.jpeg",
    photo2: "/img/work/garazyk2.jpeg",
    photo3: "/img/work/garazyk3.jpeg",
  };
  const taras = {
    position: "5",
    heading: "taras",
    headline: "project taras",
    paragraph: ` TU BEDZIE ZNAJDOWAL SIE GLOWNY OPIS CO TO ZA PROJEKT ITP ITD,
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,`,
    photo1: "/img/work/taras1.jpeg",
    photo2: "/img/work/taras2.jpeg",
    photo3: "/img/work/taras3.jpeg",
  };
  const dom2 = {
    position: "6",
    heading: "Dom2",
    headline: "project dom2",
    paragraph: ` TU BEDZIE ZNAJDOWAL SIE GLOWNY OPIS CO TO ZA PROJEKT ITP ITD,
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,`,
    photo1: "/img/work/hause1.jpeg",
    photo2: "/img/work/hause2.jpeg",
    photo3: "/img/work/hause3.png",
  };

  const projects = [altana, dom, garazParking, domek, taras, dom2];

  let curSlide = 1;
  const maxSlide = 3;
  let currentProject;

  const openPopup = function () {
    popup.classList.add("popup__open");
    popupContent.classList.add("scale__open");

    popupContent.classList.remove("scale__close");
    popup.classList.remove("popup__close");
  };

  itemsContainer.addEventListener("click", function (e) {
    e.preventDefault();
    const clicked = e.target.closest(".item");
    if (!clicked) return;

    currentProject = projects.find(
      (pro) => pro.position === clicked.dataset.value
    );

    if (currentProject.position === clicked.dataset.value) {
      headingH2.textContent = currentProject.heading;
      contentParagraph0.textContent = currentProject.paragraph;
      contentParagraph1.textContent = currentProject.paragraph;
      contentParagraph2.textContent = currentProject.paragraph;
      contentParagraph3.textContent = currentProject.paragraph;
      contentHeadline0.textContent = currentProject.headline;
      contentHeadline1.textContent = currentProject.headline;
      contentHeadline2.textContent = currentProject.headline;
      contentHeadline3.textContent = currentProject.headline;
      compositionImage1.src = currentProject.photo1;
      compositionImage2.src = currentProject.photo2;
      compositionImage3.src = currentProject.photo3;

      openPopup();
    }
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

    compositionImage.forEach((photo) => {
      console.log(photo.getAttribute("src"));
    });

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
