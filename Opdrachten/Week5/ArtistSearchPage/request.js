"use strict";
/*global document,$ */
var output = "";
$(function () {
	// enter
	$("#search").on('click', function () {

		var searchTerm = $("#searchTerm").val();
		var url = "http://www.songsterr.com/a/ra/songs/byartists.json?artists=" + searchTerm;
		$.ajax({
			url: url,
			type: 'GET',
			async: false,
			dataType: "json",
			success: function (data, status, jqXHR) {
				//console.log(data);
				//$("#output").html();
				
				for (var i = 0 ; i <= data.length; i++) {
					var odj = data.title[i];
					for(var y = 0; i <= odj.length; y++) {
						
						output += odj.type+" "+ odj[y] + "br " ;
					}
					
				 
				}

//document.getElementById("#output") = "output";
				console.log("gelukt");

			}

		});

	});
});
