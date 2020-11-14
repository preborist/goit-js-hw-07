let counterValue = 0;

const ref = {
  buttonDecrement: document.querySelector('[data-action="decrement"]'),
  buttonIncrement: document.querySelector('[data-action="increment"]'),
  htmlValue: document.querySelector('#value'),
}

function render() {
  ref.htmlValue.textContent = counterValue;
}
function decrement() {
  counterValue -= 1;
  render();
}
function increment() {
  counterValue += 1;
  render();
}

ref.buttonDecrement.addEventListener('click', decrement);
ref.buttonIncrement.addEventListener('click', increment);