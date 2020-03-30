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
  }
}

if (emailFound === true) {
  console.log('Login done: ' + checkEmail + ' is connected!');
  document.getElementById('result').innerHTML = 'Login done: ' + checkEmail + ' is connected!';
} else {
  console.log('Wrong email: ' + checkEmail);
  document.getElementById('result').innerHTML = 'Wrong Email: ' + checkEmail;
}


// Gioco dei dadi
// generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto

// Lancia il dado
var vittorieUser = 0;
var vittorieComputer = 0;

btnDado.addEventListener('click',
    function() {
        // Numero random da 1 a 6
        var lancioDadoUser = Math.floor( Math.random() * 6) + 1;
        var lancioDadoComputer = Math.floor( Math.random() * 6) + 1;

        if (lancioDadoUser > lancioDadoComputer) {
          document.getElementById('winner').innerHTML = 'Hai battuto il computer!!!';
          vittorieUser++
        } else if (lancioDadoUser < lancioDadoComputer) {
          document.getElementById('winner').innerHTML = 'Hai perso!!!';
          vittorieComputer++
        } else if (lancioDadoUser = lancioDadoComputer) {
          document.getElementById('winner').innerHTML = 'Pareggio!';
        }

        // Risultato lancio dado
        document.getElementById('userDado').innerHTML = 'Tu: ' + lancioDadoUser;
        document.getElementById('computerDado').innerHTML = 'Computer: ' + lancioDadoComputer;
        document.getElementById('vittorieUser').innerHTML = 'Tuo Punteggio: ' + vittorieUser;
        document.getElementById('vittorieComputer').innerHTML = 'Punteggio Computer: ' + vittorieComputer;
    }
);
