class Brick extends GameObject {
    constructor(color, ctx, x, y) {
        super();
        this.bricksPositions = {
            "red": {"row": 0, "col": 0},
            "purple": {"row": 0, "col": 1},
            "yellow": {"row": 0, "col": 2}
        };

        this.img.src = "resources/sprite.png";
        this.size = 33;
        this.row = this.bricksPositions[color]["row"];  //row from sprite
        this.col = this.bricksPositions[color]["col"];
        this.ctx = ctx;
        this.x = x;
        this.y = y;
    }

    draw() {
        this.ctx.drawImage(this.img,
            ( this.col * this.size) + (this.col * CONSTANTS.brick_offset),
            this.row,
            this.size,
            this.size,
            this.x * CONSTANTS.brick_width,
            this.y * CONSTANTS.brick_height,
            this.size * 2,
            this.size);
    }
}
