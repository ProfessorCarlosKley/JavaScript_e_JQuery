// Create a variable to hold the number that will be used
var originalNumber = 10.23456;
var letra = 'a';
// Create a variable to hold a message that will be shown on the page

var msg = '<h2>original number</h2><p>' + originalNumber + '</p>';
//isNaN verifica se o objeto não é um número.
//toString converte booleano em string e toUpperCase() coloca string emm maiúsculo.
msg += '<h2>"A" não é NUM.</h2><p>' + (isNaN(letra).toString()).toUpperCase() + '</p>';
// ToFixed(3) - Arredonda o número com 3 casas decimais
msg += '<h2>3 decimal places</h2><p>' + originalNumber.toFixed(3) + '</p>';
// toPrecision Arredonda o número para um total de dígitos especificados.
msg += '<h2>3 digits</h2><p>' + originalNumber.toPrecision(3) + '</p>';

// Create a variable called el to hold the element whose id attribute has a value of info
var el = document.getElementById('info');
// Write the message into that element
el.innerHTML = msg;

/*
* O método toFixed() retorna o número como uma string. Isso acontece porque, nem sempre frações
* pode ser representadas com precisão usando números de ponto flutuantes. p. 133.Ítem 2.

* toPrecision() também retorna uma String. Pode retornar uma notação científica se houver
* mais dígitos do que o número especificado de posições.  p. 133.Ítem 3.
*/