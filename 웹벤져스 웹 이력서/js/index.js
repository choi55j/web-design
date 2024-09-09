let my, title;
window.onload=function() {
    
    title=document.querySelector(".title");
    my=document.querySelector(".my");
    title.onclick=function() {
        $(".music").hide();
        my.style.display="block";
        $(".my").animate({"left":"70%"},{duration:500, easing:"easeOutElastic"} );
        $(".myName").delay(500).animate({"left":"250px"},{duration:500, easing:"easeInSine"} );
        $(".myTel").delay(1000).animate({"left":"250px"},{duration:500, easing:"easeInSine"} );
        $(".myFm").delay(1500).animate({"left":"250px"},{duration:500, easing:"easeInSine"} );
        $(".myLi").delay(2000).animate({"left":"250px"},{duration:500, easing:"easeInSine"} );
        $(".myPro").delay(2500).animate({"left":"250px"},{duration:500, easing:"easeInSine"} );
        $(".myGalley").delay(3000).animate({"left":"250px"},{duration:500, easing:"easeInSine"} );
    }    
    for(i=0; i<5; i++) {
        $(".img5 li:eq(" + i + ")").css("background","url(./img/li" + i + ".jpg)")
                                    .css("backgroundSize","100% 100%");
    }
}
let timer=setInterval("show()", 3000);
function show() {
    $(".img5").animate({"left": "-=100%"},1000, function() {
        $(".img5 li:first").appendTo(".img5");
        $(".img5").css("left", "+=100%");
    });
}
const dataA = {
    name:["웹디자인", "GTQ일러스트", "GTQ포토샵", "정보처리","빅데이터"],
    tip: {
        web: ["자격 취득일 : 2024. 05. 20", "등급", "카드", "종류", "보관"],
        lill: ["자격 취득일 : 2024. 06. 20", "1등급", "1카드", "1종류", "1보관"],
        poto: ["자격 취득일 : 2024. 07. 20", "2등급", "2카드", "2종류", "2보관"],
        bigdata: ["자격 취득일 : 2024. 08. 20", "3등급", "3카드", "3종류", "3보관"],
        iot: ["자격 취득일 : 2024. 09. 20", "4등급", "4카드", "4종류", "4보관"],
    }
}
$(function() {
    // $(".music").delay(1000).animate({"display":"block"},500);
    // $(".music").animate({"opacity":"1"}, 1000);
    
    for(i=0; i<5; i++) {
        $(".Li_kind li:eq(" + i + ")").text(dataA.name[i]);
    }
    // 자격증 소개 버튼을 클릭 했을 때
    $(".Li_menu").on("click", function() {
        $(".Li_kind").animate({"left": "0"},500);
    })
    // 처음 자격증 소개 텍스트 4번(iot) 보이게 하기
    for(i=0; i<dataA.tip.web.length; i++) {
        $(".Li_right div:eq(" + i + ")").text(dataA.tip.iot[i]);
    }

    // 왼쪽 자격증 소개 메뉴 5개짜리를 클릭 했을 때
     $(".Li_kind li").on("click", function() {
        no = $(this).index();
        if(no == 0) {
            for(i=0; i<dataA.tip.web.length; i++) {
                $(".Li_right div:eq(" + i + ")").text(dataA.tip.web[i]);
            }
        }
        else if(no == 1) {
            for(i=0; i<dataA.tip.web.length; i++) {
                $(".Li_right div:eq(" + i + ")").text(dataA.tip.lill[i]);
            }
        }
        else if(no == 2) {
            for(i=0; i<dataA.tip.web.length; i++) {
                $(".Li_right div:eq(" + i + ")").text(dataA.tip.poto[i]);
            }
        }
        else if(no == 3) {
            for(i=0; i<dataA.tip.web.length; i++) {
                $(".Li_right div:eq(" + i + ")").text(dataA.tip.bigdata[i]);
            }
        }
        else if(no == 4) {
            for(i=0; i<dataA.tip.web.length; i++) {
                $(".Li_right div:eq(" + i + ")").text(dataA.tip.iot[i]);
            }
        }
     })

    //  이력사항 JS
    $(".purple").on("click", function() {
        $(this).animate({"left":"-100%"}, 500);
    })
})