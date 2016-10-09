class Ball extends GameObject{
    constructor(row, col){
        super();
        this.img.src = "resources/ball.png";
        this.img.width = 10;
        this.row = row;  //row from sprite
        this.col = col;
    }


}
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let ballPic = document.getElementById('ballPic');
let ball = new Ball(10, 10);


ctx.drawImage(ball.img, ball.row, ball.col);