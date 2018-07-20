SwsJs.View ({
    "namespace": "Login",
    "alias": "LogoutModel",
    "html": require ('../html/LogoutModel.html'),
    init: function () {
        console.log ("LogoutModel.js init.");
    },
    afterrender: function () {
        console.log ("LogoutModel.js afterrender.");
        $("#tipsModel").find (".model-ok").click(function() {
            // 确定
            $("#tipsModel").modal("hide");
        });
        $("#tipsModel").on('show.bs.modal', function () {
            // 超时自动关闭
            setTimeout(function(){$("#tipsModel").modal("hide")}, 3000);
        });
    }
});