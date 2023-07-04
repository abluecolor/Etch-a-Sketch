const container = document.getElementById('container');
const gridSize = 256;

function createSquares(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement('div');
        container.appendChild(square);
    }
}
createSquares(gridSize);