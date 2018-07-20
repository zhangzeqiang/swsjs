SwsJs.View ({
    "namespace": "Common",
    "alias": "com.NormalModal",
    "html": require ('../../com/NormalModal.html'),
    init: function () {
    },
    afterrender: function () {
        $("#logoutModel").find(".model-ok").click(function() {
            SwsJs.Log.l ("logout");
        });

        // 监听确定按钮
        $("#window").find(".model-ok").click(function() {
            // 点击提交按钮后默认引导到body里的class(windowok)
            var windowokObj = $("#window").find(".modal-body").find (".windowok");
            windowokObj.click ();
        });
    }
});