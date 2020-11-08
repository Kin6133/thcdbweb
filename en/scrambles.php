<!DOCTYPE html>
<html>
    <?php include "headscr.html"; ?>
    <h1><a href="scrambles.php?compid=THC2014">Scrambles for Thailand Championship 2014</a></h1>
    <?php 
        $gotcomp = $_GET["compid"];
        if ($gotcomp == "THC2014") 
        {
           include("thc2014.html");
        }
    ?>
</html>