class Paddle extends GameObject{
    constructor(x,y,ctx){
        super(x,y,ctx);
        this.img.src = "resources/sprite.png";
    }

    draw() {
        this.ctx.drawImage(this.img,
            CONSTANTS.paddle_x,
            CONSTANTS.paddle_y,
            CONSTANTS.paddle_width,
            CONSTANTS.paddle_height,
            this.x,
            this.y,
            CONSTANTS.paddle_width,
            CONSTANTS.paddle_height);
    }
}