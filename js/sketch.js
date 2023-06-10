function sketch() {
    const GRID_SIZE = 600; // px
    const CONTAINER = document.getElementById("container");
    const SQUARE_MARGIN = 1;

    let numberOfSquares = 50; // 16x16 to start with
    let sizePerSquare = getSquareSize(numberOfSquares, GRID_SIZE, SQUARE_MARGIN);

    appendSquares(numberOfSquares, sizePerSquare, CONTAINER);
}

function appendSquares(numberOfSquares, sizePerSquare, container) {
    const TOTAL_SQUARES = numberOfSquares * numberOfSquares; // squares by squares
    
    for (let i = 0; i < TOTAL_SQUARES; i++) {
        container.appendChild(getSquareReference(sizePerSquare));
    }
}

function getSquareReference(size) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = size + "px";
    square.style.height = size + "px";

    return square;
}

function getSquareSize(numberOfSquares, gridSize, margin) {
    // will give a size in pixels based on this formula
    // size = gridSize / numberOfSquares - (2 * margin)

    let size = gridSize / numberOfSquares - (2 * margin);
    return size.toFixed(3);
}

sketch();