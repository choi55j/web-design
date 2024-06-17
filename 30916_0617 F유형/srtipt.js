$('.navi ').mouseover(function () {
    $(this).find('.sub').stop().slideDown(300);
    $('.mbg').stop().slideDown(300);
});


setInterval(function(){
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginLeft:-2000});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginLeft:-4000});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginLeft:0});
    $('.imgslide').delay(2000);
})
$('.navi').mouseout(function () {
    $(this).find('.sub').stop().slideUp(300);
    $('.mbg').stop().slideUp(300);
});
$(function () {
    $('.tabmenu>li>a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        return false;
    });
});