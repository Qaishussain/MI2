"use strict";
/*global document*/

  function qais() {

var k = document.getElementById("Kolom").value;
var r = document.getElementById("Rij").value;

    document.write("<table border='1' width='500' height='500' >");
    for(var i=1; i<=r; i++)
    {
    document.write("<tr>");
    for(var x=1; x<=k; x++)
    {
    if((i+x)%2!=0)
    {
    document.write("<td bgcolor='#FFFFFF'></td>");
    }
    else
    {
    document.write("<td bgcolor='#000000'></td>");
    }
    }
    document.write("</tr>");
    }
    document.write("</table>");
    }
    