$(".main > li").mouseover(function () {
    // $('.sub').stop().slideDown();
    $(this).children('.sub').stop().slideDown();
});
$(".main > li").mouseout(function () {
    // $('.sub').stop().slideUp();
    $(this).children('.sub').stop().slideUp();

});

// $(".navi > li").mouseover(function(){
//     //    $('.submenu').stop().slideDown(200);
//         $(this).children('.submenu').stop().slideDown();
// });