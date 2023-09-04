const container = document.getElementById('container');
const containerSize = window.getComputedStyle(container).width;
let gridEls = [];

function makeGrid(size) {
    const elWidth = Math.floor(parseInt(containerSize)/size) + 'px';
    console.log(elWidth);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let div = document.createElement('div');
            div.classList.add('gridEl');
            div.style.width = elWidth;
            div.style.height = elWidth;
            div.addEventListener("mouseover", (event) => {event.target.style.backgroundColor = "black";})
            container.appendChild(div);
            gridEls.push(div);
        }
    }
}

makeGrid(16);