const leftSlider = document.getElementsByClassName("left-slider")[0];
const rightSlider = document.getElementsByClassName("right-slider")[0];
const sliderPhoto = document.getElementsByClassName("slider-photo")[0];
const header = document.querySelector("header");

const menuItems = document.querySelectorAll(".page");

document.addEventListener("DOMContentLoaded", function () {
  var currentPage = window.location.href;

  menuItems.forEach(function (link) {
    if (link.href === currentPage) {
      link.style.color = "#00ccff";
    }
  });
});
// aria-current="page"

let currentSlide = 0;

const imagesUrl = [
  "https://eforosgb.com/wp-content/uploads/2022/02/Is-guvenligi-Uzmani-copy.jpg",
  "https://www.tamekipman.com/wp-content/uploads/2022/06/mobil-yatay-yas%CC%A7am-hatti.jpeg",
  "https://sbf.bingol.edu.tr/media/1411/is-guvenligi-sanal-santiye.png",
];

const clickedLeftArrow = () => {
  currentSlide = (currentSlide - 1 + imagesUrl.length) % imagesUrl.length;
  sliderPhoto.style.backgroundImage = `url("${imagesUrl[currentSlide]}")`;
};

const clickedRightArrow = () => {
  currentSlide = (currentSlide + 1) % imagesUrl.length;
  sliderPhoto.style.backgroundImage = `url("${imagesUrl[currentSlide]}")`;
};

const moveSliderAutomatic = () => {
  setInterval(() => {
    clickedRightArrow();
  }, 7000);
};

moveSliderAutomatic();
leftSlider.addEventListener("click", clickedLeftArrow);
rightSlider.addEventListener("click", clickedRightArrow);

const changeableTitle = document.getElementsByClassName("changeable-title")[0];

const changeableTitleList = [
  "Yürümenin",
  "Başarmanın",
  "İnanmanın",
  "Gelişmenin",
];
let changeableTitleListCounter = 0;

const changeTitleFunction = (callback) => {
  setInterval(() => {
    callback(decraseOpacity(changeChangeableTitle));
  }, 4000);
};

const decraseOpacity = (callback) => {
  changeableTitle.style.opacity = 0;
  changeableTitle.style.transform = "translateY(50px)";
  setTimeout(() => {
    if (typeof callback === "function") {
      callback(changeChangeableTitle);
    }
  }, 500);
};

const changeChangeableTitle = () => {
  changeableTitleListCounter++;

  if (changeableTitleListCounter >= changeableTitleList.length) {
    changeableTitleListCounter = 0;
  }
  changeableTitle.textContent = `${changeableTitleList[changeableTitleListCounter]}`;
  changeableTitle.style.transform = "translateY(0px)";
  changeableTitle.style.opacity = 1;
};
changeTitleFunction(decraseOpacity);

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  if (scrollPosition > 150) {
    header.classList.add("sticky-menu");
  } else {
    header.classList.remove("sticky-menu");
  }
});

var companyLogos = document.getElementsByClassName("company-logos")[0];
var images = document.querySelectorAll(".company-logos img");

// Görsellerin toplam sayısını al
var totalImages = images.length;

// Hareket hızı (pixel/saniye)
var speed = 1;

// Başlangıç pozisyonu
var position = 0;

// Hareket fonksiyonu
function moveImages() {
  position += speed;
  images.forEach(function(image, index) {
    companyLogos.style.transform = `translateX(${-position}px)`;
    if (position > image.offsetWidth * (index + 1.1)) {
      position = 0;
      var firstImage = document.querySelector(".company-logos img:first-child");
      firstImage.remove();
      companyLogos.appendChild(firstImage);
    }
  });
  requestAnimationFrame(moveImages);
}

moveImages();