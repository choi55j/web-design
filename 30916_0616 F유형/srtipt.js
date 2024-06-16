$('.navi ').mouseover(function(){
    $(this).find('.sub').stop().slideDown(300);
    $('.mbg').stop().slideDown(300);
});

$('.navi').mouseout(function(){
    $(this).find('.sub').stop().slideUp(300);
    $('.mbg').stop().slideUp(300);
});