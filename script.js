const container = document.querySelector('#container');

let gridSize = 56;

for(i=0; i<gridSize*gridSize ; i++){
    const div = document.createElement('div')
    div.classList.add("grid-div")
    div.addEventListener('mouseover', randomColor)
    div.addEventListener('mousedown', randomColor)
    container.appendChild(div)
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
}


function randomColor(e) {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
} 



function promptQtt(){
    num = prompt("insert number of columns/rows, max 100", "0");
    alert (num);
    gridSize = parseInt(num)
}