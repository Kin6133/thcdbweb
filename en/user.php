<!DOCTYPE html>
<html lang="en" id="html">
    <head>
    <link rel="stylesheet" href="../CSS/user.css">
        <title>User Page</title>
    </head>
    <body>
        <div class="menu">
            <ul>
                <img src="../Images/thailandcube.png" class="img">
                <li><a href="index.html">Home Page</a></li>
                <li><a href="competitors.html">Competitors</a></li>
                <li><a href="results.html">Results</a></li>
                <li><a href="scrambles.html">Scrambles</a></li>
                <li>Select Language
                    <div class="sel">
                        <ul>
                            <li><a href="../en/user.php">English (English)</a></li>
                            <li><a href="../th/user.php">Thai (ภาษาไทย)</a></li>
                            <li><a href="../jp/user.php">Japanese (日本語)</a></li>
                        </ul>
                    </div>
                </li>
                <li class="act"><?php echo $_GET["user"]; ?><a href="index.html"> Logout</a></li>
            </ul>
        </div>
        <h1>User Profile :</h1>
        <h2>Username : <?php echo $_GET["id"]; ?></h2>
        <h2>WCA ID : <?php if ($_GET["user"] == "KinCubing") {echo "2018PRON02";}?></h2>
    </body>
</html>