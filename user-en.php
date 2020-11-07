<!DOCTYPE html>
<html lang="en" id="html">
    <head>
    <link rel="stylesheet" href="CSS/user.css">
        <title>User Page</title>
    </head>
    <body>
        <div class="menu">
            <ul>
                <img src="Images/thailandcube.png" class="img">
                <li><a href="index-en.html">Home Page</a></li>
                <li><a href="competitors.html">Competitors</a></li>
                <li><a href="results.html">Results</a></li>
                <li><a href="scrambles.html">Scrambles</a></li>
                <li>Select Language
                    <div class="sel">
                        <ul>
                            <li><a href="user-en.php">English (English)</a></li>
                            <li><a href="user-th.php">Thai (ภาษาไทย)</a></li>
                            <li><a href="user-jp.php">Japanese (日本語)</a></li>
                        </ul>
                    </div>
                </li>
                <li class="act"><?php echo $_GET["id"]; ?><a href="index-en.html">Logout</a></li>
            </ul>
        </div>
        <h1>Username : <?php echo $_GET["id"]; ?></h1>
        <h1>WCA ID : <?php if ($_GET["id"] == "KinCubing") {echo "2018PRON02";}?></h1>
    </body>
</html>