const refs = {
  inputQuantity: document.querySelector('input'),
  createBtn: document.querySelector('[data-action="render"]'),
  clearBtn: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', divsArray);
refs.clearBtn.addEventListener('click', destroyBoxes);

function divsArray() {
  createBoxes(refs.inputQuantity.value);
}

function rundomColorGenerator() {
  let rgbColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${
    Math.random() * 256
  })`;
  return rgbColor;
}
function createBoxes(amount) {
  const divs = [];
  let boxWidth = 30;
  let boxHeight = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');

    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;
    box.style.backgroundColor = rundomColorGenerator();
    divs.push(box);
    boxWidth += 10;
    boxHeight += 10;
  }
  console.log(...divs);

  refs.boxes.append(...divs);
}

function destroyBoxes() {
  refs.boxes.textContent = '';
}
