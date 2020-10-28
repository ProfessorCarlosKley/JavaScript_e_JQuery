i = 1;
function novoElemento() {

    //Cria um novo elemento e armazene-o em uma variável.
    var newEl = document.createElement('li');

    // Crie um nó de texto e armazene-o em uma variável.
    var newText = document.createTextNode('quinoa - ' + i);

    // Anexe o novo nó de texto ao novo elemento.
    newEl.appendChild(newText);

    // Encontre a posição em que o novo elemento deve ser adicionado.
    var position = document.getElementsByTagName('ul')[0];
    //('ul')[0]; refere-se ao primeiro elemnento ul da página.

    // Insira o novo elemento em sua posição.
    position.appendChild(newEl);
    i++;
}