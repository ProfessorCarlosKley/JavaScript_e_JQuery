function checkUsername() {                        // Declare function
  var username = el.value;
  //setdo mais àdiante. Valor do input.
  if (username.length < 5) {                      // If username < 5 characters
    elMsg.className = 'warning';
    // Altera atributo (classe) para warning, se não tiver adicina.
    elMsg.textContent = 'Número de caracteres insuficiente.';// Update message
  } else {                                        // Otherwise
    elMsg.textContent = '';                       // Clear the message
  }
}

function tipUsername() {                          // Declare function
  elMsg.className = 'tip';
  // Altera/adiciona classe da div feedback para para tip
  elMsg.innerHTML = 'O nome de usuário deve ter pelo menos 5 caracteres';
  // Add message
}

var el = document.getElementById('username');     // Username input
var elMsg = document.getElementById('feedback');  // Element to hold message

// When the username input gains / loses focus call functions above:
el.addEventListener('focus', tipUsername, false); // focus call tipUsername()
el.addEventListener('blur', checkUsername, false);// blur call checkUsername()

/* LONGER VERSION WITH IE8 (and lower) compatibility

if (el.addEventListener) {
  el.addEventListener('focus', tipUsername, false);
  el.addEventListener('blur', checkUsername, false);
} else {
  el.attachEvent('onfocus', tipUsername);
  el.attachEvent('onblur', checkUsername);
}

*/