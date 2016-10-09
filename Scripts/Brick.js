class Brick extends GameObject {
    constructor(color, ctx) {
        super();
        this.bricksPositions = {"red": {"row": 0, "col": 0}};

        this.img.src = "resources/sprite.png";
        this.size = 64;
        this.row = this.bricksPositions[color]["row"];  //row from sprite
        this.col = this.bricksPositions[color]["col"];
        this.ctx = ctx;
    }

    draw(){
        let ballPic = document.getElementById('sprite');
        this.ctx.drawImage(this.img, 0, 0);
    }
}
