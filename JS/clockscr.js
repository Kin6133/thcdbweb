var show = document.getElementById("show");
function rand(items)
{
    return items[Math.floor(Math.random()*items.length)];
}
function gen()
{
    var nocn = ["5-","4-","3-","2-","1-","0+","1+","2+","3+","4+","5+","6+"];
    var nocpin = ["UR","UR DR DL UL","UR DR DL","UR DR UL","UR DL UL","UR DR","UR DL","UR UL","DR","DR DL UL","DR DL","DR UL","DL","DL UL","UL"];
    show.innerHTML = "UR" + rand(nocn) + " DR" + rand(nocn) + " DL" + rand(nocn) + " UL"+rand(nocn) + " U" + rand(nocn) + " R" + rand(nocn) + " D" + rand(nocn) + " L" + rand(nocn) + " ALL" + rand(nocn) + " y2" + " U" + rand(nocn) + " R" +rand(nocn) + " D" + rand(nocn) + " L" + rand(nocn) + " ALL" + rand(nocn) + " " + rand(nocpin);
}