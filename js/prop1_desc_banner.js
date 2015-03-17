//<!--//////////////////////////////////////////banner 轮播广告-->
$(document).ready(function () {
    var mypic =  ["../images/newest_property/prop1.png",
        "../images/buying/prop1_desc/prop_desc1.png",
        "../images/buying/prop1_desc/prop_desc2.png",
        "../images/buying/prop1_desc/prop_desc3.png",
        "../images/buying/prop1_desc/prop_desc4.png",
        "../images/buying/prop1_desc/prop_desc5.png"
    ];
    var thisad = 0;
    var timer = null;
    timer = setInterval(autoplay,2000);

    $(".next_btn").click(function(){
        thisad++;
//                console.log(thisad);
        if(thisad == mypic.length){
            thisad = 0;
        }
        clearInterval(timer);
        showImg(thisad);
        timer = setInterval(autoplay,2000);
    });

    $(".previous_btn").click(function(){
        thisad--;
//                console.log(thisad);
        if(thisad == 0){
            thisad = mypic.length-1;
        }
        clearInterval(timer);
        showImg(thisad);
        timer = setInterval(autoplay,2000);
    });

    function autoplay(){
        thisad++;
        if(thisad == mypic.length){
            thisad = 0;
        }
        showImg(thisad);
    }

    function showImg( idx ){
        $('.adbanner').attr("src",mypic[idx]);
    }
//            $(".register_btn").mouseenter(function(){
//                $(this).css("display","none");
//                $(this).value="register";
//                $(".register_btn").css("background-color","yellow");
//            });
//            $(".register_btn").mouseleave(function(){
//                $(this).value="";
//                $(this).css("display","inline-block");

});

