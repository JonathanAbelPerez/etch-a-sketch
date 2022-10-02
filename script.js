const container = document.querySelector('#container');

let gridSize = 16;

function createGrid() {
    for (i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div')
        div.classList.add("grid-div")
        div.addEventListener('mouseover', randomColor)
        div.addEventListener('mousedown', randomColor)
        container.appendChild(div)
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    }
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
}

function randomColor(e) {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
}

function eraseColor(){
    removeGrid()
    createGrid()
}

function promptQtt() {
    x = 0
    while (x < 1) {
        num = prompt("insert number of columns/rows, max 100", "0");
        gridSize = parseInt(num)
        if (num < 101 && num > 0) {
            alert(num); 
            removeGrid()
            createGrid()
            x = 1 
        }else{
            alert("the number is not supported, insert a new one")
        }
    }
}

createGrid()