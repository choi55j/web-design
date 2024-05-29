$('.navi>li').mouseover(function(){
    $(this).children('.sub').stop().slideDown(200);
});
$('.navi>li').mouseout(function(){
    $(this).children('.sub').stop().slideUp(200);
});

setInterval(function(){
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginTop:-300})
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginTop:-600})
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginTop:0})
    $('.imgslide').delay(2000);
})