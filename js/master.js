// Cerca in un array:
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito dell controllo
// Lista email: michele@boolean.careers, fabio@boolean.careers, roberto@boolean.careers

var emails = ["michele@boolean.careers", "fabio@boolean.careers", "roberto@boolean.careers"];
console.log(emails);
var checkEmail = prompt('Log in with your e-mail please').toLowerCase();
console.log(checkEmail);

var emailFound = false;

for (var i = 0; i < emails.length; i++) {
  var check = emails[i];

  if (check == checkEmail) {
    emailFound = true;
    console.log(emailFound);
  }
}

if (emailFound === true) {
  console.log('Login done' + checkEmail + 'is connected');
} else {
  console.log('Wrong email ' + checkEmail);
}


// Gioco dei dadi
// generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto
