// This example has been updated to fire on the keyup event instead of keypress 
// (on the last line in the event listener) as new text is not in the textarea until the key is released

var el;
var counter2 = 0;                                                   // Declare variables
function charCount(e) {                                    // Declare function
  var textEntered, charDisplay, counter, lastkey, digitos;          // Declare variables

  textEntered = document.getElementById('message').value;
  // Captura texto do usuário.
  charDisplay = document.getElementById('charactersLeft'); // Counter element
  counter = (180 - (textEntered.length));                  // Num of chars left
  charDisplay.textContent = "Restam: " + counter + " caracteres."                       // Show chars left
  lastkey = document.getElementById('lastKey');            // Get last key elem
  lastkey.textContent = 'ASCII do últim caracter digigado: ' + e.keyCode;
  // keyCode propriedade do obeto event
  digitos = document.getElementById('digitados');
  counter2 += 1;
  digitos.textContent = "Digitados: " + counter2 + " caracteres."
}
el = document.getElementById('message');                   // Get msg element
el.addEventListener('keyup', charCount, false); // on keyup - call charCount()
//Lembrando: O ouvinte gera o objeto event e adiciona como parâmetro da função
//que é chamada.