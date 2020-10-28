$(function () {
  var $window = $(window);//recebe o objeto window (a janela)
  var $slideAd = $('#slideAd');//recebe a div com id slideAd
  var endZone = $('#footer').offset().top - $(window).height();
  //Estamos pegando o top referente ao elemento #footer.
  //Ou seja, o top de footer menos a altura do docume nto dá justamente a altura do
  //footer. 
  //O valor top do elemnto footer menos a altura da janela
  $window.on('scroll', function () {
    //ao rolar a barra de rolagem
    if (endZone < $window.scrollTop()) {
      //Chegará o momento em que o scrollTop será maior que endZone
      //Isso pq o scroll vai até o final do documento se distanciando ainda mais
      //do topo.
      $slideAd.animate({ 'right': '0px' }, 250);
      //exibe a propaganda
    } else {
      $slideAd.stop(true).animate({ 'right': '-360px' }, 250);
      //esconde a propaganda
    }
  });
  $("button").click(function () {
    alert("endZone: " + endZone + "px" + " Window: " + $(window).height() + "px"
      + " Scroll: " + $(document).scrollTop() + "px." + " Footer: " + $('#footer').offset().top + "px."
      + " Documento: " + $(document).height() + "px");
  });
});
/*
A distância entre o topo do footer até o topo da página é bem maior que a altura
da janela de exibição. $window.height().
*/