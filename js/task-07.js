const inputControlRef = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function onInputRange() {
text.style.fontSize = `${Number(inputControlRef.value)}px`;
}

inputControlRef.addEventListener('input', onInputRange);
