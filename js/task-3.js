// Отримуємо доступ до інпуту та спана
const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

// Додаємо подію "input" до інпуту
input.addEventListener('input', function() {
    // Отримуємо поточне значення інпуту та очищуємо від пробілів по краях
    const inputValue = input.value.trim();

    // Встановлюємо текст для спана в залежності від значення інпуту
    if (inputValue === '') {
        output.textContent = 'Anonymous';
    } else {
        output.textContent = inputValue;
    }
});