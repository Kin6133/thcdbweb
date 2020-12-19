<?php 
    include("index.html");
    $newsid = $_GET["news"];
    if ($newsid == "001")
    {
        include("News/001.html");
    }
    else if ($newsid == "002")
    {
        include("News/002.html");
    }
    include("comptable.html");
?>