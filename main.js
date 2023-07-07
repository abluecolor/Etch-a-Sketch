const board = document.getElementById('board');
const gridSize = 256;

const flexContainer = document.createElement('div');
flexContainer.classList.add('flexContainer');
document.body.appendChild(flexContainer);

const titleDiv = document.createElement('div');
titleDiv = classList.add('titleDiv');
flexContainer.appendChild(titleDiv);

const heading = document.createElement('h1');
heading = classList.add('heading');
titleDiv.appendChild(heading);

function createSquares(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        board.appendChild(square);
    }
}
createSquares(gridSize);