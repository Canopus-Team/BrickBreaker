function main() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let buttonPause = document.getElementById('buttonPause');
    let buttonStart = document.getElementById('buttonStart');
    let isRunning = true;
    let bricksLevel = getFirstLevel();
    let lives = CONSTANTS.player_lives;
    let gameLevel = 1;
    let score = 0;
    buttonPause.addEventListener('click', pause);

    // Create BALL
    let ball = new Ball(ctx);

    // Run GAME
    run();

    function run() {
         if(isRunning){
            update();
            draw();
        }
        requestAnimationFrame(run);
    }

    function update() {
        ball.move();
        checkIfOut(ball.y);
    }

    function draw() {
        ctx.clearRect(0, 0, CONSTANTS.canvas_width, CONSTANTS.canvas_height);
        drawLevel(bricksLevel,ctx);
        ball.draw();
    }

    function pause() {
        if(isRunning){
            buttonPause.textContent  = "Start";
            isRunning = false;
        } else {
            buttonPause.textContent  = "Stop";
            isRunning = true;
        }
    }

    function start() {
        isRunning = true;
    }
    
    function checkIfOut(ballY) {
        if(ballY > CONSTANTS.canvas_height - CONSTANTS.ball_size){
            lives--;
            score -= 100;
            if(lives <= 0){
                lives = CONSTANTS.player_lives;
                score = 0;
                drawLevel(bricks, ctx);

            }
            ball.reset();
            isRunning = false;
        }
    }

    // function createBricks() {
    //     let colors = ['red', 'purple', 'yellow'];
    //
    //     for (let i = 0; i < 640; i += 34) {
    //         for (let j = 0; j < 170; j += 34) {
    //             let rnd = Math.floor(Math.random() * 3);
    //             let brick = new Brick(colors[rnd], ctx, i, j);
    //             brick.draw();
    //         }
    //     }
    //
    // }

    function getFirstLevel() {
        let level = [
            ["empty", "empty", "red", "empty", "empty", "empty", "empty", "red", "empty", "empty"],
            ["empty", "red", "empty", "empty", "purple", "yellow", "empty", "empty", "red", "empty"],
            ["red", "empty", "empty", "empty", "yellow", "purple", "empty", "empty", "empty", "red"],
            ["empty", "red", "empty", "empty", "purple", "yellow", "empty", "empty", "red", "empty"],
            ["empty", "empty", "red", "empty", "empty", "empty", "empty", "red", "empty", "empty"]
        ];

        return level;
    }

    function drawLevel(level,ctx) {
        for (let i = 0; i < level.length; i++) {
            for (let j = 0; j < level[i].length; j++) {
                if (level[i][j] != "empty") {
                    let brick = new Brick(level[i][j], ctx, j, i);
                    brick.draw();
                }
            }
        }
    }

}

main();

