/*Global Variable Declaration*/

var mainBody = document.querySelector( '#mainbody' );
var mainDiv = document.querySelector( '#maindiv' );
var mainCanvas = document.querySelector( '#maincanvas' );

var animationFrame;
var paused = true;


window.onload = function(){
	
	window.addEventListener( 'keydown', listenForEsc );
	document.addEventListener( 'click' , game_MouseActionLogic );
	
}

/*Object Creation*/

function world(){
	
}

function gameSprite(){
	
	this.posX = 0;
	this.posY = 0;
	this.velX = 0;
	this.velY = 0;
	this.image = 0;
	
}

/*Methods*/

function game_MouseActionLogic( ev ){
	var clickTarget = ev.target;
	ev.preventDefault();
}

function listenForEsc( ev ) {
	switch(ev.keyCode){
	case 82: 
		window.location.reload();
		break;
	}
}

/*Main*/

function draw(){
	drawHere.getContext('2d').clearRect(0 ,0 , drawHere.width, drawHere.height);
	if(!paused){
		animFrameID = requestAnimationFrame(draw);
	}
}




