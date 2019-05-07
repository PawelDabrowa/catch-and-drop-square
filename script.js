const div = document.querySelector('div');

let moveSquare = false;

let insertDivX;
let insertDivY;

addEventListener('mousedown', (e) => {
    div.style.backgroundColor = 'red';
    // moveSquare = !moveSquare;
    moveSquare = true;
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
})

addEventListener('mousemove', (e) => {
    if (moveSquare) {
        x = e.clientX - insertDivX;
        y = e.clientY - insertDivY;
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
    }
});

addEventListener('mouseup', () => {
    div.style.backgroundColor = '#ddd';
    // moveSquare = !moveSquare;
    moveSquare = false;
})