$('.navi li').mouseover(function(){
    $(this).children('.sub').stop().slideDown(200);
});

$('.navi li').mouseout(function(){
    $(this).children('.sub').stop().slideUp(200);
});

setInterval(function(){
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginLeft:-200 + 'vh'});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginLeft:-400 + 'vh'});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginLeft: 0});
});