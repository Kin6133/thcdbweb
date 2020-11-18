<?php include "scramblegenerator.html"?>
<?php 
$event = $_GET["event"];
if ($event == "333")
{
    include "scr333.html";
}
elseif ($event == "222")
{
    include "scr222.html";
}
elseif ($event == "fmc")
{
    include "scrfmc.html";
}
elseif ($event == "oh")
{
    include "scroh.html";
}
elseif ($event == "clock")
{
    include "scrclock.html";
}
elseif ($event == "mega")
{
    include "scrmega.html";
}
elseif ($event == "pyra")
{
    include "scrpyra.html";
}
elseif ($event == "skewb")
{
    include "scrskewb.html";
}
?>