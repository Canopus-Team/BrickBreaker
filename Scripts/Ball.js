class Ball {
   constructor(imgSrc, x, y){
       this.img = new Image();
       this.img.src = imgSrc;
       this.x = x;
       this.y = y;
   }


}
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let ballPic = document.getElementById('ballPic');
let ball = new Ball(ballPic , 10, 10);


ctx.drawImage(ballPic, ball.x, ball.y);