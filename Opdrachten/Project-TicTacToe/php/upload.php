<?php


    try {

        // connect to mysql

        $pdoConnect = new PDO("mysql:host=localhost;dbname=scoretictactoe", "root", "");
    } catch (PDOException $exc) {
        echo $exc->getMessage();
        die("no connection");
    }

    // get values form input text and number
	$nameX = $_POST['PlayerX'];
	$naamO = $_POST['PlayerO'];

    
    // mysql query to insert data

    $pdoQuery = "INSERT INTO `score`(`NaamSpeler`,`aantalGewonnen`) VALUES (:naamX, '0'), (:naamO, '0')";
    
    $pdoResult = $pdoConnect->prepare($pdoQuery);
    
    $pdoExec = $pdoResult->execute(array(":nameX"=>$name , ":naamO"=>$naamO));
    
        // check if mysql insert query successful
    if($pdoExec)
    {
        echo 'Data Inserted';
    }else{
        echo 'Data Not Inserted';
    }



?>