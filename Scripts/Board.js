class Board extends GameObject {
    constructor(ball, level, paddle, ctx) {
        super(0, 0, ctx);
        this.ball = ball;
        this.level = level;
        this.paddle = paddle;
    }

    draw() {
        this.drawLevel();
        this.ball.draw();
        this.paddle.draw();
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

    checkBrickCollisions() {
        let brick = {
            x: 0,
            y: 0,
            w: CONSTANTS.brick_width,
            h: CONSTANTS.brick_height
        };

        for (let i = 0; i < this.level.length; i++) {
            for (let j = 0; j < this.level[i].length; j++) {
                brick.y = i * CONSTANTS.brick_height;
                brick.x = j * CONSTANTS.brick_width;
                if (this.level[i][j] != "empty" && this.isColide(brick)) {
                        console.log("hited");
                    this.level[i][j] = "empty";
                }
            }
        }

    }

    isCollide(brick) {
        let balX = this.ball.x + this.ball.radius;
        let balY = this.ball.y + this.ball.radius;
        let deltaX = balX - Math.max(brick.x, Math.min(balX, brick.x + brick.w));
        let deltaY = balY - Math.max(brick.y, Math.min(balY, brick.y + brick.h));
        return (deltaX * deltaX + deltaY * deltaY) < (this.ball.radius * this.ball.radius);
    }
}
