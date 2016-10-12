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
                    this.level[i][j] = "empty";
                    return true;
                }
            }
        }

        return false;
    }

    isColide(brick) {
        let balX = this.ball.x + this.ball.radius;
        let balY = this.ball.y + this.ball.radius;

        // check bottom
        if(balX >= brick.x && balX <= brick.x + brick.w && this.ball.y > brick.y && this.ball.y <= brick.y + brick.h){
            this.ball.directionY = "down";
            return true;
        }

        // check up
        if(balX >= brick.x && balX <= brick.x + brick.w && this.ball.y + CONSTANTS.ball_size < brick.y + brick.h && this.ball.y + CONSTANTS.ball_size >= brick.y){
            this.ball.directionY = "up";
            return true;
        }

        // check left
        if(balY >= brick.y && balY <= brick.y + brick.h && this.ball.x + CONSTANTS.ball_size < brick.x + brick.w && this.ball.x +  CONSTANTS.ball_size >= brick.x){
            this.ball.directionX = "left";
            return true;
        }

        // check right
        if(balY >= brick.y && balY <= brick.y + brick.h && this.ball.x > brick.x && this.ball.x <= brick.x + brick.w){
            this.ball.directionX = "right";
            return true;
        }

        // bottom left corner
        if(Board.calculate2dDistance(brick.x, brick.y + brick.h,  balX,balY) <= this.ball.radius){
            this.ball.directionX = "left";
            this.ball.directionY = "down";
            return true;
        }

        // bottom right corner
        if(Board.calculate2dDistance(brick.x + brick.w, brick.y + brick.h,  balX,balY) <= this.ball.radius){
            this.ball.directionX = "right";
            this.ball.directionY = "down";
            return true;
        }

        // top right corner
        if(Board.calculate2dDistance(brick.x + brick.w, brick.y,  balX,balY) <= this.ball.radius){
            this.ball.directionX = "right";
            this.ball.directionY = "up";
            return true;
        }

        // top left corner
        if(Board.calculate2dDistance(brick.x, brick.y,  balX,balY) <= this.ball.radius){
            this.ball.directionX = "left";
            this.ball.directionY = "up";
            return true;
        }


        return false;
    }

    static calculate2dDistance(x1, y1, x2, y2){
        return Math.sqrt((x1-x2)*(x1-x2) + (y1 - y2) * (y1 - y2));
    }

    checkLevelClear(){
        for(let row of this.level){
           if(row.filter(x => x!= "empty").length > 0){
               return false;
           }
        }

        return true;
    }
}
