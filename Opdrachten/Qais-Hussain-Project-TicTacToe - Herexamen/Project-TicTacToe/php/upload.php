<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');


//$conn = new PDO('mysql:host=localhost;dbname=ghislain', 'ghislain', 'k@h13l');

//$conn = new PDO('mysql:host=localhost;dbname=ghislain', 'ghislain', 'k@h13l');


    //$conn = new PDO("mysql:host=localhost;dbname=id5753310_scoretictactoe", "id5753310_tictactoe", "143QAIS54726q");
    // Set the PDO error mode to exception

   //$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
$servername = "localhost";
$username = "id5753310_tictactoe";
$password = "143QAIS54726q";
$dbname = "id5753310_scoretictactoe";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

if(isset($_POST['bewerking'])){
        $bewerking = $_POST['bewerking'];
    }

if (!$conn) {
    die(json_encode("Connection failed: " . mysqli_connect_error()));
} else {
    
    if ($bewerking == "upload") {
        if (isset($_POST['name'])) {
            
            $spelerNaam= $_POST['name'];
/* Attempt MySQL server connection. Assuming you are running MySQL

server with default setting (user 'root' with no password) */



 

// Attempt insert query execution



    
    //zoek naar de spelernaam in de database
    
	 //$result = $conn -> query("SELECT * FROM score where NaamSpeler='$spelerNaam'");
        
			 $sql ="SELECT * FROM score where NaamSpeler='$spelerNaam'"; 
			
			$result = $conn->query($sql);

			if ($result->num_rows > 0) {
                try{
                
                while($row = mysqli_fetch_assoc($result)){
                    $aantalGewonnen = $row['aantalGewonnen']; 
                    $int = (int)$aantalGewonnen;
                    $aantalGewonnen = $int + 1;
                $sql = "UPDATE score SET aantalGewonnen='$aantalGewonnen' WHERE NaamSpeler='$spelerNaam'";
                    
if (mysqli_query($conn, $sql)) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . mysqli_error($conn);
}
                }
                    
    }catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }
            

 
                
            }else{
                try{
    
    $sqlIn = "INSERT INTO score (NaamSpeler, aantalGewonnen) VALUES ('".$spelerNaam."','1')";
    // use exec() because no results are returned
if (mysqli_query($conn, $sqlIn)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sqlIn . "<br>" . mysqli_error($conn);
}

    }
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }
               
            }

	 

// Close connection
			
mysqli_close($conn);
            
}

}
}
?>