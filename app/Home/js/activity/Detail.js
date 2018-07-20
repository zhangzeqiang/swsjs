SwsJs.View ({
    "namespace": "Home",
    "alias": "activity.Detail",
    "cssautoload": true,
    init: function () {
    },
    /*tmpldata: {
      "name": "通过"
    },*/
    afterrender: function () {
        $(function(){
            // 循环轮播到某个特定的帧 
            $(".slide-one").click(function(){
                $("#myCarousel").carousel(0);
            });
            $(".slide-two").click(function(){
                $("#myCarousel").carousel(1);
            });
            $(".slide-three").click(function(){
                $("#myCarousel").carousel(2);
            });
            $(".slide-four").click(function(){
                $("#myCarousel").carousel(3);
            });
            $(".slide-five").click(function(){
                $("#myCarousel").carousel(4);
            });
            $(".slide-six").click(function(){
                $("#myCarousel").carousel(5);
            });
        });

        //小图片增加边框事件
        $(function() {
            $(".activityDetail .picture img").mouseenter(function() {
                $(this).addClass("switch");
            });
            $(".activityDetail .picture img").mouseout(function() {
                $(this).removeClass("switch");
            });
        });

        // //小图片滑动事件
        // $(function() {
        //     $(".activityDetail .left").click(function() {
        //         $(".activityDetail .picture").animate({left:'-=94px'},500);
        //     });
        // });

        // $(function() {
        //     $(".activityDetail .right").click(function() {
        //         $(".activityDetail .picture").animate({left:'+=94px'},500);
        //     });
        // });

        // $(function() {
        //     $(".activityDetail .slide_buutton_left").click(function() {
        //         $(".activityDetail .scrollBar .picture").animate({right:'-=85px'},500);
        //     });
        // });

        // $(function() {
        //     $(".activityDetail .slide_buutton_right").click(function() {
        //         $(".activityDetail .scrollBar .picture").animate({right:'+=90px'},500);
        //     });
        // });
    }
});