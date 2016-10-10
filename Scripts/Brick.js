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
        let _this = this;
        this.img.onload = function () {
            _this.ctx.drawImage(_this.img, ( _this.col * _this.size) + (_this.col * 8), _this.row, _this.size, _this.size, _this.x * 68, _this.y * 34, _this.size * 2, _this.size);
        };
    }
}
