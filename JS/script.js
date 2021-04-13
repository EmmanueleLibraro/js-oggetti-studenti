// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array.

var caratteristicheStudenti = {
    nome : "alberto",
    cognome : "rossi",                  //INFO STUDENTI
    eta : 20,
}

for (var key in caratteristicheStudenti){
    console.log(key, caratteristicheStudenti[key]);         //PER RICHIAMARE LE INFO STUDENTI
}

var tantiStundeti = [
    ["anna, rosa, tina, peppe"],
    ["verdi, bianchi, liberto, arlo"],
]

for (var i = 0; i < tantiStundeti.length; i++){
    var nomiStud = tantiStundeti[i];
    console.log('Nomi: ', nomiStud);
    for (var j = 0; i < tantiStundeti[i].length; i++) {
        console.log('Cognomi: ', nomiStud[j]);
    }
}