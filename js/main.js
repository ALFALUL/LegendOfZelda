$(function(){
    $('#lore p').hide();
    $('#lore h4').on('click', function(){
        if ($(this).nextUntil('h4').is(':hidden')) {
            $(this).css({'background-color':'#38a'});
        } else {
            $(this).css({'background-color':'#444'});
        }
        $(this).nextUntil('h4').toggle(500);
    });

    var odkazy = $('#odkazy ul');
    linky.forEach(function(obj, idx){
        odkazy.append('<a href="'+obj.link+'" target="_blank"><img src="img/'+obj.photo+'"></a>');
    });

})