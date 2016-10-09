class Brick extends GameObject {
    constructor(color, ctx) {
        super();
        this.bricksPositions = {"red": {"row": 0, "col": 0}};
        this.size = 64;
        this.row = this.bricksPositions[color]["row"];  //row from sprite
        this.col = this.bricksPositions[color]["col"];
        this.ctx = ctx;
    }

    draw() {
        let ctx = this.ctx;
        let img = this.img;
        this.img.onload = function() {
            ctx.drawImage(img, 0, 0);
        };
        this.img.src = "resources/sprite.png";
    }
}
