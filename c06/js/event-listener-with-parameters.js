var elUsername = document.getElementById('username');   // Username input
var elMsg = document.getElementById('feedback');   // Error msg element

function checkUsername(minLength) {                     // Declare function
  if (elUsername.value.length < minLength) {            // If username too short
    // Set the error message
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  } else {                                             // Otherwise
    elMsg.innerHTML = '';                              // Clear msg
  }
}

elUsername.addEventListener('blur', function () {        // When it loses focus
  checkUsername(5);
  //a função aqui  é uma função anônima, ela chama uma função nomeada
  //informando seu parâmetro.
  //ver no exemplo 255 que ela foi adicionada sem evento. Bastou chamar
  //a função: elUsername.addEventListener('blur', checkUsername, false);
}, false);