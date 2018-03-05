"use strict";
/*global document*/

function myFunction() {
    var img = document.getElementById("Image");
    if (img.style.display === "block") {
        img.style.display = "none";
		 document.getElementById("btn").innerText  = "Show";
		
    } else {
		 document.getElementById("btn").innerText  = "Hide";
        img.style.display = "block";
    }
	
}

