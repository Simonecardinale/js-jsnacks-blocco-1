var invitati = ["Ciccio", "Nino", "Franco", "Marcello"];

var utente = prompt("Come ti chiami?");

utenteIniziale = utente.charAt(0).toUpperCase();
utenteRestante = utente.substring(1);
utenteFinale = utenteIniziale + utenteRestante;

var message = false;

for (var i = 0; i < invitati.length; i++) {
    if (invitati[i] == utenteFinale) {
        message = true;
    } 
    
} 

if (message) {
    console.log("Tutto ok, puoi entrare!");
} else  {
    console.log("Vattene a casa");
}