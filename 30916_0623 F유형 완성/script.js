$('.navi').mouseover(function(){
    $(this).find('.sub').stop().slideDown(200);
    $('.bbg').stop().slideDown(200);
});

$('.navi').mouseout(function(){
    $(this).find('.sub').stop().slideUp(200);
    $('.bbg').stop().slideUp(200);
});
$('.imgslide a:gt(0)').hide();
setInterval(function () {
    $('.imgslide a:first-child').fadeOut()
        .next().fadeIn()
        .end().appendTo('.imgslide');
}, 3000);

$(function(){
    $('.tabmenu>li>a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
});