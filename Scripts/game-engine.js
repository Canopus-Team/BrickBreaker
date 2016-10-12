function gameEngine(ctx) {

    // init game
    let button = document.getElementById('button');
    let isRunning = false;
    let lives = CONSTANTS.player_lives;
    let gameLevel = 1;
    let score = 0;

    let level = getLevel(gameLevel);
    let ball = new Ball(CONSTANTS.ball_start_x, CONSTANTS.ball_start_y, ctx);
    let paddle = new Paddle(CONSTANTS.paddle_start_x, CONSTANTS.paddle_start_y, ctx);
    let board = new Board(ball, level, paddle, ctx);
    let bricksCount = board.getBricksCount();

    // events
    button.addEventListener('click', pause);
    window.addEventListener('keydown', handleInput);


    // Draw GAME
    draw();

    // Run GAME

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
        board.draw(score, lives, bricksCount);
    }

    function pause() {
        if (isRunning) {
            button.textContent = "Start";
            button.style = "background-color: blue";
            isRunning = false;
        } else {
            button.textContent = "Stop";
            button.style = "background-color: red";
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
            pause();
        }
    }

    // CHECK IF BALL HIT PADDLE OR A BRICK

    function checkCollisions() {
        if (checkPaddleHitBallX() && checkPaddleHitBallY()) {
            ball.directionY = "up";
        }

        // CHECK IF ONE OF BRICKS IS HIT

        if(board.checkBrickCollisions()){
            score+=10;
            bricksCount--;
        }

        // CHECK IF LEVEL IS UP

        if(bricksCount == 0){

            // GAME END

            if(gameLevel == 2){
                isRunning = false;
                ctx.font = "36px ariel";
                ctx.fillText(`YOU WIN! CONGRATULATIONS!`, 40, CONSTANTS.canvas_height/2);
                return;
            }
            ctx.clearRect(0,0,CONSTANTS.canvas_width, CONSTANTS.canvas_height);
            score += 100;
            ball.nextLevel();
            ball.reset();
            paddle.reset();
            gameLevel++;
            board.level = getLevel(gameLevel);
            bricksCount = board.getBricksCount();
            board.draw(score, lives, bricksCount);
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