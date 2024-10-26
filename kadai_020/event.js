'use strict';

const targetBtn = document.getElementById('btn');
const text = document.getElementById('text');

targetBtn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
});
