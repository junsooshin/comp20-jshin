# Messages

by Jun Soo (Derek) Shin

Comp 20 Lab 6

due 22 October 2015

## The Question:

Is it possible to request the data from a different origin (e.g., 
http://messagehub.herokuapp.com/) or from your local machine (from file:///) 
from using XMLHttpRequest? Why or why not?

- Yes, using this different origin showed the contents.

- No, using a local machine does not show the content and gives me:

<pre><code>lab.js:15 XMLHttpRequest cannot load file:///Users/JunSooShin/
Desktop/Informatik/comp20/comp20-jshin/messages/data.json. Cross origin requests 
are only supported for protocol schemes: http, data, chrome, chrome-extension, 
https, chrome-extension-resource.parse @ lab.js:15onload @ (index):12
</code></pre>

- XMLHttpRequest request follows a web-browser's the same-origin-policy, which 
  means that the scripts in one webpage will have acess to the data in another 
  page only if both pages have the same origin. The policy is an important 
  security mechanism that prevents a malicious document in one webpage from 
  gaining access to sensitive data in another webpage.

- It seemed that requesting data from a different origin should not work.
  However, there also seemed to be exceptions and workarounds to the policy
  like cross-domain requests. So this messagehub.herokuapp.com/messages.json
  must have been given permission.

- Since lab.js at Github does not share the same origin with the file from 
  my local machine, the requests from lab.js for the data there do not go 
  through.

## What has been correctly implemented and what has not:

- Using JavaScript's XMLHttpRequest object to load JSON data, parse the  JSON 
  file, and output the data to a section of a completely loaded HTML file is 
  implemented.

- CSS file is not modified.	

## Acknowledgements: 

- Piazza questions and answers by Ming, TA's, and classmates

- Helped me set up the general architecture of the code
  
  <http://www.w3schools.com/json/json_http.asp>

- Helped me answer the question above
  
  <https://en.wikipedia.org/wiki/XMLHttpRequest>
  
  <https://en.wikipedia.org/wiki/Same-origin_policy>
  
  <https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy>

- Classnotes on Asynchronous JavaScript and XML	  

## Hours spent: 

4 hours