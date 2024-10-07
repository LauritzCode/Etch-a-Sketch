const container = document.querySelector(".draw-container");
const colorMode = document.querySelector("#color-mode-btn");
const eraserMode = document.querySelector("#erase-btn");
const clearBtn = document.querySelector("#clear-btn");
const sizeValue = document.querySelector(".size-value");
const sizeSlider = document.querySelector("#sizeSlider");
const colorPicker = document.querySelector(".color-picker");
let isPainting = false;
let currentMode = "color";

const createGrid = () => {
    const containerSize = 500;
    const divNumber = sizeSlider.value * sizeSlider.value;
    const gridSize = Math.sqrt(divNumber);
    const divSize = containerSize / gridSize;
  
    for (let i = 0; i < divNumber; i++) {
      const divs = document.createElement('div');
      divs.classList.add('grid');
      divs.style.height = `${divSize}px`;
      divs.style.width = `${divSize}px`;
      container.appendChild(divs);
  
      divs.addEventListener("mousedown", () => {
        isPainting = true;
      });
  
      divs.addEventListener("mousemove", () => {
        if (isPainting) {
          if (currentMode === "color") {
            divs.style.background = `${colorPicker.value}`;
          } else if (currentMode === "erase"){
            divs.style.background = "white";
          }
        }
      });
    }
  };
  

colorPicker.addEventListener("input", (e) => {
})


sizeSlider.addEventListener("input", (e) => {
sizeValue.textContent = `${sizeSlider.value} x ${sizeSlider.value}`
container.innerHTML = "";
createGrid();
}
);


document.addEventListener("mouseup", () => {
        isPainting = false;
    });


const clearAll = () => {
const allDivs = document.querySelectorAll('.grid');
allDivs.forEach((div) => {
    div.style.background = "white";
})
}

clearBtn.addEventListener("click", clearAll);


eraserMode.addEventListener("click", () => {
  currentMode = "erase";
  eraserMode.style.background = "var(--primary-dark)";
  eraserMode.style.color = "var(--primary-light)";
  colorMode.style.background = "var(--primary-light)";
  colorMode.style.color = "var(--primary-dark)";
});

colorMode.addEventListener("click", () => {
  currentMode = "color";
  colorMode.style.background = "var(--primary-dark)";
  colorMode.style.color = "var(--primary-light)";
  eraserMode.style.background = "var(--primary-light)";
  eraserMode.style.color = "var(--primary-dark)";
});



window.onload = createGrid;