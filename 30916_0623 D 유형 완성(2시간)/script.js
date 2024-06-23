$('.navi li').mouseover(function(){
    $(this).children('.sub').stop().slideDown(200);
});

$('.navi li').mouseout(function(){
    $(this).children('.sub').stop().slideUp(200);
});

setInterval(function(){
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginTop:-400});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginTop:-800});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginTop:0});
    $('.imgslide').delay(2000);
});

$('.notice li:first').click(function(){
    $('#modal').addClass('active');
});

$('.btn').click(function(){
    $('#modal').removeClass('active');
});