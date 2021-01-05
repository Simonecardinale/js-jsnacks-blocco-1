var array = [];

var somma = 0;


for (i = 0; somma < 50; i++){
    var utente = parseInt(prompt("inserisci un numero"));
    somma += utente;
    if (somma < 50) {
        array.push(utente);
    }

}
console.log(array);


console.log(somma);