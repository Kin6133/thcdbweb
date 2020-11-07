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
        if (pw.value == "KinCubing30042549")
        {
            form.action = "user.php";
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