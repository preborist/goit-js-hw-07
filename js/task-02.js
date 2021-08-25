const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = ingredients.reduce((list, el) => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = el;
  list.push(ingredientEl);
  return list;
}, []);

const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.append(...listEl);
