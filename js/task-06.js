const input = document.querySelector('#validation-input');
const dataLength = Number(input.getAttribute('data-length'));

function onInputBlur(event) {
  if (event.currentTarget.value.length === dataLength) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}

function onInputEnter() {
  input.classList.remove('valid');
  input.classList.remove('invalid');
}

input.addEventListener('blur', onInputBlur);
input.addEventListener('input', onInputEnter);
