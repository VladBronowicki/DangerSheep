/**

Main JS File, contains the main drawing and rendering objects, as well as other derrived objects from other JS files

*/

var mainBody = document.querySelector( '#mainbody' );
var mainDiv = document.querySelector( '#maindiv' );
var mainCanvas = document.querySelector( '#maincanvas' );
var canvasContext = mainCanvas.getContext('2d');
var timer;



var animationFrame;
var paused = true;


window.onload = function(){
	
	window.addEventListener( 'keydown', listenForEsc );
	document.addEventListener( 'click' , game_MouseActionLogic );
	
}

function game_MouseActionLogic( ev ){
	var clickTarget = ev.target;
	ev.preventDefault();
}

function startTimer( interval ){
	timer = window.setInterval(draw, interval);
}
	
function stopTimer(){
	window.clearInterval(timer);
}

function testObject(){
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

function listenForEsc( ev ) {
	//console.log(ev.keyCode);
	switch(ev.keyCode){
	case 80://p
	//console.log("P");
		if(paused){
			startTimer(16);
		}else{
			stopTimer();
		}
		paused = !paused;
		break;	
	case 82://r 
		window.location.reload();
		break;
	}
}

/*Main*/

//gs = new GameSprite();
tobj = new testObject();

function draw(){
	canvasContext.clearRect(0 ,0 , mainCanvas.width, maincanvas.height);
	tobj.render();
	tobj.update();
}