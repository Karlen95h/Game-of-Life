var matrix = [];
var grassArr = [];
var grassEaterArr = [];
var amenaEaterArr = [];
var grassBuilderArr = [];
var BombArr = [];

var matrixSize = prompt('Input Matrx size!(default = 30)')
var side = prompt('Input the size of the square(default = 20)')
if (side == ''){
    side = 20
}
if (matrixSize == ''){
    matrixSize = 30
}
function setup() {
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
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 1;
        }
        for (let i = 0; i < grassEaterCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 2;
        }
        for (let i = 0; i < AmenaEaterCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 3;
        }
    }

    matrixGenerator()
    AddRandom(5, 5, 5)




    frameRate(9);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

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

        }
    }
}
function AddGrass() {
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(random(matrixSize));
        let y = Math.floor(random(matrixSize));
        matrix[y][x] = 1;
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr);
            }

        }
    }
}
function AddGrassEater() {
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(random(matrixSize));
        let y = Math.floor(random(matrixSize));
        matrix[y][x] = 2;
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 2) {
                let eater = new GrassEater(x, y);
                grassEaterArr.push(eater);
            }

        }
    }
}
function AddAmenaEater() {
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(random(matrixSize));
        let y = Math.floor(random(matrixSize));
        matrix[y][x] = 3;
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 3) {
                let amena = new AmenaGrassEater(x, y);
                amenaEaterArr.push(amena);
            }

        }
    }
}
function AddBuilder() {
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(random(matrixSize));
        let y = Math.floor(random(matrixSize));
        matrix[y][x] = 4;

    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 4) {
                let build = new GrassBuilder(x, y);
                grassBuilderArr.push(build);
            }

        }
    }
}
function AddBomb() {
    for (let i = 0; i < 1; i++) {
        let x = Math.floor(random(matrixSize));
        let y = Math.floor(random(matrixSize));
        matrix[y][x] = 5;

    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 5) {
                let bomb = new Bomb(x, y);
                BombArr.push(bomb);
            }

        }
    }
}


function draw() {

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
    for (let i = 0; i < BombArr.length; i++) {
        const bomb = BombArr[i];
        bomb.mul();
        function bab(){
            bomb.babax()
        }
        setTimeout(bab, 3000);
        
    }


}