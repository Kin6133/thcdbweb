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