class GrassBuilder extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.x = x;
        this.y = y;
        this.directions = [
            [this.x, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x, this.y + 1],
        ];
    }
    getNewCordinates() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x, this.y + 1],
        ];
    }
   
    eat() {
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact) {
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }

            matrix[y][x] = 4
            matrix[this.y][this.x] = 1

            this.x = x;
            this.y = y
        }
    }
}