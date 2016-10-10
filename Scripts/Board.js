class Board extends GameObject {
    constructor(ball, level, ctx) {
        super();
        this.ball = ball;
        this.level = level;
        this.ctx = ctx;
    }

    draw(){
        this.drawLevel();
        this.ball.draw();
    }

    drawLevel() {
        for (let i = 0; i < this.level.length; i++) {
            for (let j = 0; j < this.level[i].length; j++) {
                if (this.level[i][j] != "empty") {
                    let brick = new Brick(this.level[i][j], this.ctx, j, i);
                    brick.draw();
                }
            }
        }
    }
}
