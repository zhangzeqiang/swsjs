SwsJs.View ({
    "namespace": "Home",
    "alias": "activity.User",
    "cssautoload": true,
    init: function () {
    },
    /*tmpldata: {
      "name": "通过"
    },*/
    afterrender: function () {
        var na = $(".number_adult");
        var nc = $(".number_child");
        var tp = $(".totalPeople");

        //刷新值
        function updateMoney () {
            var n_value = na.val();
            var nc_value = nc.val();
            var total = parseInt(nc_value)+parseInt(n_value); //输入框中的份额数与每份金额数相乘得到总金额
            tp.text(total);
        };

        //成人增减按钮事件
        $(".addBtn_adult").click(function () {
            na.val(parseInt(na.val())+1);
            if(na.val()>=9999){
                na.val(9999);
            }
            updateMoney();
        });
        $(".reduceBtn_adult").click(function () {
            na.val(parseInt(na.val()-1));
            if(na.val()<=0){
                na.val(0);
            }
            updateMoney();
        });
        $(".number_adult").keyup(function(){
            var c=$(this);
            if(/[^\d]/.test(c.val())){ //替换非数字字符
                var amount=c.val().replace(/[^\d]/g,0);
                $(this).val(amount);
            }
            if(na.val()>=9999){
                na.val(9999);
            }
            if(na.val()===""){
                na.val(0);
            }
            updateMoney();  
        });


        //儿童增加按钮事件
        $(".addBtn_child").click(function () {
            nc.val(parseInt(nc.val())+1);
            if(nc.val()>=9999){
                nc.val(9999);
            }
            updateMoney();
        });
        $(".reduceBtn_child").click(function () {
            nc.val(parseInt(nc.val()-1));
            if(nc.val()<=0){
                nc.val(0);
            }
            updateMoney();
        });
        $(".number_child").keyup(function(){
            var c=$(this);
            if(/[^\d]/.test(c.val())){//替换非数字字符
                var amount=c.val().replace(/[^\d]/g,0);
                $(this).val(amount);
            }
            if(nc.val()>=9999){
                nc.val(9999);
            }
            if(nc.val()===""){
                nc.val(0);
            }
            updateMoney();  //手动输入数值金额随之改变
        });
        
    }
});
