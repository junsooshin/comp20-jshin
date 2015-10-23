/*	
	lab.js
	by Jun Soo Shin
	Comp 20: Lab 6
	due  22 October 2015
	note: JavaScript code that "will load JSON data using JavaScript's 
	      XMLHttpRequest object, parse the JSON file, and output the data to
	      a section of a completely loaded HTML file" (Ming).
*/

function parse() {

	var myRequest = new XMLHttpRequest();
	myRequest.open("get", "file:///Users/JunSooShin/Desktop/Informatik/comp20/comp20-jshin/messages/data.json", true);
	myRequest.send();

	myRequest.onreadystatechange = function() {
		if (myRequest.readyState == 4 && myRequest.status == 200) {

    			var parsedObjects = JSON.parse(myRequest.responseText);
    			elem = document.getElementById("messages");
			
			for (count = 0; count < parsedObjects.length; count++) {
				elem.innerHTML += "<p>" + 
				parsedObjects[count]["content"] + " - " 
           			+ parsedObjects[count]["username"] + "</p>";
			}

		}
	}
}