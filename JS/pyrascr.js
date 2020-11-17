var show = document.getElementById("show");
function rand(items)
{
    return items[Math.floor(Math.random()*items.length)];
}
function gen()
{
    var nosk = ["R ","R' ","L ","L' ","U ","U' ","B ","B' "];
    var nopyr = ["r ","r' ",""];
    var nopyl = ["l ","l' ",""];
    var nopyu = ["u ","u' ",""];
    var nopyb = ["b ","b' ",""];
    var spy1 = rand(nopyr);
    var spy2 = rand(nopyl);
    var spy3 = rand(nopyu);
    var spy4 = rand(nopyb);
    var ssk1 = rand(nosk);
    if (ssk1 == "R " || ssk1 == "R' ")
    {
        var nosk = ["L ","L' ","U ","U' ","B ","B' "];
        var ssk2 = rand(nosk);
    }
    if (ssk1 == "L " || ssk1 == "L' ")
    {
        var nosk = ["R ","R' ","U ","U' ","B ","B' "];
        var ssk2 = rand(nosk);
    }
    if (ssk1 == "U " || ssk1 == "U' ")
    {
        var nosk = ["L ","L' ","R ","R' ","B ","B' "];
        var ssk2 = rand(nosk);
    }
    if (ssk1 == "B " || ssk1 == "B' ")
    {
        var nosk = ["L ","L' ","U ","U' ","R ","R' "];
        var ssk2 = rand(nosk);
    }
    if (ssk2 == "R " || ssk2 == "R' ")
    {
        var nosk = ["L ","L' ","U ","U' ","B ","B' "];
        var ssk3 = rand(nosk);
    }
    if (ssk2 == "L " || ssk2 == "L' ")
    {
        var nosk = ["R ","R' ","U ","U' ","B ","B' "];
        var ssk3 = rand(nosk);
    }
    if (ssk2 == "U " || ssk2 == "U' ")
    {
        var nosk = ["L ","L' ","R ","R' ","B ","B' "];
        var ssk3 = rand(nosk);
    }
    if (ssk2 == "B " || ssk2 == "B' ")
    {
        var nosk = ["L ","L' ","U ","U' ","R ","R' "];
        var ssk3 = rand(nosk);
    }
    if (ssk3 == "R " || ssk3 == "R' ")
    {
        var nosk = ["L ","L' ","U ","U' ","B ","B' "];
        var ssk4 = rand(nosk);
    }
    if (ssk3 == "L " || ssk3 == "L' ")
    {
        var nosk = ["R ","R' ","U ","U' ","B ","B' "];
        var ssk4 = rand(nosk);
    }
    if (ssk3 == "U " || ssk3 == "U' ")
    {
        var nosk = ["L ","L' ","R ","R' ","B ","B' "];
        var ssk4 = rand(nosk);
    }
    if (ssk3 == "B " || ssk3 == "B' ")
    {
        var nosk = ["L ","L' ","U ","U' ","R ","R' "];
        var ssk4 = rand(nosk);
    }
    if (ssk4 == "R " || ssk4 == "R' ")
    {
        var nosk = ["L ","L' ","U ","U' ","B ","B' "];
        var ssk5 = rand(nosk);
    }
    if (ssk4 == "L " || ssk4 == "L' ")
    {
        var nosk = ["R ","R' ","U ","U' ","B ","B' "];
        var ssk5 = rand(nosk);
    }
    if (ssk4 == "U " || ssk4 == "U' ")
    {
        var nosk = ["L ","L' ","R ","R' ","B ","B' "];
        var ssk5 = rand(nosk);
    }
    if (ssk4 == "B " || ssk4 == "B' ")
    {
        var nosk = ["L ","L' ","U ","U' ","R ","R' "];
        var ssk5 = rand(nosk);
    }
    if (ssk5 == "R " || ssk5 == "R' ")
    {
        var nosk = ["L ","L' ","U ","U' ","B ","B' "];
        var ssk6 = rand(nosk);
    }
    if (ssk5 == "L " || ssk5 == "L' ")
    {
        var nosk = ["R ","R' ","U ","U' ","B ","B' "];
        var ssk6 = rand(nosk);
    }
    if (ssk5 == "U " || ssk5 == "U' ")
    {
        var nosk = ["L ","L' ","R ","R' ","B ","B' "];
        var ssk6 = rand(nosk);
    }
    if (ssk5 == "B " || ssk5 == "B' ")
    {
        var nosk = ["L ","L' ","U ","U' ","R ","R' "];
        var ssk6 = rand(nosk);
    }
    if (ssk6 == "R " || ssk6 == "R' ")
    {
        var nosk = ["L ","L' ","U ","U' ","B ","B' "];
        var ssk7 = rand(nosk);
    }
    if (ssk6 == "L " || ssk6 == "L' ")
    {
        var nosk = ["R ","R' ","U ","U' ","B ","B' "];
        var ssk7 = rand(nosk);
    }
    if (ssk6 == "U " || ssk6 == "U' ")
    {
        var nosk = ["L ","L' ","R ","R' ","B ","B' "];
        var ssk7 = rand(nosk);
    }
    if (ssk6 == "B " || ssk6 == "B' ")
    {
        var nosk = ["L ","L' ","U ","U' ","R ","R' "];
        var ssk7 = rand(nosk);
    }
    if (ssk7 == "R " || ssk7 == "R' ")
    {
        var nosk = ["L ","L' ","U ","U' ","B ","B' "];
        var ssk8 = rand(nosk);
    }
    if (ssk7 == "L " || ssk7 == "L' ")
    {
        var nosk = ["R ","R' ","U ","U' ","B ","B' "];
        var ssk8 = rand(nosk);
    }
    if (ssk7 == "U " || ssk7 == "U' ")
    {
        var nosk = ["L ","L' ","R ","R' ","B ","B' "];
        var ssk8 = rand(nosk);
    }
    if (ssk7 == "B " || ssk7 == "B' ")
    {
        var nosk = ["L ","L' ","U ","U' ","R ","R' "];
        var ssk8 = rand(nosk);
    }
    if (ssk8 == "R " || ssk8 == "R' ")
    {
        var nosk = ["L ","L' ","U ","U' ","B ","B' "];
        var ssk9 = rand(nosk);
    }
    if (ssk8 == "L " || ssk8 == "L' ")
    {
        var nosk = ["R ","R' ","U ","U' ","B ","B' "];
        var ssk9 = rand(nosk);
    }
    if (ssk8 == "U " || ssk8 == "U' ")
    {
        var nosk = ["L ","L' ","R ","R' ","B ","B' "];
        var ssk9 = rand(nosk);
    }
    if (ssk8 == "B " || ssk8 == "B' ")
    {
        var nosk = ["L ","L' ","U ","U' ","R ","R' "];
        var ssk9 = rand(nosk);
    }
    if (ssk9 == "R " || ssk9 == "R' ")
    {
        var nosk = ["L ","L' ","U ","U' ","B ","B' "];
        var ssk10 = rand(nosk);
    }
    if (ssk9 == "L " || ssk9 == "L' ")
    {
        var nosk = ["R ","R' ","U ","U' ","B ","B' "];
        var ssk10 = rand(nosk);
    }
    if (ssk9 == "U " || ssk9 == "U' ")
    {
        var nosk = ["L ","L' ","R ","R' ","B ","B' "];
        var ssk10 = rand(nosk);
    }
    if (ssk9 == "B " || ssk9 == "B' ")
    {
        var nosk = ["L ","L' ","U ","U' ","R ","R' "];
        var ssk10 = rand(nosk);
    }
    if (ssk10 == "R " || ssk10 == "R' ")
    {
        var nosk = ["L ","L' ","U ","U' ","B ","B' "];
        var ssk11 = rand(nosk);
    }
    if (ssk10 == "L " || ssk10 == "L' ")
    {
        var nosk = ["R ","R' ","U ","U' ","B ","B' "];
        var ssk11 = rand(nosk);
    }
    if (ssk10 == "U " || ssk10 == "U' ")
    {
        var nosk = ["L ","L' ","R ","R' ","B ","B' "];
        var ssk11 = rand(nosk);
    }
    if (ssk10 == "B " || ssk10 == "B' ")
    {
        var nosk = ["L ","L' ","U ","U' ","R ","R' "];
        var ssk11 = rand(nosk);
    }
    show.innerHTML = ssk1 + ssk2 + ssk3 + ssk4 + ssk5 + ssk6 + ssk7 + ssk8 + ssk9 + ssk10 + ssk11 + spy1 + spy2 + spy3 + spy4;
}