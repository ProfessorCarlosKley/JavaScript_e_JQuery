//Encadeamento de métodos com uso de ponto
$('li[id!="one"]').hide().delay(500).fadeIn(1400);
//Seleciona todos os id's diferentes de 'on'.
//O 1º ítem da lista não sofrerá os efeitoss.
//hide() = oculta os elementos selecionados.
//delay = Cria uma pausa.
//fadeIn = Faz os elementos surgirem gradativamente.
$('li:first-child').addClass('next');
//adiciona atributo next ao primeiro irmão de li.
$('li.priority').addClass('highlight');
