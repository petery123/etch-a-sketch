const container = document.querySelector(".container");
const line = document.createElement("div");
line.classList.add("line")

for (i = 0; i < 16; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    line.appendChild(box);
}

for (i = 0; i < 16; i++){
    container.appendChild(line.cloneNode(true));
}

container.addEventListener('mouseover', handleMouseOver);

function handleMouseOver(event){
    console.log(event.target.classList.add("changeBC"));
}