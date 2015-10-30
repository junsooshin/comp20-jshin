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
	var sheet = new Image();

	background.addEventListener("load", function drawBackground() {

		// background
 		ctx.drawImage(background, 0, 0, 256, 240, 0, 0, 256, 240
 			);

	}, false);

	sheet.addEventListener("load", function drawDucks() {

		// left duck
 		ctx.drawImage(sheet, 35, 120, 40, 30, 80, 60, 40, 30);

 		// right duck
 		ctx.drawImage(sheet, 125, 120, 40, 30, 140, 40, 40, 30);

	}, false);

	background.src = "duckhunt-background.gif";
	sheet.src = "duckhunt_various_sheet.png";
}