<?php 
    $newsid = $_GET["news"];
    include("index.html");
    include("002ctx.html");
    if ($newsid == "002")
    {
        include("News/002.html");
    }
    include("001ctx.html");
    if ($newsid == "001")
    {
        include("News/001.html");
    }
    include("comptable.html");
?>