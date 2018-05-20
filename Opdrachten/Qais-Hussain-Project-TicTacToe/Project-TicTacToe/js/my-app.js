"use strict";
/*global Framework7, Dom7 */
var music;
var mijnApp = new Framework7();
var $$ = Dom7;
var idActiviteitLeuk = 0
var idActiviteitCommentaar = 0;
// Add view
var mainView = mijnApp.addView('.view-main', {
    dynamicNavbar: true
	music = document.getElementById("music");
    $('#music')[0].loop = true;
    $('#music')[0].play();
});

mijnApp.onPageInit('speel', function (page) {
  // "page" variable contains all required information about loaded and initialized page 
    initalize();

});
mijnApp.onPageInit('Rule', function (page) {
  // "page" variable contains all required information about loaded and initialized page 
    initalize();

});
mijnApp.onPageInit('info', function (page) {
  // "page" variable contains all required information about loaded and initialized page 
    initalize();

})