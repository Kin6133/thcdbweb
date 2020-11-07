function show()
{
    var pw = document.getElementById("pw");
    if (pw.type === "password")
    {
        pw.type = "text";
    }
    else
    {
        pw.type = "password";
    }
}
function enter()
{
    var us = document.getElementById("umail");
    var pw = document.getElementById("pw");
    var form = document.getElementById("form");
    var html = document.getElementById("html");
    if (us.value == "KinCubing" || us.value == "phakhinthon@gmail.com" || us.value == "2018PRON02")
    {
        if (pw.value == "KinCubingAdmin30042549" && html.lang == "en")
        {
            us.name = "KinCubing";
            form.action = "welcome-en.php";
        }
        else if (pw.value == "KinCubingAdmin30042549" && html.lang == "th")
        {
            form.action = "welcome-th.php";
        }
        else if (pw.value == "KinCubingAdmin30042549" && html.lang == "jp")
        {
            form.action = "welcome-jp.php";
        }
        else
        {
            alert("Wrong password or username.");
        }
    }
    else
    {
        alert("Wrong password or username.");
    }
}