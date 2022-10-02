const container = document.querySelector('#container');
let selectedColor = "black"
let gridSize = 16;
const btnColor = document.querySelector('#color')
const btnBlack = document.querySelector('#black')

btnColor.addEventListener('click', () => {
    selectedColor = "random"
})
btnBlack.addEventListener('click', () => {
    selectedColor = "black"
})

function createGrid() {
    for (i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div')
        div.classList.add("grid-div")
        //div.addEventListener('mouseover', randomColor)
        //div.addEventListener('mousedown', randomColor)
        container.appendChild(div)
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    }
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
}

function randomColor() {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    return `rgb(${randomR}, ${randomG}, ${randomB})`
}

function eraseColor() {
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
        } else {
            alert("the number is not supported, insert a new one")
        }
    }
}

createGrid()

function paintGrid(e, color) {
    if (e.target.classList == 'grid-div') {
        let square = e.target;
        square.style.backgroundColor = color;
    }
}

container.addEventListener('mousedown', event => {
    paintGridEvent = paintGrid(event, selectedColor);
    if (event.buttons == 1) {
        window.addEventListener('mouseover', (e) => {
            if (selectedColor == 'random') {
                paintGrid(e, randomColor());
            } else {
                paintGrid(e, selectedColor);
            }
        });
    }
});

