let counterNumber = document.querySelector('#counter-number');
let buttons = document.querySelectorAll('.button');

const getActionTodo = (e) => {
  let action = e.currentTarget.dataset.buttonAction;
  switch (action) {
    case 'decrease': {
      decreaseCounter();
      break;
    }
    case 'increase': {
      increaseCounter();
      break;
    }
    default: {
      resetCounter();
    }
  }
};

const decreaseCounter = () => {
  let currentValue = parseInt(counterNumber.textContent);
  if (currentValue === 0) return;
  counterNumber.innerText = currentValue - 1;
};

const increaseCounter = () => {
  let currentValue = parseInt(counterNumber.textContent);
  counterNumber.innerText = currentValue + 1;
};

const resetCounter = () => {
  counterNumber.innerText = 3;
};

buttons.forEach((button) => {
  button.addEventListener('click', getActionTodo);
});
