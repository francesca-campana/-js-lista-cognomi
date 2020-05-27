// Lista Cognomi

// Chiedere all’utente il cognome

var cognomeUser = prompt('Qual è il tuo cognome?');

// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
var listaCognomi = ["Bowie", "Reed", "Richard", "Lennon", "Cave"];
// console.log(listaCognomi);

//Variabili per popolare la lista a schermo
var elementListaCognomi = document.getElementById("cognomi");
var elementPosizione = document.getElementById("posizione");

//Se il cognome inserito è vuoto chiedilo fintato che non lo sia
while( (isNaN(parseInt(cognomeUser)) === false) || listaCognomi.length == 0 ) {
  nuovoCognome = prompt("Errore, il cognome non è valideo. Dimmi il tuo vero cognome");
}
listaCognomi.push(cognomeUser);
console.log(listaCognomi);


// stampa la lista ordinata alfabeticamente
listaCognomi.sort();
console.log(listaCognomi);

for( var i = 0; i < listaCognomi.length; i++ ) {
  elementListaCognomi.innerHTML += '<li>' + listaCognomi[i] + '</li>';
}

// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
var listaCognomiOrdinata = listaCognomi.indexOf(cognomeUser) + 1;
// console.log(listaCognomiOrdinata);

elementPosizione.innerHTML = listaCognomiOrdinata;
