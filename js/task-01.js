const categoriesEl = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesEl.length} категории.`);

categoriesEl.forEach(category => {
  const title = category.querySelector('h2');
  const elQuantity = category.querySelectorAll('li');
  console.log(`Категория: ${title.textContent}`);
  console.log(`Количество элементов: ${elQuantity.length}`);
});
