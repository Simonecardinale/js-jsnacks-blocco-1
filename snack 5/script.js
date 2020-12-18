// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


var utente1 = prompt("Inserisci una parola");
var utente2 = prompt("Inserisci una parola");

if (utente1.length < utente2.length) {
    console.log(utente1);
} else {
    console.log(utente2);
};

if (utente1.length > utente2.length) {
    console.log(utente1);
} else {
    console.log(utente2);
};