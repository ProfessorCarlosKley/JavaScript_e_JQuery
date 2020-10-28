function checkUsername() {                            // Declare function
  var elMsg = document.getElementById('feedback');    // Get feedback element
  if (this.value.length < 5) {                        // If username too short
    elMsg.textContent = 'Username must be 5 characters or more';  // Set msg
  } else {                                            // Otherwise
    elMsg.textContent = '';                           // Clear message
  }
}

var elUsername = document.getElementById('username'); // Obtem o elemento input
elUsername.onblur = checkUsername;
// Ao perder focu aciona checkUsername, para o elemento username.

/*
Atributos da rotina de tratamento HTML não é mais indicado. Por exemplo:
<input onblur = "checkUserName()">
Essa abordagem é considerada agora uma prática não recomendada. p. 251.
O mais recomendado agora é criar rotinas de tratamento de evento DOM p. 253,
é o que está sendo usado aqui, ou ouvintes, p. 255.
-------------------------------------------------------------------------------

*/