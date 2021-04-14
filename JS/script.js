// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array.

var caratteristicheStudenti = {
    nome : "alberto",
    cognome : "rossi",                  //INFO STUDENTI
    eta : 20,
}

for (var key in caratteristicheStudenti){
    console.log(key + ': ' + caratteristicheStudenti[key]);         //PER RICHIAMARE LE INFO STUDENTI
}


var tantiStundenti = [
    {
        nome : "alberto",                   //ARRAY DI OGGETTI
        cognome : "rossi",                  //INFO STUDENTI
        eta : 20,
    },
    {
        nome : "rita",
        cognome : "bianchi",
        eta : 18,
    },
    {
        nome : "roberto",
        cognome : "verdi",
        eta : 25,
    }                
    
]

for (var i = 0; i < tantiStundenti.length; i++){
    var risultato = tantiStundenti[i];
    console.log(risultato);
}

console.log("Studente" + (i + 1) );
console.log("Nome", tantiStundenti.nome);
console.log("Cognome", tantiStundenti.cognome);




var nome = prompt("Scrivi il tuo nome").trim();
var cognome = prompt("Scrivi cognome").trim();
var eta = prompt("Scrivi età").trim();

//CREAZIONE OGGETTO
var nuovoStudent = [
    nome: nome,
    cognome: cognome,
    eta: eta,
]

tantiStundenti.push(nuovoStudent);
console.log(tantiStundenti);



