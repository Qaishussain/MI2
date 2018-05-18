function Toevoegen()
{
    // create vars
    var number = document.getElementById("nummer").value;
    var name = document.getElementById("naam").value;
    var birthday = document.getElementById("datum").value;
    var cookies = [];
    if(document.cookie!="")
    {
        cookies = JSON.parse(document.cookie);
    }
    
    if(cookies.length==0)
    {
        cookies = [];
    }
    cookies.push({"number":number, "name" : name, "birthday" : birthday});
    
    document.cookie= JSON.stringify(cookies);
    
    document.getElementById("Gebruiker1").innerHTML = "";
    
    var table = JSON.parse(document.cookie);
    
    for(i=0;i<table.length;i++)
    {
        document.getElementById("Gebruiker1").innerHTML += table[i].name + " " + table[i].number + " " + table[i].birthday + "<br>";
    }
    
   
    
    

    
   
    
    
}