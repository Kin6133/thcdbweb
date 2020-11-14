function show()
{
    var pw = document.getElementById("password");
    if (pw.type == "password")
    {
        pw.type = "text";
    }
    else 
    {
        pw.type = "password";
    }
}
 
function showr()
{
    var pw = document.getElementById("rpassword");
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
    var user = document.getElementById("username");
    var pw = document.getElementById("password");
    var rpw = document.getElementById("rpassword");
    var link = document.getElementById("button");
    if (pw.value == rpw.value)
    {
        pass = btoa(pw.value);
        link.href = "profile.php?username=" + user.value + "&password=" + pass;
    }
    else
    {
        link.href = "register.php";
        alert("Passwords don't match.");
    }
}