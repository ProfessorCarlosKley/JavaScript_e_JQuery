
$(document).ready(function () {
  $('button').click(function () {
    var $listText = $('ul').text();
    $('ul').append('<p>' + $listText + '</p>');
  });
});