"use strict";
/*global document*/

function myFunction() {
    var img = document.getElementById("Image");
    if (img.style.display === "block") {
        img.style.display = "none";
		 document.getElementById("btn").innerText  = "Hide";
    } else {
		 document.getElementById("btn").innerText  = "Show";
        img.style.display = "block";
    }
	
}
