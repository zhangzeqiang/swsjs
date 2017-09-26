SwsJs.View ({
  "namespace": "Index",
  "alias": "main.Content",
  init: function () {
  },
  "cssautoload": true,
  tmpldata: function () {
      var number = __Global.number;
      return {"number": number};
  },
  csspath: "css/path.css",
  afterrender: function () {
    $("#content_logout").click (function () {
    SwsJs.Log.l ("content logout");
    $('#logoutModel').modal({});
    $('#logoutModel').find (".modal-body").html ("确定要退出吗?");
    $('#logoutModel').find (".modal-title").html ("提示");
    $('#logoutModel').find (".model-cancel").html ("返回");
    $('#logoutModel').find (".model-ok").html ("确定");
    });
  }
});
