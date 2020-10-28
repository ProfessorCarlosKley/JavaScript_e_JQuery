
// NOTA: Se você executar este arquivo localmente
// Você não receberá um status de servidor e o exemplo falhará
// Comente as linhas 9 e 11 se estiver trabalhando localmente

var xhr = new XMLHttpRequest();
// Cria o objeto XMLHttpRequest

xhr.onload = function () {
  // Quando a resposta carregar. O evento onload do objeto xhr dispara quando 
  //o servidor responde.

  // A verificação condicional abaixo não funciona localmente. Só em um servidor.
  //p. 379.
  if (xhr.status === 200) {
    // Se o status do servidor for ok.
    document.getElementById('content').innerHTML = xhr.responseText; // Atualiza
  }
};
xhr.open('GET', 'data/data.html', true);        // Prepara a solicitação
xhr.send(null);                                 // Envia a solicitação
//o Parâmetro true informa que o procesamento será assincrono.
//Como se fosse em segundo plano. p. 371.
/**
 * A responer, o servidor devolve uma mensagem que pode ser:
 * 200 = O servidor respondeu e tudo está ok.
 * 304 = Não modificado.
 * 404 = Página não encontrada.
 * 500 = Erro interno no servidor.
 * p. 378.
 */