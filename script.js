
var socket = io();
var side = 30
function setup() {
    createCanvas(50 * side, 50 * side);
    background("pink");
}

    
function nkarel(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var toBot = side - side * 0.3
            textSize(toBot);
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
                text('🥦', x * side, y * side + toBot);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
                text('🐄', x * side, y * side + toBot);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
                text('🐆', x * side, y * side + toBot);
            }
            else if (matrix[y][x] == 4) {
                fill("#0fdbff");
                rect(x * side, y * side, side, side);
                text('💧', x * side, y * side + toBot);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
                text('💣', x * side, y * side + toBot);
            }
            else if (matrix[y][x] == 6) {
                fill("orange");
                rect(x * side, y * side, side, side);
                text('💣', x * side, y * side + toBot);
                
            }

        }
    }

}

setInterval(
    function () {
    socket.on('send matrix', nkarel)
    },1000
)

// function AddGrass() {
//     socket.emit("Grass")
// }

// function AddBuilder() {
//     socket.emit("Builder")
// }

// function AddAmenaEater() {
//     socket.emit("Builder")
// }

// function AddGrassEater() {
//     socket.emit("GrassEater")
// }

// function AddBomb() {
//     socket.emit("Bomb")
// }
