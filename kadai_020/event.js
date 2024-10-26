'use strict';

const targetBtn = document.getElementById('btn');

targetBtn.addEventListener('click', () => {
    document.getElementById('text').textContent = 'ボタンをクリックしました';
});