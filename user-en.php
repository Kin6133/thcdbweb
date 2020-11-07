<!DOCTYPE html>
<html>
    <head>
        <title>User Page</title>
    </head>
    <body>
        <h1>Username : <?php echo $_GET["id"]; ?></h1>
        <h1>WCA ID : <?php if ($_GET["id"] == "KinCubing") {echo "2018PRON02";}?></h1>
    </body>
</html>