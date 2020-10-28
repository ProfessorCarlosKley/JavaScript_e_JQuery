function removeElemento() {
    // Armazene o elemento a ser removido em uma variável.
    var removeEl = document.getElementsByTagName('li')[3];

    // Encontre o elemento que contém o elemento a ser removido.
    //Netse caso o primeiro ul.
    var containerEl = document.getElementsByTagName('ul')[0];

    // Remove the element.
    containerEl.removeChild(removeEl);
}