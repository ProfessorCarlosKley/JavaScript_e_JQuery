function checkUsername() {                             // Declare function
  var elMsg = document.getElementById('feedback');     // Get feedback element
  var elUsername = document.getElementById('username');// Get username input
  if (elUsername.value.length < 5) {                   // If username too short
    elMsg.textContent = 'Nome de usuário deve ter 5 ou mais caracteres'; // Set msg
  } else {                                              // Otherwise
    elMsg.textContent = '';                             // Clear message
  }
}