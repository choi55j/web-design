$('.navi li').mouseover(function(){
    $(this).children('.sub').stop().slideDown(300);
});

$('.navi li').mouseout(function(){
    $(this).children('.sub').stop().slideUp(300);
});

setInterval(function(){
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginLeft:-200 + 'vh'});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginLeft:-400 + 'vh'});
    $('.imgslide').delay(2000);
    $('.imgslide').animate({marginLeft:0 + 'vh'});
    $('.imgslide').delay(2000);
});

$('.notice li:first').click(function(){
    $('#modal').addClass('active');
});

$('.btn').click(function(){
    $('#modal').removeClass('active');
});