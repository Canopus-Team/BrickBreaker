function main() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    ctx.font = "24px ariel";
    
    // Run game
    gameEngine(ctx);
    
}

window.onload = function () {
    main();
};
