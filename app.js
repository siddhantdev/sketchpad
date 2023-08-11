const grid = document.querySelector('.grid');

let brush = "black";

let n = 8;
let size = 800/n - 2;
let pixels = [];

let mouseDown = false;

document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

for(let i = 0; i < n * n; ++i) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel')
    pixel.style.flex = `0 1 ${size}px`;
    pixels.push(pixel);
}

pixels.forEach(pixel => grid.appendChild(pixel));

pixels.forEach(pixel => pixel.addEventListener('mousedown', fill));
pixels.forEach(pixel => pixel.addEventListener('mouseover', fill));

function fill(e) {
    if(e.type === 'mouseover' && !mouseDown) return;

    e.target.style.background = brush;
}

const erase_btn = document.querySelector('.eraser');
erase_btn.addEventListener('click', () => {
    brush = "white";
});

const reset_btn = document.querySelector('.reset');
reset_btn.addEventListener('click', () => {
    brush = "black";
});

const clear_btn = document.querySelector('.clear');
clear_btn.addEventListener('click', () => {
    pixels.forEach(pixel => pixel.style.background = "white");
});
