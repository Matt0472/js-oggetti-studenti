// Esercizio 1
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Usate prima i console.log se funziona tutto stampate a schermo con jQuery,
// fatto questo provate ad usare Handlebars



$(document).ready(function() {
  var student = {
    'nome' : 'Filippo',
    'cognome' : 'Inzaghi',
    'eta' : 26
  };

  for (var key in student) {
    console.log(student[key]);
  }
});
