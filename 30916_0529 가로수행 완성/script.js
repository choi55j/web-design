$('.navi>li').mouseover(function(){
    $(this).children('.sub').stop().slideDown(200);
});

$('.navi>li').mouseout(function(){
    $(this).children('.sub').stop().slideUp(200);
});

setInterval(function(){
    $('.imgslide').delay(1000);
    $('.imgslide').animate({marginTop : -300})
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginTop : -600})
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginTop : 0})
    $('.imgslide').delay(3000);
});

$('.tabmenu>li>a').click(function(){
    $(this).parent().addClass('active').siblings().removeClass('active');
    return false;
});


$('.notice li:first').click(function(){
    $('#modal').addClass('active');
});
$('.btn').click(function(){
    $('#modal').removeClass('active');
});