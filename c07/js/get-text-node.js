$(document).ready(function () {
  $('button').click(function () {
    var $listItemText = $('li').text();
    $('li').append('<i>' + $listItemText + '</i>');
  });
});