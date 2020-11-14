<!DOCTYPE html>
<html>
    <head>
        <title>Registration</title>
    </head>
    <body>
        <label for="username">Username : </label>
        <input type="text" id="username" name="username"><br>
        <label for="password">Password : </label>
        <input type="password" id="password" name="password"><br>
        Show Password <input type="checkbox" onclick="show()">
        <label for="rpassword">Repeat Password : </label>
        <input type="password" id="rpassword" name="rpassword"><br>
        Show Password <input type="checkbox" onclick="showr()"><br>
        <button type="submit" onclick="process()"><a href="register.php" id="button">Register</a></button>
        <script src="../JS/register.js">
        </script>
    </body>
</html>