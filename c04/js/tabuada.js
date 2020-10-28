
var table = 1;             // Unit of table
var i = 1;                 // Set counter to 1
var k = 1;
var msg = '';              // Message
var msg2 = '';
var elVezes = document.getElementById("rTabuadaVezes");
var elMais = document.getElementById("rTabuadaMais");

function fatorMultiplicacao() {
  table = parseInt(document.getElementById('multiplicador').value);

  msg = '';
  msg2 = '';
  elVezes.innerHTML = "Aguardando...";
  elMais.innerHTML = "";
  i = 1;
  k = 1;
}

function gerarTabuada() {
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br>';
    i++;
    elVezes.innerHTML = "MULTIPLIAÇÃO POR " + table + "<br><br>" + msg;
  }
  gerarTabuada2();
}
function gerarTabuada2() {
  while (k < 11) {
    msg2 += k + ' + ' + table + ' = ' + (k + table) + '<br>';
    k++;
    elMais.innerHTML = "TABUADADA DA SOMA <br><br>" + msg2;
  }
}
elVezes.innerHTML = "Aguardando...";

