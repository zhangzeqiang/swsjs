SwsJs.View ({
    "namespace": "Index",
    "alias": "main.LogoutModel",
    init: function () {
    },
    afterrender: function () {
        $("#logoutModel").find(".model-ok").click(function() {
            SwsJs.Log.l ("logout");
            /** 
             * 退出登录
             * 1. 删除cookie
             * 2. 跳转到登陆界面
             */
            CM_Cookie.delCookie (__Global.C_NUMBER);
            window.setTimeout("window.location='login.html'", 0);
        });

        // 监听确定按钮
        $("#window").find(".model-ok").click(function() {
            // 点击提交按钮后默认引导到body里的class(windowok)
            var windowokObj = $("#window").find(".modal-body").find (".windowok");
            windowokObj.click ();
        });
    }
});