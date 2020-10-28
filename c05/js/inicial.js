(function () {
    document.getElementById("header").innerHTML =
        "lista de produtos";
}());

function traduzir() {
    document.getElementById("header").innerHTML =
        "MENU PRINCIPAL";
    document.getElementById("header2").innerHTML =
        ".:. Eletrodomésticos .:.";
    //faz mensção ao primeiro elemento da classe hot (). 1º do Array;
    //com querySelector apenas o primeiro item do menu será traduzido.
    document.querySelector("li.hot").innerHTML =
        "<em>Geladeira</em> - duas portas (querySelector)";
    //alterando cores do menu.

    var x = document.getElementsByClassName("hot");
    //getElementsBuClassName gera uma Array com os elementos da classe.
    //Mudando cor de fundo dos elementos da classe.
    for (i = 0; i < x.length; i++) {
        x[i].style.background = "#8B4513";
    }
    //traduzindo restante do menu
    x[1].innerHTML = "Fogão 6 bocas.";
    x[2].innerHTML = "Notebook i7";
    var y = document.getElementById("four").innerHTML = "Guarda-Roupas";


}
function alateraParagrafo1() {
    document.getElementById("pexterno").innerHTML =
        "PARÁGRAFO ALTERADO COM innerHTML!";
}

/*
querySelector:
Retorna o primeiro elemento dentro do documento
(usando ordenação em profundidade, pré-ordenada e transversal dos
nós do documento) que corresponde ao grupo especificado de seletores.
- Esse método só retorna o primeiro dos elementos correspondentes.

*/

/**
 * As funções que acessam e selecionam elementos HTM em um
 * página web retornam sempre um conjunto de elementos. Esse
 * conjunto é denominado NodeList.
 */