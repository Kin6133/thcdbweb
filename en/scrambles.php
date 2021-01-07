<!DOCTYPE html>
<html>
    <?php include "headscr.html"; ?>
    <h1>Note : Events are ordered by competitions' schedules.</h1>
    <h1>
            <form action="scrambles.php">
                <select name="compid">
                    <option value="SELECTION">-Select the competition-</option>
                    <option value="FMCASIA2019">FMC Asia 2019</option>
                    <option value="THC2019">Thailand Championship 2019</option>
                    <option value="TH10THA2019">Thailand Championship 2019</option>
                    <option value="PBQT2019">Please Be Quiet Thailand 2019</option>
                    <option value="BO2019">Bangkok Open 2019</option>
                    <option value="FMCASIA2018">FMC Asia 2018</option>
                    <option value="THC2018">Thailand Championship 2018</option>
                    <option value="BCDS2018">Bangkok Cube Day Summer 2018</option>
                    <option value="THC2014">Thailand Championship 2014</option>
                </select>
                <input type="submit">
            </form>
    </h1>
    <?php 
        $gotcomp = $_GET["compid"];
        $mbld = $_GET["scr"];
        if ($gotcomp == "THC2014") 
        {
           include("thc2014.html");
        }
        elseif ($gotcomp == "FMCASIA2018")
        {
            include("fmcasia2018.html");
        }
        elseif ($gotcomp == "FMCASIA2019")
        {
            include("fmcasia2019.html");
        }
        elseif ($gotcomp == "NRSINGLE")
        {
            include("nrsingle.html");
        }
        else
        {
            echo("<h1></h1>");
        }
        if ($mbld == "MBLD")
        {
            include("preedambldnr.html");
        }
    ?>
</html>