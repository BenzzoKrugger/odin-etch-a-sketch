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
// Create Grid
createGrid(16);


// Handle hover
function handleHover(e){
    e.target.classList.add("bg-blue-500")

}

const els = document.querySelectorAll(".element");
console.log(els);

for (const el of els) {
  el.addEventListener("mouseover", handleHover);
  
}

