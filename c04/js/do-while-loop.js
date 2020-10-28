var i = 1;       // Set counter to 1
var msg = '';    // Message

// Store 5 times table in a variable
do {
  msg += i + ' x 5 = ' + (i * 5) + '<br />';
  i++;
} while (i < 1);
//mesmo a condição ser < 1, o laço do executa pelo menos uma vez
//o teste vem depois.

document.getElementById('answer').innerHTML = msg;