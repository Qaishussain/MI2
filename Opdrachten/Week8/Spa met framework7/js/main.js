// Er zijn codes in mijn java documentb die van verschillende sites al w3school , framework 7  en nog andere komen
var counter = 1,
	muziek, naamX, naamO;
var myApp = new Framework7();
var $$ = Dom7;
// Add view
var mainView = myApp.addView('.view-main', {
	dynamicNavbar: true
});
var board = new Array(9);
var playerX, playerO;
var scoreX = 0,
	scoreO = 0;

$(document).ready(function () {

	var x = document.getElementsByClassName("toonNaam");
	muziek = document.getElementById("muziek");
	$('#muziek')[0].loop = true;
	$('#muziek')[0].play();

	//document.getElementById("speel").style.visibility = "hidden";
	//hide(document.getElementById('speel'));
	//init();
});

document.getElementById("button-black").onclick = function () {

	if (document.getElementById("XP").value == "" || document.getElementById("OP").value == "") {
		myApp.alert("Sorry, Gelieve namen in te geven", "Attention ");
		//document.getElementById("button-black").disabled=true;
		//this.location.back();
		//this.router.navigate.back();



	} else {
		//document.getElementById("button-black").disabled=false;

		document.getElementById("playButton").href = "speel.html";
		playerX = document.getElementById("XP").value;
		playerO = document.getElementById("OP").value;
		init();
		play();

	}
	return false;
};


myApp.onPageInit('speel', function (page) {
	document.getElementById("O").innerHTML = "Player O: " + playerO;
	document.getElementById("X").innerHTML = "Player X: " + playerX;
	init();
	play();

});

function init() {
	newGame();
	var down = "mousedown";
	var up = "mouseup";
	if ('createTouch' in document) {
		down = "touchstart";
		up = "touchend";
	}

	/* add event listeners */
	document.querySelector("input.button").addEventListener(up, newGame, false);
	var squares = document.getElementsByTagName("td");
	for (var s = 0; s < squares.length; s++) {
		squares[s].addEventListener(down, function (evt) {
			squareSelected(evt, getCurrentPlayer());
		}, false);

	}


	createBoard();
	setInitialPlayer();
}
// Functie om het spel te herstarten
function herstartFunction() {
	window.location.href = "Player.html";
}

function play() {
	muziek = document.getElementById("muziek");
	$('#muziek')[0].loop = true;
	$('#muziek')[0].play();
}
//Functie om de muziek te pauzeren en terug af te spelen
function pauseFunction() {
	if (document.getElementById('BtnPlay').clicked == true) {

		muziek = document.getElementById("muziek");
		$('#muziek')[0].loop = true;
		$('#muziek')[0].play();


	} else {
		return muziek.paused ? muziek.play() : muziek.pause();
	}

}

function createBoard() {


	if (window.localStorage && localStorage.getItem('tic-tac-toe-board')) {


		board = (JSON.parse(localStorage.getItem('tic-tac-toe-board')));
		for (var i = 0; i < board.length; i++) {
			if (board[i] != "") {
				fillSquareWithMarker(document.getElementById(i), board[i]);
			}
		}
	} else {
		for (var i = 0; i < board.length; i++) {
			board[i] = "";
			document.getElementById(i).innerHTML = "";
		}
	}
}


function squareSelected(evt, currentPlayer) {
	var square = evt.target;

	if (square.className.match(/marker/)) {
		myApp.alert("Sorry, that space is taken!  Please choose another square.", "Pasop !!");
		return;
	} else {
		fillSquareWithMarker(square, currentPlayer);
		updateBoard(square.id, currentPlayer);
		checkForWinner();
		switchPlayers();
	}
}


function fillSquareWithMarker(square, player) {
	var marker = document.createElement('div');

	marker.className = player + "-marker";
	square.appendChild(marker);
}

function updateBoard(index, marker) {
	board[index] = marker;


	var boardstring = JSON.stringify(board);


	localStorage.setItem('tic-tac-toe-board', boardstring);
	localStorage.setItem('last-player', getCurrentPlayer());
}



function declareWinner() {
	var winner = document.querySelector(".current-player").id;
	var winnernaam;

	if (winner == "X") {
		winnernaam = document.getElementById("XP").value;
		scoreX += 1;
		document.getElementById("ScoreX").innerHTML = scoreX;
		myApp.confirm('Congratulation!! Winner is ' + winnernaam, " New game?");
		newGame();

	} else {
		winnernaam = document.getElementById("OP").value;
		scoreO += 1;
		document.getElementById("ScoreO").innerHTML = scoreO;
		myApp.confirm('Congratulation!! Winner is ' + winnernaam, " New game?");
		newGame();

	}
	/*var tText="";
   
    tText += "<tr><td>" + na + "<\/td><td>" + results.rows.item(teller).score + "<\/td><\/tr>";
            
            $("#highscoreDB tbody").html(tText);
	console.log(scoreX);

	console.log(scoreO);*/

}

function weHaveAWinner(a, b, c) {
	if ((board[a] === board[b]) && (board[b] === board[c]) && (board[a] != "" || board[b] != "" || board[c] != "")) {
		setTimeout(declareWinner(), 100);
		return true;
	} else
		return false;
}

function checkForWinner() {
	/* check rows */
	var a = 0;
	var b = 1;
	var c = 2;
	while (c < board.length) {
		if (weHaveAWinner(a, b, c)) {
			return;
		}
		a += 3;
		b += 3;
		c += 3;
	}

	/* check columns */
	a = 0;
	b = 3;
	c = 6;
	while (c < board.length) {
		if (weHaveAWinner(a, b, c)) {
			return;
		}
		a += 1;
		b += 1;
		c += 1;
	}

	/* check diagonal recht */
	if (weHaveAWinner(0, 4, 8)) {
		return;
	}
	/* check diagonal links */
	if (weHaveAWinner(2, 4, 6)) {
		return;
	}


	if (!JSON.stringify(board).match(/,"",/)) {
		if (myApp.confirm("It's a draw. New game?", "Sad")) {
			newGame();
		}
	}
}

function getCurrentPlayer() {
	return document.querySelector(".current-player").id;
}


function setInitialPlayer() {
	var playerX = document.getElementById("X");
	var playerO = document.getElementById("O");
	playerX.className = "";
	playerO.className = "";

	if (!window.localStorage || !localStorage.getItem('last-player')) {
		playerX.className = "current-player";
		return;
	}

	var lastPlayer = localStorage.getItem('last-player');
	if (lastPlayer == 'X') {
		playerO.className = "current-player";
	} else {
		playerX.className = "current-player";
	}
}

function switchPlayers() {
	var playerX = document.getElementById("X");
	var playerO = document.getElementById("O");

	if (playerX.className.match(/current-player/)) {
		playerO.className = "current-player";
		playerX.className = "";
	} else {
		playerX.className = "current-player";
		playerO.className = "";
	}
}

function newGame() {

	localStorage.removeItem('tic-tac-toe-board');
	localStorage.removeItem('last-player');


	createBoard();
}
