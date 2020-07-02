class Brick{
    constructor(r,c){
        this.x=0;
        this.y=0;
        this.status=1;
        this.c=c;
        this.r=r;
    }

    collisionCheck(){
        if(this.status == 1) {
            if(x > this.x && x < this.x+brickWidth && y > this.y && y < this.y+brickHeight) {
              dy = -dy;
              this.status = 0;
              score++;
              if(score == brickRowCount*brickColumnCount) {
                alert("YOU WIN, CONGRATS!");
                document.location.reload();
              }
            }
    }

    }

    drawBricks(){
        if(this.status == 1) {
            var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
            this.x = brickX;
            this.y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
          }
    }
}