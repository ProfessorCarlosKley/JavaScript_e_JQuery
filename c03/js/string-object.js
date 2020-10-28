// Create a variable called saying to hold the string that will be used
var saying = 'HOTEL CARVALHO ';
var final = "       FIM        ";

// Create a variable called msg to hold a message that will be shown on the page
// Imprime comprimento da string
var msg = '<h2>length</h2><p>' + saying.length + '</p>';
// Converte para maiúsculo.
msg += '<h2>uppercase</h2><p>' + saying.toUpperCase() + '</p>';
// Converte para minúsculo
msg += '<h2>lowercase</h2><p>' + saying.toLowerCase() + '</p>';
// charAT = Recebe um número de índice e retorna o caractere nessa posição.
msg += '<h2>character index: 6</h2><p>' + saying.charAt(6) + '</p>';
// indexOf = retorna o número de índice da PRIMEIRA ocorrência de um caractére ou conjunto de caractere 
// encontrado em uma string. 
msg += '<h2>first C</h2><p>' + saying.indexOf('C') + '</p>';
msg += '<h2>first VA</h2><p>' + saying.indexOf('VA') + '</p>';
// lasIndexOF - retorna o número de índice da ÚLTIMA ocorrência de um caractere ou conjunto de caracteres
//encontrado em uma string
msg += '<h2>last O</h2><p>' + saying.lastIndexOf('O') + '</p>';
// substring = retorna um pedaço da string (x, y), que inicia no index x e tem comprimento y.
msg += '<h2>character index: 8-14</h2><p>' + saying.substring(8, 14) + '</p>';
// Encontra a PRIMEIRA  correspondência de um caracter ou sequência e substitui pelo valor pretendido.
msg += '<h2>replace</h2><p>' + saying.replace('O', 'U') + '</p>';
//Trim() - remov espaços do início e do final da String.
msg += '<h2>Trim</h2><p>' + final.trim() + '</p>';

// Create a variable called el to hold the element whose id attribute has a value of info
var el = document.getElementById('info'); //ID da Div.
// Write the message into that element
el.innerHTML = msg; //Escreve na div.