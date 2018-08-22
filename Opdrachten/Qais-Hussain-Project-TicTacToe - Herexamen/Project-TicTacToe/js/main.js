"use strict";
var music;
var mijnApp = new Framework7();
var $$ = Dom7;
// Add view
var mainView = mijnApp.addView('.view-main', {
	dynamicNavbar: true
});
var boarder = new Array(9);
var spelerX, spelerO;
var scoreX = 0,
	scoreO = 0;

$(document).ready(function () {

	var x = document.getElementsByClassName("toonNaam");
	music = document.getElementById("music");
	$('#music')[0].loop = true;
	$('#music')[0].play();

	//document.getElementById("speel").style.visibility = "hidden";
	//hide(document.getElementById('speel'));
	//initalize();
});

document.getElementById("button-black").onclick = function () {

	if (document.getElementById("XP").value === "" || document.getElementById("OP").value === "") {
		mijnApp.alert("Sorry, Gelieve namen in te geven", "Attention ");
		//document.getElementById("button-black").disabled=true;
		//this.location.back();
		//this.router.navigate.back();



	} else {
		//document.getElementById("button-black").disabled=false;

		document.getElementById("playButton").href = "speel.html";
		spelerX = document.getElementById("XP").value;
		spelerO = document.getElementById("OP").value;
		initalize();
		play();

	}
	return false;
};


mijnApp.onPageInit('speel', function (page) {
	document.getElementById("O").innerHTML = "O: " + spelerO;
	document.getElementById("X").innerHTML = "X: " + spelerX;
	initalize();
	play();

});

function initalize() {
	Herspel();
	var downMouse = "mousedown";
	var upMouse = "mouseup";
	if ('createTouch' in document) {
		downMouse = "touchstart";
		upMouse = "touchend";
	}

	
	document.querySelector("input.button").addEventListener(upMouse, Herspel, false);
	var blokken = document.getElementsByTagName("td");
	for (var s = 0; s < blokken.length; s++) {
		blokken[s].addEventListener(downMouse, function (specialspecialEvt) {
			geselecteerdblok(specialspecialEvt, haalaanwezigPlayer());
		}, false);

	}


	MaakBoard();
	zetPlayer();
}
//  herstarten
function herstartenfunctie() {
	window.location.href = "index.html";
}

function play() {
	music = document.getElementById("music");
	$('#music')[0].loop = true;
	$('#music')[0].play();
}
// music te pauzeren
function pauseFunction() {
	if (document.getElementById('BtnPlay').clicked == true) {

		music = document.getElementById("music");
		$('#music')[0].loop = true;
		$('#music')[0].play();


	} else {
		return music.paused ? music.play() : music.pause();
	}

}

function MaakBoard() {


	if (window.localStorage && localStorage.getItem('tic-tac-toe-board')) {


		boarder = (JSON.parse(localStorage.getItem('tic-tac-toe-board')));
		for (var q = 0; q < boarder.length; q++) {
			if (boarder[q] != "") {
				blokvullen(document.getElementById(q), boarder[q]);
			}
		}
	} else {
		for (var q = 0; q < boarder.length; q++) {
			boarder[q] = "";
			document.getElementById(q).innerHTML = "";
		}
	}
}


function geselecteerdblok(specialspecialEvt, aanwezigPlayer) {
	var blok = specialspecialEvt.target;

	if (blok.className.match(/marker/)) {
		mijnApp.alert("Deze plaats is al genomen, gebruik een andere plaats", "Pasop !!");
		return;
	} else {
		blokvullen(blok, aanwezigPlayer);
		boardupdaten(blok.id, aanwezigPlayer);
		zoekVoorWinaar();
		verplaatsPlayer();
		
	}
}


function blokvullen(blok, speler) {
	var markeer = document.createElement('div');

	markeer.className = speler + "-marker";
	blok.appendChild(markeer);
}

function boardupdaten(index, markeer) {
	boarder[index] = markeer;


	var boardstring = JSON.stringify(boarder);


	localStorage.setItem('tic-tac-toe-board', boardstring);
	localStorage.setItem('last-player', haalaanwezigPlayer());
}



function declareerWinnaar() {
	var winner = document.querySelector(".current-player").id;
	var winnernaam;

	if (winner == "X") {
		winnernaam = document.getElementById("XP").value;
		scoreX += 1;
		document.getElementById("ScoreX").innerHTML = scoreX;
        UpdateWinnaarScore(winnernaam);
        mijnApp.alert('responseData', "Foutmelding");
		mijnApp.confirm('Congratulation!! Winner is ' + winnernaam, " New game?");
		Herspel();
        

	} else {
		winnernaam = document.getElementById("OP").value;
		scoreO += 1;
		document.getElementById("ScoreO").innerHTML = scoreO;
        UpdateWinnaarScore(winnernaam);
        mijnApp.alert('responseData', "Foutmelding");
		mijnApp.confirm('Congratulation!! Winner is ' + winnernaam, " New game?");
       
		Herspel();
        

	}
	/*var tText="";
   
    tText += "<tr><td>" + na + "<\/td><td>" + results.rows.item(teller).score + "<\/td><\/tr>";
            
            $("#highscoreDB tbody").html(tText);
	console.log(scoreX);

	console.log(scoreO);*/

}

function UpdateWinnaarScore(winnernaam){
    
        var data = {};
    data.bewerking = "upload";
        data.name = winnernaam; 
        $.ajax({
            type: 'POST'
            , url: '../php/upload.php'
            , crossDomain: true
            , data: data
            , withCredentials: false
            , success: function (responseData, textStatus, jqXHR) {
            
            
            }
            , error: function (responseData, textStatus, errorThrown) {
                if (responseData.status === 0) {
                    mijnApp.alert('Geen internetverbinding', "Foutmelding");
                }
                else {
                    mijnApp.alert('De server is momenteel niet toegankelijk', "Foutmelding");
                }
            }
        });
    }
 

function hebbenWinnaar(aBlok, bBlok, cBlok) {
	if ((boarder[aBlok] === boarder[bBlok]) && (boarder[bBlok] === boarder[cBlok]) && (boarder[aBlok] != "" || boarder[bBlok] != "" || boarder[cBlok] != "")) {
		setTimeout(declareerWinnaar(), 120);
		return true;
	} else
		return false;
}

function zoekVoorWinaar() {
	
	var aBlok = 0;
	var bBlok = 1;
	var cBlok = 2;
	while (cBlok < boarder.length) {
		if (hebbenWinnaar(aBlok, bBlok, cBlok)) {
			return;
		}
		aBlok += 3;
		bBlok += 3;
		cBlok += 3;
	}

	/* kolomen checken*/
	aBlok = 0;
	bBlok = 3;
	cBlok = 6;
	while (cBlok < boarder.length) {
		if (hebbenWinnaar(aBlok, bBlok, cBlok)) {
			return;
		}
		aBlok += 1;
		bBlok += 1;
		cBlok += 1;
	}

	/* diagnoool checken*/
	if (hebbenWinnaar(0, 4, 8)) {
		return;
	}

	if (hebbenWinnaar(2, 4, 6)) {
		return;
	}


	if (!JSON.stringify(boarder).match(/,"",/)) {
		if (mijnApp.confirm(" Geen winnaar . New game?", "Spijtig")) {
			Herspel();
		}
	}
}

function haalaanwezigPlayer() {
	return document.querySelector(".current-player").id;
}


function zetPlayer() {
	var spelerX = document.getElementById("X");
	var spelerO = document.getElementById("O");
	spelerX.className = "";
	spelerO.className = "";

	if (!window.localStorage || !localStorage.getItem('last-player')) {
		spelerX.className = "current-player";
		return;
	}

	var laatstespeler = localStorage.getItem('last-player');
	if (laatstespeler == 'X') {
		spelerO.className = "current-player";
	} else {
		spelerX.className = "current-player";
	}
}

function verplaatsPlayer() {
	var spelerX = document.getElementById("X");
	var spelerO = document.getElementById("O");

	if (spelerX.className.match(/current-player/)) {
		spelerO.className = "current-player";
		spelerX.className = "";
	} else {
		spelerX.className = "current-player";
		spelerO.className = "";
	}
}

function Herspel() {

	localStorage.removeItem('tic-tac-toe-board');
	localStorage.removeItem('last-player');


	MaakBoard();
}
