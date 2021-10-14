const background = document.querySelector('.center');
const indicator = document.querySelector('#color');
const buttonFlipper = document.querySelector('#colorFlipper');
const buttonChangeColorFormat = document.querySelector('#changeColorFormat');

let state = {
  regularColorFormat: true,
};

let regularColors = ['red', 'blue', 'green', 'yellow'];
let hexColors = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

buttonFlipper.addEventListener('click', () => {
  if (state.regularColorFormat) {
    changeRegularColor();
    return;
  }
  changeColor();
});

buttonChangeColorFormat.addEventListener('click', () => {
  state.regularColorFormat = !state.regularColorFormat;
  buttonChangeColorFormat.classList.toggle('title--active');
});

const changeRegularColor = () => {
  let color = getRandomColor();
  setColorsInHTML(color);
};

const changeColor = () => {
  let color = getRandomHexColor();
  setColorsInHTML(color);
};

const setColorsInHTML = (color) => {
  indicator.style.color = color;
  indicator.innerText = color;
  background.style.backgroundColor = color;
  buttonFlipper.style.backgroundColor = color;
};

const getRandomColor = () => {
  let randomNumber = getRandomNumber(0, regularColors.length - 1);
  return regularColors[randomNumber];
};

const getRandomHexColor = () => {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexColors[getRandomNumber(0, hexColors.length - 1)];
  }
  return color;
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
