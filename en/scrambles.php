<!DOCTYPE html>
<html>
    <?php include "headscr.html"; ?>
    <h1>Note : Events are ordered by competitions' schedules.</h1>
    <h1>
            <form action="scrambles.php">
                <select name="compid">
                    <option>-Select the competition-</option>
                    <option value="FMCASIA2019">FMC Asia 2019</option>
                    <option value="FMCASIA2018">FMC Asia 2018</option>
                    <option value="THC2014">Thailand Championship 2014</option>
                </select>
                <input type="submit">
            </form>
    </h1>
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