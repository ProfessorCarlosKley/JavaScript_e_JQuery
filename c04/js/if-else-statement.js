var pass = 50;      // Pass mark
var score = 75;    // Current score
var msg;            // Message

// Select message to write based on score
if (score > pass) {
  msg = 'Congratulations, you passed!';
  //escreve na var global
} else {
  msg = 'Have another go!';
  //escreve na var global
}

var el = document.getElementById('answer');
el.textContent = msg;