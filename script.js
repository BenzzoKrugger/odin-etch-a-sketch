const container = document.querySelector("#grid-container");

function generateGrid(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      let element = document.createElement("div");
      let elementSize = 800 / num;

      element.classList.add("element", "flex-wrap");
      element.style.width = elementSize + "px";
      element.style.height = elementSize + "px";

      container.appendChild(element);
    }
  }

  const els = document.querySelectorAll(".element");

  for (const el of els) {
    el.addEventListener("mouseover", (e) => {
      e.target.classList.add("bg-blue-500");
    });
  }
}

function clearGrid() {
  container.innerHTML = "";
}

// Create Grid
generateGrid(16);

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", resetGrid);

function resetGrid(e) {
  gridSize = parseInt(prompt("How big grid do you want?"));
  if (gridSize < 1 || gridSize > 100) {
    alert("Grid should be in interval 1-100");
  } else {
    clearGrid();
    generateGrid(gridSize);
  }
}
