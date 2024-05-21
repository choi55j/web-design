$('.navi>li').mouseover(function () {
    $(this).children('.sub').stop().slideDown(200);
});

$('.navi>li').mouseout(function () {
    $(this).children('.sub').stop().slideUp(200);
});

$('.imgslide a:gt(0)').hide();
setInterval(function () {
    $('.imgslide a:first-child').fadeOut().next('a').fadeIn().end().appendTo('.imgslide');
}, 3000);