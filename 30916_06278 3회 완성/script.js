$('.navi il').mouseover(function(){
    $(this).children('.sub').stop().slideDown(200);
});

$('.navi il').mouseout(function(){
    $(this).children('.sub').stop().slideUp(200);
});

var i = 0;

function imgslide(){
    if(i<2){
        i++;
    } else{
        i = 0;
    }

    $('.imgslide ul li').fadeOut();
    $('.imgslide ul li').eq(i).fadeIn()
}

setInterval(imgslide, 3000)

$('.notice li').click(function(){
    $('#modal').addClass('active');
});

$('.btn').click(function(){
    $('#modal').removeClass('active');
});