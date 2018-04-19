"use strict";
/*global Framework7, Dom7 */
var myApp = new Framework7();
var $$ = Dom7;
var idActiviteitLeuk = 0
var idActiviteitCommentaar = 0;
// Add view
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

myApp.onPageInit('speel', function (page) {
  // "page" variable contains all required information about loaded and initialized page 
    init();
})