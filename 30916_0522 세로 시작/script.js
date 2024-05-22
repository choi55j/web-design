$('.menu>li').mouseover(function(){
    $(this).children('.sub').stop().slideDown(200);
});

$('.menu>li').mouseout(function(){
    $(this).children('.sub').stop().slideUp(200);
});