$(function () {

  var $newItemButton = $('#newItemButton'); //O botão
  var $newItemForm = $('#newItemForm'); //o formulário
  var $textInput = $('input:text'); //input type text

  $newItemButton.show(); //Exibe o botão.
  $newItemForm.hide(); //Esconde o form.

  $('#showForm').on('click', function () {//ouvinte para o botão new item
    $newItemButton.hide();
    $newItemForm.show();
  });

  $newItemForm.on('submit', function (e) {//Ao submeter o form através do botão submit;
    e.preventDefault(); //preventDefault impete a propagação do evento.
    var newText = $textInput.val();//definida no início.
    $('li:last').after('<li>' + newText + '</li>');
    //Adiciona elemento <li> depois (after) do último (last) da lista.
    $newItemForm.hide();
    $newItemButton.show();
    $textInput.val('');
  });
});