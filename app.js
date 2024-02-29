const sliderLeftArrow = document.getElementsByClassName("slider-move-left")[0];
const sliderRightArrow =
  document.getElementsByClassName("slider-move-right")[0];
const showCaseSlider = document.getElementsByClassName(
  "showcase-slider-photos"
)[0];
let sliderCounter =
  document.getElementsByClassName("slider-counter")[0].childNodes[0];

console.log(sliderCounter.textContent[0]);





sliderRightArrow.addEventListener("click", () => clickedSliderRightArrow());
sliderLeftArrow.addEventListener("click", () => clickedSliderLeftArrow());

let translateXValue = 0;
let sliderCounterValue = 1;
const clickedSliderRightArrow = () => {
  if (translateXValue <= 0 && sliderCounterValue < 3) {
    translateXValue -= 100;
    showCaseSlider.style.transform = `translateX(${translateXValue}%)`;
    sliderCounterValue++;
    sliderCounter.textContent = sliderCounterValue + " / 3";
  }
};

const clickedSliderLeftArrow = () => {
 if(translateXValue < 0){
    translateXValue += 100;
    showCaseSlider.style.transform = `translateX(${translateXValue}%)`;
    sliderCounterValue--;
    sliderCounter.textContent = sliderCounterValue + " / 3";
 }
};
