var show = document.getElementById("show");
var show2 = document.createElement("h1");
var show3 = document.createElement("h1");
var show4 = document.createElement("h1");
var show5 = document.createElement("h1");
var show6 = document.createElement("h1");
var show7 = document.createElement("h1");
function rand(items)
{
    return items[Math.floor(Math.random()*items.length)];
}
function gen()
{
    show.innerHTML = "";
    show2.remove();
    show3.remove();
    show4.remove();
    show5.remove();
    show6.remove();
    show7.remove();
    var nomr = ["R++ ","R-- "];
    var nomd = ["D++ ","D-- "];
    var nomu = ["U","U'"];
    show.innerHTML = rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomu);
    show2.innerHTML = rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomu);
    show3.innerHTML = rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomu);
    show4.innerHTML = rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomu);
    show5.innerHTML = rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomu);
    show6.innerHTML = rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomu);
    show7.innerHTML = rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomr) + rand(nomd) + rand(nomu);
    document.getElementById("result").appendChild(show);  
    document.getElementById("result").appendChild(show2);  
    document.getElementById("result").appendChild(show3);  
    document.getElementById("result").appendChild(show4);  
    document.getElementById("result").appendChild(show5);  
    document.getElementById("result").appendChild(show6);  
    document.getElementById("result").appendChild(show7);  
}