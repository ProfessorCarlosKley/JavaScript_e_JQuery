var today = new Date(); //variável do tipo objeto date
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Boa Noite!';
} else if (hourNow > 12) {
    greeting = 'Boa Tarde';
} else if (hourNow > 0) {
    greeting = 'Bom dia!';
} else {
    greeting = 'Bem-Vindo!';
}

document.write('<h3>' + greeting + '</h3>');