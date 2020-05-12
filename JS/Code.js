var ankieta = document.querySelector("#ankieta");
var x = 0;
ankieta.onclick = function()
{
    if(x==0)
    {
        var wyraz = prompt("Tutaj wpisz swoją opinię...");
        var sending = confirm("Czy napewno chcesz przesłać nam swoją ankietę?");
        if(sending == true)
        {
            var sended = alert("Twoja ankieta została przesłana ;P");
            x = x+1;
        }
        else
        {
            var nsended = alert("Czemu nie chcesz przesłać nam swojej ankiety?!");
        }
    }
}
