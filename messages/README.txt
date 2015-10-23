README.txt
by Jun Soo Shin
Lab 6: README
due 22 October 2015

The Question:

Is it possible to request the data from a different origin (e.g., http://messagehub.
herokuapp.com/) or from your local machine (from file:///) from using 
XMLHttpRequest? Why or why not?

	- No, using the different origin does not show the content and gives me
	  
	  Uncaught SyntaxError: Unexpected token <myRequest.onreadystatechange @ lab.js:20

	- No, using a local machine does not show the content and gives me 

	lab.js:15 XMLHttpRequest cannot load file:///Users/JunSooShin/Desktop/Informatik/comp20/comp20-jshin/messages/data.json. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.parse @ lab.js:15onload @ (index):12

	- 

What has been correctly implemented and what has not:

	Using JavaScript's XMLHttpRequest object to load JSON data, parse the JSON file, and output the data to a section of a completely loaded HTML file is
	implemented.

	CSS file is not modified.	

Acknowledgements: 

	- Piazza questions and answers by Ming, TA's, and classmates

	- http://www.w3schools.com/json/json_http.asp
	  It helped me set up the general architecture of the code

	- Classnotes on Asynchronous JavaScript and XML

Hours spent: 

	2 hours