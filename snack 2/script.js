var array = [];

for( var i = 0; i < 6; i++) {
    var utente = parseInt(prompt("Inserisci un numero"));
    if (utente%2 !== 0) {
        array.push(utente);
    }
}

console.log(array);