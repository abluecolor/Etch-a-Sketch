const container = document.getElementById('container');
function createDivs(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        container.appendChild(div)
    }
}

const gridSize = 256;
createDivs(gridSize);