const grid = document.querySelector('.grid');

let brush = "black";

let n = 8;
let size = 800/n - 2;
let pixels = [];

for(let i = 0; i < n * n; ++i) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel')
    pixel.style.flex = `0 1 ${size}px`;
    pixels.push(pixel);
}

pixels.forEach(pixel => grid.appendChild(pixel));

pixels.forEach(pixel => pixel.addEventListener('mouseover', () => {
    pixel.style.background = brush;
}))

const erase_btn = document.querySelector('.eraser');
erase_btn.addEventListener('click', () => {
    brush = "white";
});

const clear_btn = document.querySelector('.clear');
clear_btn.addEventListener('click', () => {
    pixels.forEach(pixel => pixel.style.background = "white");
});
