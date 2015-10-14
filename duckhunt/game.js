/*	
	game.js
	by Jun Soo Shin
	Comp 20: Lab 5
	due  13 October 2015
	note: JavaScript code that draws the background and two ducks on the
	      canvas
*/

function init() {

	var canvas = document.getElementById("game_canvas");
	var ctx = canvas.getContext("2d");

	var background = new Image();

	background.addEventListener("load", function() {
		ctx.drawImage(background, 0, 0, 256, 240, 0, 0, 256, 240);
	}, false);

	background.src = "duckhunt-background.gif";
}