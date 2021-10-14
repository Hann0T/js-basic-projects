let hamburgerButton = document.querySelector('.hamburgerToggleButton');
let hamburgerMenu = document.querySelector('.menu');

const toggleMenu = () => {
  hamburgerMenu.classList.toggle('hidden');
};

hamburgerButton.addEventListener('click', toggleMenu);
