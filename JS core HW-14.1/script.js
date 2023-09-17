/*
Завдання 1.

Необхідно реалізувати наступний функціонал як на відео input, а саме:

при кліку кнопку Move текст з лівого інпута переноситься в правий, причому якщо в лівому інпуті нічого немає, текст в правому не змінюється
при втраті фокусу в нижньому інпуті текст має переноситися в його ж placeholder, причому якщо в інпуті нічого немає, текст в placeholder не змінюється
------------------------------------------------------------------------------------------
*/

rightInput = document.getElementById('rightInput');
const leftInput = document.getElementById('leftInput');
const moveButton = document.getElementById('moveButton');

moveButton.addEventListener('click', function () {
    rightInput.value = leftInput.value !== '' ? leftInput.value : rightInput.value;
});


const bottomInput = document.getElementById('bottomInput');
bottomInput.addEventListener('blur', function () {
    const value = bottomInput.value;
    if (value !== '') {
        bottomInput.placeholder = value;
        bottomInput.value = '';
    }
});











