"use strict";
/*global document*/

    document.write("<table border='1' width='500' height='500' >");
    for(var i=1; i<=10; i++)
    {
    document.write("<tr>");
    for(var x=1; x<=10; x++)
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
    