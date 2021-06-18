let LivingCreature = require('./LivingCreatue')

module.experts = class Bomb {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.time = 5;
        this.radius = 1
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]

        ];
    }
    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]

        ];
    }
    chooseCell(char, char1, char2, char3, char4) {
        this.getNewCordinates();
        let result = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    result.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char1) {
                    result.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char2) {
                    result.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char3) {
                    result.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char4) {
                    result.push(this.directions[i]);
                }
            }
        }

        return result;
    }
    mul() {
        let found = this.chooseCell(0, 1, 2, 3, 4);
        let exact = random(found)

        if (exact) {
            this.radius++;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }

            matrix[y][x] = 5
            matrix[this.y][this.x] = 5

            this.x = x
            this.y = y

        }
        if (this.radius > 15) {
            this.die()
        }
    }
    babax() {
        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix[x].length; y++) {
                if (matrix[x][y] == 6) {
                    matrix[x][y] = 0
                }

            }
        }
    }
    die() {
        for (let i = 0; i < BombArr.length; i++) {
            if (BombArr[i].x == this.x && BombArr[i].y == this.y) {
                BombArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0

        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix[x].length; y++) {
                if (matrix[x][y] == 5) {
                    matrix[x][y] = 6
                }
            }
        }
    }
}
