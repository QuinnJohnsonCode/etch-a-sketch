function sketch(numberOfSquares = 16) {
    const GRID_SIZE = 600; // px
    const CONTAINER = document.getElementById("container");
    const SQUARE_MARGIN = 1;
    const SIZE_PER_SQUARE = getSquareSize(numberOfSquares, GRID_SIZE, SQUARE_MARGIN);

    clearContainer(container);
    appendSquares(numberOfSquares, SIZE_PER_SQUARE, CONTAINER);
}

function getRandomRGBColor() {
    const R = Math.random() * 256;
    const G = Math.random() * 256;
    const B = Math.random() * 256;

    return 'rgb(' + R + ',' + G + ',' + B + ')';
}

function clearContainer(container) {
    container.textContent = "";
}

function appendSquares(numberOfSquares, sizePerSquare, container) {
    const TOTAL_SQUARES = numberOfSquares * numberOfSquares; // squares by squares
    for (let i = 0; i < TOTAL_SQUARES; i++) {
        container.appendChild(getSquareReference(sizePerSquare));
    }
}

function colorSquare(event) {
    const SQUARE_TO_UPDATE = event.target;
    SQUARE_TO_UPDATE.style.backgroundColor = getRandomRGBColor();
}

function getSquareReference(size) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = size + "px";
    square.style.height = size + "px";

    square.addEventListener("mouseover", colorSquare);

    return square;
}

function getSquareSize(numberOfSquares, gridSize, margin) {
    // will give a size in pixels based on this formula
    let size = gridSize / numberOfSquares - (2 * margin);
    return size.toFixed(3);
}

function resizeCanvas() {
    let numberOfSquares = 0;
    do {
        numberOfSquares = parseInt(prompt("Enter the number of squares desired", "16"));
    } while (numberOfSquares <= 0 || numberOfSquares > 100);

    sketch(numberOfSquares);
}

document.getElementById("resize-button").addEventListener("click", resizeCanvas);
sketch();