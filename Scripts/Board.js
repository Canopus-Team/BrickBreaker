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
                brick.y = i * CONSTANTS.brick_height;
                brick.x = j * CONSTANTS.brick_width;
                if (this.level[i][j] != "empty" && this.isColide(brick)) {
                    this.level[i][j] = "empty"
                }
            }
        }

    }

    isColide(brick) {
        let balX = this.ball.x + this.ball.radius;
        let balY = this.ball.y + this.ball.radius;
        let deltaX = balX - Math.max(brick.x, Math.min(balX, brick.x + brick.w));
        let deltaY = balY - Math.max(brick.y, Math.min(balY, brick.y + brick.h));

        let result = (deltaX * deltaX + deltaY * deltaY) < (this.ball.radius * this.ball.radius);
        if (!result) {
            return result;
        }

        this.changeBallDirection(brick, balX, balY);

        return result;
    }

    changeBallDirection(brick, x2, y2) {
        let x1 = (brick.x + brick.w) / 2;
        let y1 = (brick.y + brick.h) / 2;
        let dx = y1 - y2;
        let dy = x1 - x2;
        // left
        if (dx < 0 && Math.abs(dx) > (brick.x / 2 + brick.w / 2)) {
            this.ball.directionX = CONSTANTS.direction_left;
        }

        // right
        if (dx > 0 && Math.abs(dx) > (brick.x / 2 + brick.w / 2)) {
            this.ball.directionX = CONSTANTS.direction_right;
        }

        // bottom
        if (dy < 0 && Math.abs(dy) > (brick.x / 2 + brick.w / 2)) {
            this.directionY = CONSTANTS.direction_down;
        }

        // top
        if (dy > 0 && Math.abs(dy) > (brick.x / 2 + brick.w / 2)) {
            this.ball.directionX = CONSTANTS.direction_up;
        }
    }
}
