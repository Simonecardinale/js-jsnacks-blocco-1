var vittorieUtente = 0;
var vittorieComputer = 0;

var array = ["carta", "forbici", "sasso"];

var element = document.getElementById("again");
element.addEventListener('click',
function() {
    var utente = parseInt(prompt ("Inserisci il relativo numero per scegliere carta, forbici o sasso. Carta = 0, sasso = 1, forbici = 2"));

    while (utente < 0 || utente > 2) {
        alert("Inserire valore corretto");
        var utente = prompt ("Scegli tra carta, forbici e sasso");
    }
    
    if (utente == 0) {
        document.getElementById("user_choice").innerHTML ="utente sceglie " + array[0];
    } else if ( utente == 1) {
        document.getElementById("user_choice").innerHTML = "utente sceglie " + array[1];
    } else {
        document.getElementById("user_choice").innerHTML = "utente sceglie " + array[2];
    }
    
    var sceltautente = array[utente];
    
    var computer = Math.floor(Math.random()* (2 - 0 + 1) + 0);
    var sceltacomputer = array[computer];
    document.getElementById("computer_choice").innerHTML = "computer sceglie " + sceltacomputer;
    
    
    
    if ((sceltacomputer == "carta" && sceltautente == "sasso") || (sceltacomputer == "forbici" && sceltautente == "carta") || (sceltacomputer == "sasso" && sceltautente == "forbici")) {
        vittorieComputer++;
        document.getElementById("vincitore").innerHTML = "Il vincitore è il computer" ;
    } else if ((sceltacomputer == "forbici" && sceltautente == "sasso") || (sceltacomputer == "sasso" && sceltautente == "carta") || (sceltacomputer == "carta" && sceltautente == "forbici")) {
        vittorieUtente++;
        document.getElementById("vincitore").innerHTML = "Il vincitore è l'utente";
    } else {
        document.getElementById("vincitore").innerHTML = "Pareggio!"
    }

    document.getElementById("computer_counter").innerHTML = "Vittorie computer: " + vittorieComputer;
    document.getElementById("user_counter").innerHTML = "Vittorie utente: " + vittorieUtente;
    
}
);





