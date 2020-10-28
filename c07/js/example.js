$(function () {

  // SETUP
  var $list, $newItemForm, $newItemButton;
  var item = '';                                 // item é uma string vazia.
  $list = $('ul');
  // Armazena na variável lista não ordenada.
  $newItemForm = $('#newItemForm');
  // #newItemForm é o id do form. Portanto essa variável armazena o form.
  $newItemButton = $('#newItemButton');
  // Botão para mostrar form. É o ID da div que contém o botão.

  $('li').hide().each(function (index) {          // Oculta ítens da lista.
    $(this).delay(450 * index).fadeIn(1600);     // então, exibe gradualmente.
  });

  // CONTANDO ÍTENS
  function updateCount() {                       // Create function to update counter
    var items = $('li[class!=complete]').length;
    // Número de itens da lista. Itens com a classe diferente de complete.
    $('#counter').text(items);                   // Adiciona no contador circulo
  }
  updateCount();                                 // Chama a função

  // CONFIGURANDO FORM PARA NOVOS ITENS
  $newItemButton.show();                         // Exibe botão.
  $newItemForm.hide();                           // Oculta o form.
  $('#showForm').on('click', function () {        // Ao clicar no botão Novo
    $newItemButton.hide();                       // Oculta o botão Novo
    $newItemForm.show();
    // Exibe o form. (Caixa de texto e o botão add)
  });

  // Adicionando o novo item na lista.
  $newItemForm.on('submit', function (e) {       // Quando um novo item e enviado
    e.preventDefault();
    // Impedir o envio do form. Evitando propagação.
    var text = $('input:text').val();           // Obter valor da entrada de texto.
    $list.append('<li>' + text + '</li>');      // Adiciona item no fim da lista
    $('input:text').val('');                    // Limpa o texto do input.
    updateCount();                              // Atualiza contador de itens
  });

  // MANUSEIO DE CLICK - USA DELEGAÇÃO NO ELEMENTO <ul>
  $list.on('click', 'li', function () {//Ao clicar no elemento <li>
    var $this = $(this);               // Cache the element in a jQuery object
    var complete = $this.hasClass('complete');
    // Verifica se algum elemento tem a classe chamada complete

    if (complete === true) {           // Check if item is complete
      $this.animate({                  // Anima opacidade e preenchimento.
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function () {    // Após animação ser cocluida chama a função.
        $this.remove();                // Em seguida remove completamente o ítem.
      });
    } else {                           // Caso contrário.
      item = $this.text();             // Obtem o texto do item da lista.
      $this.remove();                  // Remove o itme da lista.
      $list    //Criada no início junto com item.
        // Adiciona novamente ao final da lista e define sua classe como "complete"
        //No segundo clique por ter a classe complete o teste será true e o elemento
        //será removido definitivamente.
        .append('<li class=\"complete\">' + item + '</li>')
        .hide().fadeIn(300);           // Esconde para que possar ficar desbotado
      updateCount();                   // Atualiza contador.
    }                                  // End of else option
  });                                  // End of event handler
});