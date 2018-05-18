"use strict";
/*global Framework7, Dom7 */
var muziek;
var myApp = new Framework7();
var $$ = Dom7;
var idActiviteitLeuk = 0
var idActiviteitCommentaar = 0;
// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
	muziek = document.getElementById("muziek");
    $('#muziek')[0].loop = true;
    $('#muziek')[0].play();
});

myApp.onPageInit('speel', function (page) {
  // "page" variable contains all required information about loaded and initialized page 
    init();

});
myApp.onPageInit('Rule', function (page) {
  // "page" variable contains all required information about loaded and initialized page 
    init();

});
myApp.onPageInit('info', function (page) {
  // "page" variable contains all required information about loaded and initialized page 
    init();

})