
$(document).ready(function () {
    $('button').click(function () {
        $('li em').addClass('seasonal');
        //definie atributo class para todo <em> existente em li.
        $('li.hot').addClass('favorite');
        //defini atributo para todas as classes hot em li.
    });
});