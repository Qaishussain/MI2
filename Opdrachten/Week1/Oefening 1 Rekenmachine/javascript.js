"use strict";
/*global document*/
var x = 20;
var y = 15;
var total;
optellen(x,y);
function optellen(x,y){
	total= x + y;
	return total;
}

document.write("<p>Optellen(+): </p>", total)
total = 0;
af(x,y);
function af(x,y){
	total= x - y;
	return total;
}
document.write("<p>Aftrekken(-):</p>",total)
total = 0;
maal(x,y);
function maal(x,y){
	total= x * y;
	return total;
}
document.write("<p>Vermenigvuldigen(*):</p>",total)
total = 0;
delen(x,y);
function delen(x,y){
	total= x / y;
	return total;
}
document.write("<p>Delen(/):</p>",total)