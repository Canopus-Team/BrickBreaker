class Ball extends GameObject {
    
    constructor(x,y,ctx){
        super(x,y,ctx);
        this.img.src = "resources/ball.png";
        this.directionX = CONSTANTS.direction_right;
        this.directionY = CONSTANTS.direction_up;
        this.ballMoveX = 0;
        this.level = 0;
    }

    reset(){
        this.x = CONSTANTS.ball_start_x;
        this.y = CONSTANTS.ball_start_y;
        this.directionX = CONSTANTS.direction_right;
        this.directionY = CONSTANTS.direction_up;
    }

    nextLevel(){
        this.level += CONSTANTS.ball_size;
        if(this.level > 256){
            this.level = 0;
        }
    }

    draw(){
        this.ctx.drawImage(this.img, this.ballMoveX , this.level, CONSTANTS.ball_size, CONSTANTS.ball_size, this.x, this.y, 50,50);
    }

    move() {
        this.ballMoveX += CONSTANTS.ball_size;
        if(this.ballMoveX > 768){
            this.ballMoveX = 0;
        }

        this.x = setDirection(this.directionX, this.x, CONSTANTS.direction_right);

        this.y = setDirection(this.directionY, this.y, CONSTANTS.direction_down);

        this.directionX = checkIfOut(this.x, CONSTANTS.canvas_width, CONSTANTS.direction_right, CONSTANTS.direction_left, this.directionX);

        this.directionY = checkIfOut(this.y, CONSTANTS.canvas_height, CONSTANTS.direction_down, CONSTANTS.direction_up, this.directionY);


        function checkIfOut(cord, end, dirUp, dirDown, currentDir) {
            if (cord >= end - 50) {
                currentDir = dirDown;
            }
            else if (cord <= 0) {
                currentDir = dirUp;
            }
            return currentDir;
        }
        function setDirection(dirCord, cord, dir) {
            if (dirCord == dir) {
                cord += 5;
            }
            else {
                cord -= 5;
            }
            return cord;
        }
    }

}