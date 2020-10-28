function obtendoNode() {
    var itemTwo = document.getElementById('two');  // Get second list item
    var elText = itemTwo.firstChild.nodeValue;    // Get its text content
    elText = elText.replace('Pêra', 'Pêra Verde');  // Change pine nuts to kale
    itemTwo.firstChild.nodeValue = elText;        // Update the list item
    var fundo = itemTwo;
    fundo.style.backgroundColor = "green";
}
/**
 * As funções que acessam e selecionam elementos HTM em um
 * página web retornam sempre um conjunto de elementos. Esse
 * conjunto é denominado NodeList.
 */