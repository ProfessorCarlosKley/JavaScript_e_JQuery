// Create a variable to hold a random number between 1 and 10
var randomNum = Math.floor((Math.random() * 1000) + 1);

// Create a variable called el to hold the element whose id attribute has a value of info
var el = document.getElementById('info');

var msg = '<h2>PI:</h2><p>' + Math.PI + '</p>';
// Converte para maiúsculo.
msg += '<h2>Aleatório:</h2><p>' + randomNum + '</p>';


// Write the number into that element
el.innerHTML = msg;


/*
* A função Math.random() retorna um número pseudo-aleatório no intervalo
* [0, 1[, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo),
* que depois você pode dimensionar para um intervalo desejado.
 * Os números são gerados entre 0 e 1 com inúmeras casas decimais.
 * para obtermos um número inteiro, basta multiplicar esse aleatório por 10, 100, 1000.
 * de acordo com a necessidade do intevalo do número que desejamos. Floor arredonda
 * o número para baixo. Neste exemplo, é garado um número entre 0 e 9, portanto,
 * para termos um intervalo entre 1 e 10, somamos 1 ao resultado.
*/