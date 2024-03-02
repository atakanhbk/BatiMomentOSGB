const leftSlider = document.getElementsByClassName("left-slider")[0];
const rightSlider = document.getElementsByClassName("right-slider")[0];
const sliderPhoto = document.getElementsByClassName("slider-photo")[0];

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

leftSlider.addEventListener("click", clickedLeftArrow);
rightSlider.addEventListener("click", clickedRightArrow);
