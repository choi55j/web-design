$('.navi li').mouseover(function(){
    $(this).children('.sub').stop().slideDown(200);
});

$('.navi li').mouseout(function(){
    $(this).children('.sub').stop().slideUp(200);
});

setInterval(function(){
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginLeft:-1400});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginLeft:-2800});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginLeft: 0});
});