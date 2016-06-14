function GameSprite(){
		this.posx = 50;
		this.posy = 50;
		this.velx = 0.5;
		this.vely = 1.5;
		this.render = function(){
			canvasContext.fillStyle = "red";
			canvasContext.fillRect(this.posx, this.posy, 15,15);
		}
		this.update = function(){
			this.posx += this.velx;
			this.posy += this.vely;
			if(this.posy > maincanvas.height -15 || this.posy < 0){
				this.vely *= -1;
			}
			if(this.posx > maincanvas.width -15 || this.posx < 0){
				this.velx *= -1;
			}
		}
}