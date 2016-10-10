class Ball extends GameObject{

    constructor(ctx){
        super();
        this.img.src = "resources/ball.png";
        this.x = 268;  //row from sprite
        this.y = 420;
        this.directionX = "right";
        this.directionY = "up";
        this.ballMoveX = 0;
        this.level = 0;
        this.ctx = ctx;
    }

    reset(){
        this.x = 268;
        this.y = 420;
        this.directionX = "right";
        this.directionY = "up";
    }

    nextLevel(){
        this.level += 64;
        if(this.level > 256){
            this.level = 0;
        }
    }

    draw(){
        this.ctx.drawImage(this.img, this.ballMoveX , this.level, 64, 64, this.x, this.y, 50,50);
    }
    
    
    move() {
        this.ballMoveX += 64;
        if(this.ballMoveX > 768){
            this.ballMoveX = 0;
        }

        this.x = setDirection(this.directionX, this.x, "right");

        this.y = setDirection(this.directionY, this.y, "down");

        this.directionX = checkIfOut(this.x, 600, "right", "left", this.directionX);

        this.directionY = checkIfOut(this.y, 480, "down", "up", this.directionY);


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
    // let canvas = document.getElementById('canvas');
    // let ctx = canvas.getContext('2d');
    // let ball = new Ball();
    //
    // run();
    // function run() {
    //     ctx.clearRect(0, 0, 600, 480);
    //     ball.move();
    //     ball.draw(ctx);
    //
    //     requestAnimationFrame(run);
    // }
