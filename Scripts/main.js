function main(){
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let brickImage = new Image();
    brickImage.src = "resources/sprite.png";
    ctx.drawImage(brickImage, 0, 0);

   // let brick = new Brick("red", ctx);
   // brick.draw();
}

main();
