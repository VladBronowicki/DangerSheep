function GameSprite(x,y,height,width){
		this.posx = x;
		this.posy = y;
		this.height = height;
		this.width = width;
		this.velx = 2;
		this.vely = 2;
		this.color = "";
		this.hasSprite = false;
		this.sprite = new Image();
		
		
		this.render = function(){

			if(this.hasSprite){
				canvasContext.drawImage(this.sprite, this.posx, this.posy, this.height, this.width);
			}else{
				canvasContext.fillStyle = this.color;
				canvasContext.fillRect(this.posx, this.posy, this.height, this.width);
			}
		}
		this.update = function(){
			this.posx += this.velx;
			this.posy += this.vely;
			if(this.posy > maincanvas.height -this.height || this.posy < 0){
				this.vely *= -1;
			}
			if(this.posx > maincanvas.width - this.width || this.posx < 0){
				this.velx *= -1;
			}
		}
		this.alive = function(){
			return true;
		}
		this.hasCollided = function(){
			return false;
		}
		this.setSprite = function( img ){
			this.hasSprite = true;
			this.sprite.src = img;
		}
}