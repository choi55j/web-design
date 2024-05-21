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

$(function(){
    $('.tabmenu>li>a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
        return false
    });
});

$('.notice li:first').click(function(){
    $('#modal').addClass('active');
});
$('.btn').click(function(){
    $('#modal').removeClass('active');
}); 