function main() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let buttonStart = document.getElementById('buttonStart');
    let isRunning = true;

    // Create BALL
    let ball = new Ball(ctx);

    // Create BRICKS
    createBricks();

    // Run GAME
    run();

    function run() {
         if(isRunning){
            update();
            draw();
            requestAnimationFrame(run);
        }
    }

    function update() {
        ball.move();
    }

    function draw() {
        ctx.clearRect(0, 0, 600, 480);
        ball.draw();
    }

    function createBricks() {
        let colors = ['red', 'purple', 'yellow'];

        for (let i = 0; i < 640; i += 34) {
            for (let j = 0; j < 170; j += 34) {
                let rnd = Math.floor(Math.random() * 3);
                let brick = new Brick(colors[rnd], ctx, i, j);
                brick.draw();
            }
        }

    }

}

main();
