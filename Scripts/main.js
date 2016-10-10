function main() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    let level = getFirstLevel();
    drawLevel(level,ctx);
}

main();

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