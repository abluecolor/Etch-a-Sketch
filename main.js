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

const content = document.createElement('div');
content = classList.add('content');
flexContainer.appendChild(content);

const board = document.createElement('div');
board = classList.add('board');
content.appendChild(board);

const buttonBox = document.createElement('div');
buttonBox = classList.add('buttons');
content.appendChild(buttonBox);

const blackButton = document.createElement('button');
blackButton.textContent = 'Black';
const whiteButton = document.createElement('button');
whiteButton.textContent = 'White';
const randomButton = document.createElement('button');
randomButton.textContent = 'Random';
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';

buttonBox.appendChild(blackButton);
buttonBox.appendChild(whiteButton);
buttonBox.appendChild(randomButton);
buttonBox.appendChild(resetButton);

function createSquares(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        board.appendChild(square);
    }
}
createSquares(gridSize);