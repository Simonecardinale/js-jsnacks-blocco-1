
var difficoltà = parseInt(prompt("scegli la difficoltà scrivendo 1, 2, o 3"));

switch (difficoltà) {

    case 1:
        var computer = Math.floor(Math.random()*(1 + 100 - 1) + 1);
        console.log(computer);

        for (var i = 0; i < 4; i++) {
            var utente = parseInt(prompt("Inserisci un numero"));
            document.getElementById("utente_number").innerHTML += utente + " ";
        
            if (utente < computer) {
                alert("Hai scritto un numero più piccolo, riprova!");
            } else if (utente > computer) {
                alert("Hai scritto un numero più grande, riprova!");
            } else {
                alert("Complimenti hai indovinato");
                break;
            }
        
            if (i == 3) {
                alert("Hai terminato i tentativi a tua disposizione. Partita terminata");
            }
        
        }
        
        document.getElementById("computer_number").innerHTML = "Il numero scelto dal computer era " + computer;
    break;
    case 2:
        var computer = Math.floor(Math.random()*(1 + 50 - 1) + 1);
        console.log(computer);

        for (var i = 0; i < 4; i++) {
            var utente = parseInt(prompt("Inserisci un numero"));
            document.getElementById("utente_number").innerHTML += utente + " ";
        
            if (utente < computer) {
                alert("Hai scritto un numero più piccolo, riprova!");
            } else if (utente > computer) {
                alert("Hai scritto un numero più grande, riprova!");
            } else {
                alert("Complimenti hai indovinato");
                break;
            }
        
            if (i == 3) {
                alert("Hai terminato i tentativi a tua disposizione. Partita terminata");
            }
        
        }
        
        document.getElementById("computer_number").innerHTML = "Il numero scelto dal computer era " + computer;
        break;
        case 3:
        var computer = Math.floor(Math.random()*(1 + 100 - 1) + 1);
        console.log(computer);

        for (var i = 0; i < 4; i++) {
            var utente = parseInt(prompt("Inserisci un numero"));
            document.getElementById("utente_number").innerHTML += utente + " ";
        
            if (utente < computer) {
                alert("Hai scritto un numero più piccolo, riprova!");
            } else if (utente > computer) {
                alert("Hai scritto un numero più grande, riprova!");
            } else {
                alert("Complimenti hai indovinato");
                break;
            }
        
            if (i == 3) {
                alert("Hai terminato i tentativi a tua disposizione. Partita terminata");
            }
        
        }
        
        document.getElementById("computer_number").innerHTML = "Il numero scelto dal computer era " + computer;
        break;
    }













// for (var i = 0; i < 4; i++) {
//     var utente = parseInt(prompt("Inserisci un numero"));
//     document.getElementById("utente_number").innerHTML += utente + " ";

//     if (utente < computer) {
//         alert("Hai scritto un numero più piccolo, riprova!");
//     } else if (utente > computer) {
//         alert("Hai scritto un numero più grande, riprova!");
//     } else {
//         alert("Complimenti hai indovinato");
//         break;
//     }

//     if (i == 3) {
//         alert("Hai terminato i tentativi a tua disposizione. Partita terminata");
//     }

// }

// document.getElementById("computer_number").innerHTML = "Il numero scelto dal computer era " + computer;
 