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


  var allStudents = [
    {
      'nome' : 'Filippo',
      'cognome' : 'Inzaghi',
      'eta' : 26
    },
    {
      'nome' : 'Marco',
      'cognome' : 'VanBasten',
      'eta' : 34
    },
    {
      'nome' : 'Gennaro Ivan',
      'cognome' : 'Gattuso',
      'eta' : 38
    },
    {
      'nome' : 'Andry',
      'cognome' : 'Shevchenko',
      'eta' : 22
    },
    {
      'nome' : 'Ricardo',
      'cognome' : 'Kakà',
      'eta' : 29
    },
    {
      'nome' : 'Nelson',
      'cognome' : 'Dida',
      'eta' : 48
    }
  ];

  for (var i = 0; i < allStudents.length; i++) {
    var singleStudent = allStudents[i];
    console.log(singleStudent.nome + ' ' + singleStudent.cognome);
  }
});
