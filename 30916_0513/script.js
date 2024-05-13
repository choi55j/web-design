$('.menu>li').mouseover(function () {
    $(this).find('.sub').stop().slideDown(200);
});

$('.menu>li').mouseout(function () {
    $(this).find('.sub').stop().slideUp(200);
});