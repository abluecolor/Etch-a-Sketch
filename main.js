const container = document.getElementById('container');
const gridSize = 256;

function createDivs(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        container.appendChild(div)
    }
}
createDivs(gridSize);