function main() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let buttonPause = document.getElementById('buttonPause');
    let buttonStart = document.getElementById('buttonStart');
    let isRunning = true;
    let lives = CONSTANTS.player_lives;
    let gameLevel = 0;
    let score = 0;
    buttonPause.addEventListener('click', pause);
    let level = Levels[gameLevel];

    // Create BALL
    let ball = new Ball(CONSTANTS.ball_start_x,CONSTANTS.ball_start_y,ctx);
    let paddle = new Paddle(CONSTANTS.paddle_start_x, CONSTANTS.paddle_start_y,ctx);
    let board = new Board(ball, level, paddle, ctx);


    // Run GAME
    run();

    function run() {
        if (isRunning) {
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
        board.draw();
    }

    function pause() {
        if (isRunning) {
            buttonPause.textContent = "Start";
            isRunning = false;
        } else {
            buttonPause.textContent = "Stop";
            isRunning = true;
        }
    }

    function start() {
        isRunning = true;
    }

    function checkIfOut(ballY) {
        if (ballY > CONSTANTS.canvas_height - CONSTANTS.ball_size) {
            lives--;
            score -= 100;
            if (lives <= 0) {
                lives = CONSTANTS.player_lives;
                score = 0;
                board.drawLevel(bricks, ctx);
            }
            board.ball.reset();
            isRunning = false;
        }
    }


}

main();

