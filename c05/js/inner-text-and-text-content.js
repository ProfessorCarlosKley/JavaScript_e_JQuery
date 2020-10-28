function executar() {
    var firstItem = document.getElementById('one'); // Find first list item
    var showTextContent = firstItem.textContent;    // Get value of textContent
    var showInnerText = firstItem.innerText;        // Get value of innerText

    // Show the content of these two properties at the end of the list
    var msg = '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showInnerText + '</p>';
    var el = document.getElementById('scriptResults');
    el.innerHTML = msg;

    firstItem.textContent = 'sourdough bread'; // Update the first list item
}
/****
 * - Na maioria dos navegadores textContent coletas as palavras fresh e figs.
 * innerText só mostra figs. fresh foi ocultado pela CSS, na teg <em>. Estilo
 * incorporado na mesma página.
 * - No IE8 ou versões anteriores, textContent não funciona.
 * - No firefox innerText retornará undefined porque ele nunaca foi implementada
 * nesse navegador.
 */



/**
 * As funções que acessam e selecionam elementos HTM em um
 * página web retornam sempre um conjunto de elementos. Esse
 * conjunto é denominado NodeList.
 */