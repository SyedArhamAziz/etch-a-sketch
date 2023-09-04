const container = document.getElementById('container');
const containerSize = window.getComputedStyle(container).width;
let gridEls = [];
const button = document.getElementById('reset');
button.addEventListener('click', resetGrid);

function makeGrid(size) {
    const elWidth = Math.floor(parseInt(containerSize)/size) + 'px';
    console.log(elWidth);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let div = document.createElement('div');
            div.classList.add('gridEl');
            div.style.width = elWidth;
            div.style.height = elWidth;
            div.addEventListener("mouseover", setRandomizedColor);
            container.appendChild(div);
            gridEls.push(div);
        }
    }
}

function setRandomizedColor() {
    this.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}`;
}

function resetGrid() {
    for (let i = 0; i < gridEls.length; i++) {
        console.log('hello');
        div = gridEls[i];
        container.removeChild(div);
    }
    gridEls = [];
    console.log(gridEls);
    newSize = getUserInput();
    makeGrid(newSize);
}

function getUserInput() {
    let newSize = '';
    newSize = prompt('Enter a new grid size between 1 and 75');
    while (Number.isNaN(Number.parseInt(newSize)) || newSize <= 0 || newSize > 75) {
        newSize = prompt('Invalid input. Please enter a valid number between 1 and 75');
    }
    return Number.parseInt(newSize);
}
makeGrid(16);