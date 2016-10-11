class Board extends GameObject {
    constructor(ball, level, paddle, ctx) {
        super(0, 0, ctx);
        this.ball = ball;
        this.level = level;
        this.paddle = paddle;
        this.bricks = this.drawLevel();
    }

    draw() {
        this.drawLevel();
        this.ball.draw();
        this.paddle.draw();
    }

    drawLevel() {
        let bricks = [];
        for (let i = 0; i < this.level.length; i++) {
            for (let j = 0; j < this.level[i].length; j++) {
                if (this.level[i][j] != "empty") {
                    let brick = new Brick(this.level[i][j], this.ctx, j, i);
                    bricks.push(brick);
                    brick.draw();
                }
            }
        }
        return bricks;
    }

    checkBrickCollisions() {
        let brick = {
            x: 0,
            y: 0,
            w: CONSTANTS.brick_width,
            h: CONSTANTS.brick_height
        };

        for (let i = 0; i < this.level.length; i++) {
            for (let j = 0; j < this.level[i].length; j++) {
                brick.x = i * CONSTANTS.brick_width;
                brick.y = j * CONSTANTS.brick_height;
                if (this.level[i][j] != "empty" && this.isColide(brick)) {
                        console.log("hited");
                }
            }
        }

    }

    isColide(brick) {
        let deltaX = this.ball.y - Math.max(brick.x, Math.min(this.ball.y, brick.x + brick.w));
        let deltaY = this.ball.x - Math.max(brick.y, Math.min(this.ball.x, brick.y + brick.h));

        return (deltaX * deltaX + deltaY * deltaY) < (this.ball.radius * this.ball.radius);
    }
}
