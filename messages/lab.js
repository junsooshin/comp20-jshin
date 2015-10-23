/*	
	game.js
	by Jun Soo (Derek) Shin
	Comp 20: Lab 6
	due  22 October 2015
	note: JavaScript code that will "load JSON data using XMLHttpRequest 
	      object, parse the JSON file, and output the data to a section of a
	      completely loaded HTML file" (Ming).
*/

function parse() {
	
	var myRequest = new XMLHttpRequest();
	myRequest.open("get", "data.json", true);
	myRequest.send();

	myRequest.onreadystatechange = function() {


		}

	}
	
}