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
var gs

$.getScript("js/GameSprite.js", function( jd ){
	gs = new GameSprite(150,150,45,45);
	gs.setSprite("images/sheepHelmet.png");
});

window.onload = function(){
	
	document.addEventListener( 'keydown', game_KeyActionLogic );
	document.addEventListener( 'click' , game_MouseActionLogic );
	
}

function game_MouseActionLogic( ev ){
	var clickTarget = ev.target;
	ev.preventDefault();
}

function startTimer( interval ){
	timer = window.setInterval( draw, interval );
}
	
function stopTimer(){
	window.clearInterval(timer);
}

function game_KeyActionLogic( ev ) {
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

function draw(){
	canvasContext.clearRect(0 ,0 , mainCanvas.width, maincanvas.height);
	gs.render();
	gs.update();
}