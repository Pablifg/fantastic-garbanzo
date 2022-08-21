const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementSize;

window.addEventListener('load', setCanvasSize); //html charge from start
window.addEventListener('resize', setCanvasSize);

//Iniatize game
function startGame() {
    console.log({canvasSize, elementSize});

    game.font = elementSize + 'px Verdana';
    game.textAlign = 'end';

    for (let i = 1; i <= 10; i++) {
        game.fillText(emojis['X'], elementSize * i, elementSize);
    }

    // game.&*()
    //game.fillRect(0,0,100,100);
    //game.clearRect(0,0,50,50);
    //game.clearRect(0,0,50,100);

    /*game.font = '25px Verdana';
    game.fillStyle = 'green';
    game.textAlign = 'origin';
    game.fillText('Platzi', 150, 50);*/
}

function setCanvasSize() {
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    elementSize = canvasSize / 10;

    startGame();
}
