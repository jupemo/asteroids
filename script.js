const FPS = 30; 

// @tyoe {HTMLCanvasElement}

var canv = document.getElementById("gameCanvas");
var ctx = canv.getContext('2d');

//set up the game loop

setInterval(update, 1000 / FPS);

const update = () => {
    // draw sapce
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canv.clientWidth, canv.height);
    // draw ship

    //rotate ship

    //move the ship

}