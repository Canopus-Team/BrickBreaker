function main(){
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

   let brick = new Brick("red", ctx);
   brick.draw();
}

main();
