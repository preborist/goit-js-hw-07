const refs = {
  input: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output'),
}

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
  if (event.currentTarget.value.length === 0) {
    refs.nameLabel.textContent = 'незнакомец';
  }
}

refs.input.addEventListener('input', onInputChange);
