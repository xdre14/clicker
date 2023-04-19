(function () {
    const button = document.getElementById('myButton');

// генеруємо випадкове число від 0 до 1
const random = Math.floor(Math.random() * 2);

// якщо випадкове число = 1, то змінюємо стиль кнопки на видимий
if (random === 1) {
  button.style.display = 'block';
} else {
  // інакше змінюємо стиль кнопки на невидимий
  button.style.display = 'none';
}
})();
