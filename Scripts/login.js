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
    if (us.value == "KinCubing")
    {
        if (pw.value == "KinCubing30042549" && html.lang == "en")
        {
            form.action = "user-en.php";
        }
        else if (pw.value == "KinCubing30042549" && html.lang == "th")
        {
            form.action = "user-th.php";
        }
        else if (pw.value == "KinCubing30042549" && html.lang == "jp")
        {
            form.action = "user-jp.php";
        }
        else
        {
            form.action = "login-en.html";
            alert("Wrong password or username.");
        }
    }
    else
    {
        form.action = "login-en.html";
        alert("Wrong password or username.");
    }
}