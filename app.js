const grid = document.querySelector('.grid');

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
