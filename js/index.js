//<!--//////////////////////////////////////////banner 轮播广告-->
$(document).ready(function () {
    var mypic =  ["images/banner/ad1.jpg","images/banner/ad2.jpg","images/banner/ad3.jpg","images/banner/ad4.jpg","images/banner/ad5.jpg"];
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

