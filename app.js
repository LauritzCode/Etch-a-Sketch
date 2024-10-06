const container = document.querySelector(".draw-container");
const colorMode = document.querySelector(".color-mode-btn");
const eraseMode = document.querySelector(".erase-btn");
const clearBtn = document.querySelector(".clear-btn");
const sizeValue = document.querySelector(".size-value");
const sizeSlider = document.querySelector("#sizeSlider");
const colorPicker = document.querySelector(".color-picker");

const createGrid = () => {
const containerSize = 500;
const divNumber= sizeSlider.value * sizeSlider.value;
const gridSize = Math.sqrt(divNumber);
const divSize = containerSize / gridSize;

for (let i= 0; i < divNumber; i++){
  const divs = document.createElement('div');
  divs.classList.add('grid');
  divs.style.height = `${divSize}px`;
  divs.style.width = `${divSize}px`;
  container.appendChild(divs);
}
}

colorPicker.addEventListener("input", (e) => {
})


sizeSlider.addEventListener("input", (e) => {
sizeValue.textContent = `${sizeSlider.value} x ${sizeSlider.value}`
container.innerHTML = "";
createGrid();
}
);

document.querySelectorAll('.grid').forEach((div) => {
    div.addEventListener("mousedown", () => {
        isPainting = true;
    });
});

document.querySelectorAll('.grid').forEach((div) => {
    div.addEventListener("mousemove", () => {
    if (isPainting) {
    div.style.background = `${colorPicker.value}`
    }
    });
});

document.addEventListener("mouseup", () => {
        isPainting = false;
    });