$(':header').addClass('headline');
//seleciona todos os títulos <h1> - <h6> e adiciona o valor 
//headline ao atributo class
$('li:lt(3)').hide().fadeIn(1500);
//Selecina os três primeiro itens da lista e:
//1. oculta os elmentos (a fim de peritir o próximo passo)
//2. Os elementos são gradualmente exibidos com fadeIn(1500). Milissegundos.

//lt(3) - selecione todos os elementos em um índice menor que o índice dentro 
//do conjunto correspondente. Ou seja, na lista, seleciona todos os elementos
//de indice menor que trÊs. 0, 1, 2. Os três primeiros itens.
$('li').on('click', function () {
  $(this).remove();
  //aqui. this refere-se ao elemento em que foi definido o ouvinte.
  //ou seja, li. Portanto, remove o elemento que foi clicado.
});

/**
 * $() é frequentemente utilizado como um atalho, para evitar digiar jQuery();
 * jQuery é um arquivo JavaScript que você inclui em suas páginas web.
 * Ele permite localizar elementos utiizando seletores de estilo CSS.
 *
 * p. 299.
 */