function main() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    ctx.font = "24px ariel";
    let buttonPause = document.getElementById('buttonPause');
    let isRunning = false;
    let lives = CONSTANTS.player_lives;
    let gameLevel = 1;
    let score = 0;

    // events
    buttonPause.addEventListener('click', pause);
    window.addEventListener('keydown', handleInput);

    // init game
    let level = getLevel(gameLevel);
    let ball = new Ball(CONSTANTS.ball_start_x, CONSTANTS.ball_start_y, ctx);
    let paddle = new Paddle(CONSTANTS.paddle_start_x, CONSTANTS.paddle_start_y, ctx);
    let board = new Board(ball, level, paddle, ctx);
    let bricksCount = board.getBricksCount();

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
        ctx.fillText(`Score: ${score}`, 0, 300);
        ctx.fillText(`Lives: ${lives}`, 0, 320);
        ctx.fillText(`Bricks count: ${bricksCount}`,0, 340 );
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
                if (paddle.x - CONSTANTS.paddle_speed >= 0) {
                    paddle.x -= CONSTANTS.paddle_speed;
                } else {
                    paddle.x = 0;
                }
                break;
            case  'ArrowRight':
                if(paddle.x + CONSTANTS.paddle_speed <= CONSTANTS.canvas_width - CONSTANTS.paddle_width) {
                    paddle.x += CONSTANTS.paddle_speed;
                } else {
                    paddle.x = CONSTANTS.canvas_width - CONSTANTS.paddle_width;
                }
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
                level = getLevel(gameLevel);
                board = new Board(ball, level, paddle, ctx);
                bricksCount = board.getBricksCount();
            }

            board.ball.reset();
            board.paddle.reset();
            draw();
            isRunning = false;
        }
    }

    function checkCollisions() {
        if (checkPaddleHitBallX() && checkPaddleHitBallY()) {
            ball.directionY = "up";
        }

        if(board.checkBrickCollisions()){
            score+=10;
            bricksCount--;
        }

        if(bricksCount == 0){
            ctx.clearRect(0,0,CONSTANTS.canvas_width, CONSTANTS.canvas_height);
            score += 100;
            ball.nextLevel();
            ball.reset();
            paddle.reset();
            gameLevel++;
            board.level = getLevel(gameLevel);
            bricksCount = board.getBricksCount();
            board.draw();
            isRunning = false;
        }
    }

    function checkPaddleHitBallX() {
        let ballXend = ball.x + CONSTANTS.ball_size;
        let paddleXend = paddle.x + CONSTANTS.paddle_width;

        if (ball.x >= paddle.x && ball.x <= paddleXend ||
            ballXend >= paddle.x && ballXend <= paddleXend) {
            return true;
        }

        return false;
    }

    function checkPaddleHitBallY() {
        let ballYend = ball.y + CONSTANTS.ball_size;

        if (ballYend == paddle.y + 20) {
            return true;
        }

        return false;
    }

}

window.onload = function () {
    main();
};
