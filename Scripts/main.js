function main() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let buttonPause = document.getElementById('buttonPause');
    let isRunning = false;
    let lives = CONSTANTS.player_lives;
    let gameLevel = 0;
    let score = 0;

    // events
    buttonPause.addEventListener('click', pause);
    window.addEventListener('keydown', handleInput);

    // init game
    let level = Levels[gameLevel];
    let ball = new Ball(CONSTANTS.ball_start_x, CONSTANTS.ball_start_y, ctx);
    let paddle = new Paddle(CONSTANTS.paddle_start_x, CONSTANTS.paddle_start_y, ctx);
    let board = new Board(ball, level, paddle, ctx);

    // Run GAME
    draw();
    run();

    function run() {
        if (isRunning) {
            draw();
            update();
        }
        requestAnimationFrame(run);
    }

    function update() {
        ball.move();
        checkCollisions();
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

    function handleInput(event) {
        let key = event.code;
        switch (key) {
            case  'ArrowLeft':
                paddle.x -= CONSTANTS.paddle_speed;
                break;
            case  'ArrowRight':
                paddle.x += CONSTANTS.paddle_speed;
                break;
            case  'Space':
                pause();
                break;
        }
    }

    function checkIfOut(ballY) {
        if (ballY > CONSTANTS.canvas_height - CONSTANTS.ball_size) {
            lives--;
            score -= 100;
            if (lives <= 0) {
                lives = CONSTANTS.player_lives;
                score = 0;
                board.drawLevel();
            }
            board.ball.reset();
            board.paddle.reset();
            draw();
            isRunning = false;
        }
    }
    
    function checkCollisions() {
        if(checkPaddleHitBallX() && checkPaddleHitBallY()){
            ball.directionY = "up";
        }
    }

    function checkPaddleHitBallX() {
        let ballXend = ball.x + CONSTANTS.ball_size;
        let paddleXend = paddle.x + CONSTANTS.paddle_width;

        if(ball.x >= paddle.x && ball.x <= paddleXend ||
            ballXend >= paddle.x && ballXend <= paddleXend){
            return true;
        }
        return false;
    }

    function checkPaddleHitBallY() {
        let ballYend = ball.y + CONSTANTS.ball_size;

        if(ballYend == paddle.y + 20){
            return true;
        }
        return false;
    }

}

window.onload = function() {
    main();
};



