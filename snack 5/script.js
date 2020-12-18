// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


// var utente1 = prompt("Inserisci una parola");
// var utente2 = prompt("Inserisci una parola");

// if (utente1.length < utente2.length) {
//     console.log(utente1);
// } else {
//     console.log(utente2);
// };

// if (utente1.length > utente2.length) {
//     console.log(utente1);
// } else {
//     console.log(utente2);
// };


var array =[];

for (var i = 0; i < 2; i++) {
    var utente = prompt("Inserisci una parola");
    array.push(utente);
}

// console.log(array[0].length);

var max = "";
// console.log(minimo);

for(var i = 0; i < array.length; i++) {
    parolaLetta = array[i];
    // console.log(parolaLetta);
    if (parolaLetta.length > max.length) {
        max = parolaLetta;
    }
};
console.log(max);

for(var i = 0; i < array.length; i++) {
    parolaLettaPiccola = array[i];
    // console.log(parolaLetta);
    if (parolaLettaPiccola.length < parolaLetta.length) {
        parolaLetta = parolaLettaPiccola;
    }
};

console.log(parolaLetta);
