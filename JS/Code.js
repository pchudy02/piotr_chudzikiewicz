var ankieta = document.querySelector("#ankieta");
var x = 0;
ankieta.onclick = function()
{
    if(x==0)
    {
        var tanks = confirm("Czy interesujesz się czołgami?");
        var opinia = prompt("Tutaj wpisz swoją opinię na temat strony...");
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
    else
    {
        var sended2 = alert("Wysłałeś nam już ankietę :D");
    }
}
