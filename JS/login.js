function check()
{
    var pw = document.getElementById("pw");
    if (pw.type == "password")
    {
        pw.type = "text";
    }
    else 
    {
        pw.type = "password";
    }
}

function process()
{
    var log = document.getElementById("log");
    var user = document.getElementById("user");
    var pw = document.getElementById("pw");

    if (user.value.length == 0)
    {
        log.href = "login.html";
    }
    if (pw.value.length == 0)
    {
        log.href = "login.html";
    }
    else
    {
        log.href = "profile.php?username=" + user.value + "&password=" + btoa(pw.value);
    }
}