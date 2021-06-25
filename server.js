var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('respect+.html');
});
server.listen(3000, () => {
    console.log('connected');
});

let matrixSize = 50
 matrix = [];
 grassArr = [];
 grassEaterArr = [];
 amenaEaterArr = [];
 grassBuilderArr = [];
 BombArr = [];
 side  = 30

var Grass = require("./classes/Grass")
let GrassEater = require("./classes/GrassEater")
var Bomb = require("./classes/Bomb")
var GrassBuilder = require("./classes/GrassBuilder")
var AmenaGrassEater = require("./classes/AmenaGrassEater")

    function matrixGenerator() {
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = []
            for (let o = 0; o < matrixSize; o++) {
                matrix[i][o] = 0;
            }
        }
    }

    function AddRandom(grassCount, grassEaterCount, AmenaEaterCount) {
        for (let i = 0; i < grassCount; i++) {
            let x = Math.floor(Math.random() * matrixSize);
            let y = Math.floor(Math.random() * matrixSize);
            matrix[y][x] = 1;
        }
        for (let i = 0; i < grassEaterCount; i++) {
            
            let x = Math.floor(Math.random() * matrixSize);
            let y = Math.floor(Math.random() * matrixSize);
            matrix[y][x] = 2;
        }
        for (let i = 0; i < AmenaEaterCount; i++) {
            
            let x = Math.floor(Math.random() * matrixSize);
            let y = Math.floor(Math.random() * matrixSize);
            matrix[y][x] = 3;
        }
    }

    matrixGenerator()
    AddRandom(5, 5, 5)
 
    io.sockets.emit("send matrix", matrix);


    function createObject(matrix){

        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
    
                if (matrix[y][x] == 1) {
                    let gr = new Grass(x, y);
                    grassArr.push(gr);
                }
                else if (matrix[y][x] == 2) {
                    let eater = new GrassEater(x, y);
                    grassEaterArr.push(eater);
                }
                else if (matrix[y][x] == 3) {
                    let amena = new AmenaGrassEater(x, y);
                    amenaEaterArr.push(amena);
                }
                else if (matrix[y][x] == 4) {
                    let build = new GrassBuilder(x, y);
                    grassBuilderArr.push(build);
                }
    
                else if (matrix[y][x] == 5) {
                    let bomb = new Bomb(x, y);
                    BombArr.push(bomb);
                }
    
            }
        }
        io.sockets.emit('send matrix', matrix)
    }

    



function game() {
    for (let i = 0; i < grassArr.length; i++) {
        const grass = grassArr[i];
        grass.mul();
    }
    for (let i = 0; i < grassEaterArr.length; i++) {
        const eater = grassEaterArr[i];
        eater.eat();
    }
    for (let i = 0; i < amenaEaterArr.length; i++) {
        const amena = amenaEaterArr[i];
        amena.eat();
    }
    for (let i = 0; i < grassBuilderArr.length; i++) {
        const build = grassBuilderArr[i];
        build.eat();
    }

    io.sockets.emit("send matrix", matrix);
}

setInterval(game, 1000)

io.on('connection', function () {
    createObject(matrix)
})
