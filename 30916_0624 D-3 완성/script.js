$(".navi li").mouseover(function(){
    $(".sub").stop().fadeIn();
});

$(".navi li").mouseout(function(){
    $(".sub").stop().fadeOut();
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

$(function(){
    $('.tabmenu>li>a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
        return false;
    })
});