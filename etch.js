const container = document.querySelector(".container");
const line = document.createElement("div");
line.classList.add("line")

const SIDES = 700;
let size = 100;
let boxSide = SIDES / size;

for (i = 0; i < size; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    box.setAttribute("style", `width: ${boxSide}px; height: ${boxSide}px`)
    line.appendChild(box);
}

for (i = 0; i < size; i++){
    container.appendChild(line.cloneNode(true));
}

container.addEventListener('mouseover', handleMouseOver);

function handleMouseOver(event){
    event.target.classList.add("changeBC");
}