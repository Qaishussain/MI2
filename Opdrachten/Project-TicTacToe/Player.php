
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="image/TicTacToe.png">
    <meta name="viewport" content="width=device-width, initial-scale=1,  minimum-scale=1,  minimal-ui"> 
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <title>Tic Tac Toe</title>      
   <link rel="stylesheet" href="css/framework7.ios.min.css">
    <!-- Path to Framework7 iOS related color styles -->
    <link rel="stylesheet" href="css/framework7.ios.colors.min.css">
    <!-- Path to your custom app styles-->
      
      <link rel="stylesheet" href="css/main.css" type="text/css">
      
  <script src="js/jquery-1.11.1.min.js"></script>
  </head>
    
  <body>
    <!-- Status bar overlay for full screen mode (PhoneGap) -->
    <div class="statusbar-overlay"></div>
    <!-- Panels overlay-->
    <div class="panel-overlay"></div>
    <div class="panel panel-right panel-cover">
        <div class="content-block">
            <div id="highscoreDB">
                <div>
                    <h1>Highscore</h1> </div>
                <table id="highscoreTableDB">
                    <thead>
                        <tr>
                            <th>Naam speler</th>
                            <th>Score speler</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
<?php try {
        // connect to mysql
        $pdoConnect = new PDO("mysql:host=localhost;dbname=scoretictactoe", "root", "");
    } catch (PDOException $exc) {
        echo $exc->getMessage();
        exit();
    }
    // mysql query to insert data
    $pdoQuery = "SELECT * FROM score";
    $pdoResult = $pdoConnect -> prepare($pdoQuery);
		$pdoResult -> execute();
		$res = $pdoResult -> fetchAll(PDO::FETCH_ASSOC);
  foreach($res as $row){
   
?>
     
                            <td><?php echo $row['NaamSpeler'] ;?></td>
                            <td><?php echo $row['aantalGewonnen']; ?></td>
                        </tr>
                    </tbody>
                    <?php }?>
                </table>
                
            </div>
        </div>
    </div>
    <div class="panel panel-left panel-reveal">
      <div id="menuItems" class="content-block">Menu items</div>
		<p><a href="info.html" class="home">Info</a></p>
        <p><a href="Rules.html" class="home">Regels</a></p>
         <footer>
   
                   <div class="imgDiv"><img src="image/TicTacToe.png" alt="Nature" class="responsive"></div> 
                    <p id="textRule">&copy; Copyright by Qais Hussain.</p>
                                   	<p>
<a href="http://jigsaw.w3.org/css-validator/check/referer">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!" />
    </a>
</p>
 	<p>
<a href="https://upload.wikimedia.org/wikipedia/commons/b/bb/W3C_HTML5_certified.png">
    <img style="border:0;width:88px;height:31px"
        src="https://upload.wikimedia.org/wikipedia/commons/b/bb/W3C_HTML5_certified.png"
        alt="Valid Html!" />
    </a>
</p>
         </footer>
       
    </div>
    <div class="views">
      <div class="view view-main">
        <div class="navbar">
          <div class="navbar-inner">
            <div class="center sliding">Tic Tac Toe</div>
            <div class="right">
              <a href="#" class="link icon-only open-panel"> <i class="icon icon-bars" ></i></a>
            </div>
          </div>
        </div>
          <div class="pages navbar-through toolbar-through">
          <div data-page="index" class="page">
            <div class="page-content">
           <!-- <div class="content-block-title">Tic Tac Toe</div>-->
              <div class="content-block">
                <!--<div class="content-block-inner">-->
              <div id="playersinvoer">
              <script>
                $.ajax
  ({
   type: "POST",
   url: "php/upload.php",
   data: dataString,
   cache: false,
   success: function(html)
   {
      document.getElementById("XP").innerHTML = html;
	  document.getElementById("OP").innerHTML = html;
   } 
   });</script>
						<form  class="fly-in-text hidden">
							<header class="special">
								<h3>Gelieve Naam van de spelers in te geven </h3>
							</header>
							<div>
								<label>Speler X</label>
								<input name="PlayerX" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" id="XP" />
							</div>
							<div><label>Speler O</label>
								<input name="playerO" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" id="OP" />
							</div>

							<div id="aSpecial"><a href="#" id="playButton"> <input type="button" name="play"  value="Play" class="buttonPlay" id="button-black"/> </a></div>


						</form>
						
						<audio preload="auto" id="muziek">
                            <source src="song/Eminem_Space_Bound.mp3" type="audio/mp3">
                            <source src="Eminem_Space_Bound.ogg" type="audio/ogg"> </audio>
					
                 </div>
                
                  </div>
                   
            </div>
          </div>
        </div>
                    	
                     	<div class="toolbar">
				<div class="toolbar-inner"> <a href="#" class="button" onclick="herstartFunction()">Herstarten</a> <a href="#" id ="BtnPlay" class="button" onclick="pauseFunction()">Muziek Uit/Aan</a> <a href="#" data-panel="right" class="button open-panel">Scoreboard</a> </div>
			</div>
     
      </div>
    </div>
   <script type="text/javascript" src="js/framework7.min.js"></script>
    <!-- Path to your app js-->   
      <script src="js/main.js" type="text/javascript"></script>
  </body>
</html>