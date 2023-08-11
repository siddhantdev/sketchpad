const grid = document.querySelector('.grid');
const colorPicker = document.querySelector('#favcolor');

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

let pixels = [];
let border = true;
let rainbow = false;
let n = 8;

function createGrid() {
    let size = 800 / n - 2;
    pixels = [];

    grid.replaceChildren();

    for(let i = 0; i < n * n; ++i) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel')
        pixel.style.flex = `0 1 ${size}px`;
        pixel.style.border = "solid 1px rgba(100, 100, 100, 0.3)";
        pixels.push(pixel);
    }

    pixels.forEach(pixel => pixel.addEventListener('mousedown', fill));
    pixels.forEach(pixel => pixel.addEventListener('mouseover', fill));

    pixels.forEach(pixel => grid.appendChild(pixel));
}
createGrid();

function toggleBorder() {
    border = !border;
    if(border) {
        let size = 800 / n - 2;
        pixels.forEach(pixel => {
            pixel.style.flex = `0 1 ${size}px`;
            pixel.style.border = "solid 1px rgba(100, 100, 100, 0.3)";
        });
    } else {
        let size = 800 / n;
        pixels.forEach(pixel => {
            pixel.style.flex = `0 1 ${size}px`;
            pixel.style.border = "none";
        });
    }
}

function fill(e) {
    if(e.type === 'mouseover' && !mouseDown) return;

    if(rainbow) {
        let r = Math.floor(Math.random() * 255) + 1;
        let g = Math.floor(Math.random() * 255) + 1;
        let b = Math.floor(Math.random() * 255) + 1;
        e.target.style.background = `rgb(${r}, ${g}, ${b})`
    } else {
        const color = colorPicker.value;
        e.target.style.background = color;
    }
}

const clear_btn = document.querySelector('.clear');
clear_btn.addEventListener('click', () => {
    pixels.forEach(pixel => pixel.style.background = "white");
});

const sz_btn = document.querySelector('.size');
sz_btn.addEventListener('click', () => {
    let x = prompt("Enter the side of each side");
    if(x <= 64 && x > 0)
        n = x;
    createGrid();
});

const border_btn = document.querySelector('.border');
border_btn.addEventListener('click', toggleBorder);

const toggle_rainbow = document.querySelector('.rainbow');
toggle_rainbow.addEventListener('click', () => {
    rainbow = !rainbow;
});
