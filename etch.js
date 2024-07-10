const container = document.querySelector(".container");
const column = document.createElement("div");
column.classList.add("column")

const setSizeBtn = document.querySelector("#setSizeBtn");

const CONTAINER_LENGTH = 700;
let size = 16;
let boxLength = CONTAINER_LENGTH / size;

let color = getRandomColor();

container.addEventListener('mouseover', handleMouseOver);
setSizeBtn.addEventListener('click', handleBtnClick);

function setGrid(){
    for (i = 0; i < size; i++){
        const box = document.createElement("div");
        box.classList.add("box");
        box.setAttribute("style", `width: ${boxLength}px; height: ${boxLength}px`)
        column.appendChild(box);
    }
    
    for (i = 0; i < size; i++){
        container.appendChild(column.cloneNode(true));
    }
}

function handleMouseOver(event){
    if (event.target.className === "container") {
        return
    }

    event.target.style.backgroundColor = color;
    color = getRandomColor();
}

function handleBtnClick(){
    let entry = +(prompt("Enter number of rows you want. MAX of 100!"));
    if (entry === null){
        return;
    }
    if (entry > 100 || entry < 1 || isNaN(entry)){
        alert("INVALID ENTRY!");
        return;
    }
    size = entry;
    clearContainerLine();
    setGrid();
}

function clearContainerLine(){
    container.querySelectorAll(".column").forEach(element => element.remove());
    column.querySelectorAll(".box").forEach(element => element.remove());
    boxLength = CONTAINER_LENGTH / size;
}

function getRandomColor() {
    const randomNum = Math.floor(Math.random() * 16777215);
    const hexString = randomNum.toString(16).padStart(6, '0');
    return `#${hexString}`;
}

setGrid();