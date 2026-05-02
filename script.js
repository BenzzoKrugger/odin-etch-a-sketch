const container = document.querySelector("#grid-container");

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      let element = document.createElement("div");
      let elementSize = 800 / num;

      element.classList.add("element", "flex-wrap", `size-[${elementSize}px]`);

      container.appendChild(element);
    }
  }
}

const element = document.querySelectorAll(".element");

element.addEventListener("mouseenter", () => console.log("XXX"));

createGrid(16);
