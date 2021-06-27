
var socket = io();
var side = 30
function setup() {
    createCanvas(50 * side, 50 * side);
    background("pink");
}
var weath = 'spring'

socket.on("weather", function (data) {
    weath = data;
})
    
function nkarel(matrix) {

    console.log(weath);

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var toBot = side - side * 0.3
            textSize(toBot);
            if (matrix[y][x] == 1) {
                if(weath == "summer") {
                    fill("green");
                }else if (weath == "autumn") {
                    fill("#333300");
                }else if (weath == "winter") {
                    fill("white");
                }else if (weath == "spring") {
                    fill("#4dffa6");
                };
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

function AddGrass() {
    socket.emit("Grass")
}

function AddBuilder() {
    socket.emit("Builder")
}

function AddAmenaEater() {
    socket.emit("AmenaEater")
}

function AddGrassEater() {
    socket.emit("Grass Eater")
}

function AddBomb() {
    socket.emit("Bomb")
}


