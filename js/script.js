// Lista Cognomi

// Chiedere all’utente il cognome
var cognomeUser = prompt('Qual è il tuo cognome?');

// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
var listaCognomi = ["Bowie", "Reed", "Richard", "Lennon", "Cave"];
// console.log(listaCognomi);
listaCognomi.push(cognomeUser);
console.log(listaCognomi);


// stampa la lista ordinata alfabeticamente
listaCognomi.sort();
console.log(listaCognomi);

// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
var listaCognomiOrdinata = listaCognomi.indexOf(cognomeUser) + 1;
// console.log(listaCognomiOrdinata);
alert('Il tuo cognome si trova al n° ' + listaCognomiOrdinata + ' della lista');
