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
    var mista =$('#postava'); 
    var x=0;
    window.setInterval(function(){
        mista.find('img').attr('src','img/' + postavy[x].photo);
        mista.find('figcaption').text(postavy[x].place);
        x == postavy.length -1 ? x=0 : x++;
    },4000);

})
