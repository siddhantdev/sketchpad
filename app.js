const grid = document.querySelector('.grid');
const colorPicker = document.querySelector('#favcolor');

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

let pixels = [];

function createGrid(n = 8) {
    let size = 800/n - 2;
    pixels = [];

    grid.replaceChildren();

    for(let i = 0; i < n * n; ++i) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel')
        pixel.style.flex = `0 1 ${size}px`;
        pixels.push(pixel);
    }

    pixels.forEach(pixel => pixel.addEventListener('mousedown', fill));
    pixels.forEach(pixel => pixel.addEventListener('mouseover', fill));

    pixels.forEach(pixel => grid.appendChild(pixel));
}
createGrid(8);

function fill(e) {
    if(e.type === 'mouseover' && !mouseDown) return;

    const color = colorPicker.value;
    e.target.style.background = color;
}

const clear_btn = document.querySelector('.clear');
clear_btn.addEventListener('click', () => {
    pixels.forEach(pixel => pixel.style.background = "white");
});

const sz_btn = document.querySelector('.size');
sz_btn.addEventListener('click', () => {
    let n = prompt("Enter the side of each side");
    createGrid(n);
});
