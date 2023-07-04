const board = document.getElementById('board');
const gridSize = 256;

function createSquares(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement('div');
        board.appendChild(square);
    }
}
createSquares(gridSize);