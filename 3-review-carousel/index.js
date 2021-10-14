let controllerPrev = document.querySelector('.controller-prev');
let controllerNext = document.querySelector('.controller-next');
let carouselItems = document.querySelectorAll('.carousel__item');
let surpriseButton = document.querySelector('.surprise-button');

let currentItem = 0;

const nextCarouselItem = () => {
  if (currentItem >= carouselItems.length - 1) return setCarouselToPosition(0);
  currentItem += 1;
  setCarouselToPosition(currentItem);
};

const prevCarouselItem = () => {
  if (currentItem <= 0) return setCarouselToPosition(carouselItems.length - 1);
  currentItem -= 1;
  setCarouselToPosition(currentItem);
};

const randomItem = () => {
  let randomNumber = getRandomNumber(0, carouselItems.length - 1);
  setCarouselToPosition(randomNumber);
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setCarouselToPosition = (position) => {
  carouselItems.forEach((item) => item.classList.remove('active'));
  carouselItems[position].classList.add('active');
  currentItem = position;
};

controllerPrev.addEventListener('click', prevCarouselItem);

controllerNext.addEventListener('click', nextCarouselItem);

surpriseButton.addEventListener('click', randomItem);
