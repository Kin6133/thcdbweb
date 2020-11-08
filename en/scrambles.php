<!DOCTYPE html>
<html>
    <?php include "headscr.html"; ?>
    <h1>Note : Events are ordered by competitions' schedules.</h1>
    <h1><a href="scrambles.php?compid=FMCASIA2019">Scrambles for FMC Asia 2019</a></h1>
    <h1><a href="scrambles.php?compid=FMCASIA2018">Scrambles for FMC Asia 2018</a></h1>
    <h1><a href="scrambles.php?compid=THC2014">Scrambles for Thailand Championship 2014</a></h1>
    <?php 
        $gotcomp = $_GET["compid"];
        if ($gotcomp == "THC2014") 
        {
           include("thc2014.html");
        }
        elseif ($gotcomp == "FMCASIA2019")
        {
            include("fmcasia2019.html");
        }
        elseif ($gotcomp == "FMCASIA2018")
        {
            include("fmcasia2018.html");
        }
    ?>
</html>