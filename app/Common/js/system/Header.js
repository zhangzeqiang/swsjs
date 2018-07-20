import '../../css/system/Header.css';

SwsJs.View ({
    "namespace": "Common",
    "alias": "system.Header",
    "html": require ('../../system/Header.html'),
    "cssautoload": true,
    init: function () {
    },
    tmpldata: function () {
        __Global.number = CM_Cookie.getCookie (__Global.C_NUMBER);
        var display = __Global.number;
        if (typeof (__Global.number) == 'undefined' || __Global.number == "") {
            display = "未登录"
        }
        return {
            number: display
        };
    },
    afterrender: function () {
      $("#content_logout").click (function () {
          $('#logoutModel').modal({});
          $('#logoutModel').find (".modal-body").html ("确定要退出吗?");
          $('#logoutModel').find (".modal-title").html ("提示");
          $('#logoutModel').find (".model-cancel").html ("返回");
          $('#logoutModel').find (".model-ok").html ("确定");
          $("#logoutModel").find(".model-ok").click(function() {
              /** 
               * 退出登录
               * 1. 删除cookie
               * 2. 跳转到登陆界面
               */
              CM_Cookie.delCookie (__Global.C_NUMBER);
              window.setTimeout("window.location='home.html'", 0);
          });
      });
    }
});
