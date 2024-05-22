$('.menu>li').mouseover(function(){
    $(this).children('.sub').stop().slideDown(200);
});

$('.menu>li').mouseout(function(){
    $(this).children('.sub').stop().slideUp(200);
});

setInterval(function(){
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginLeft:-800});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginLeft:-1600});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginLeft:0});
    $('.imgslide').delay(2000);
})