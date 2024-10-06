const container = document.querySelector(".draw-container");
const colorMode = document.querySelector(".color-mode-btn");
const eraseMode = document.querySelector(".erase-btn");
const clearBtn = document.querySelector(".clear-btn");
const sizeValue = document.querySelector(".size-value");



const containerSize = 500;
const divNumber= 256;
const gridSize = Math.sqrt(divNumber);
const divSize = containerSize / gridSize;

for (let i= 0; i < divNumber; i++){
  const divs = document.createElement('div');
  divs.classList.add('grid');
  divs.style.height = `${divSize}px`;
  divs.style.width = `${divSize}px`;
  container.appendChild(divs);
}

sizeValue.addEventListener();