/**
* 定义应用主入口
*/
var app = new SwsJs.Application ({
  "init": function () {
    // 取出cookie保存到全局变量__Global里
    __Global.number = CM_Cookie.getCookie (__Global.C_NUMBER);
    __Global.flag = CM_Cookie.getCookie (__Global.C_FLAG);
    __Global.password = CM_Cookie.getCookie (__Global.C_PASSWD);
  },
  /** 自定义模板解析函数 */
  "tmplFunc": function (tmplResult, data) {
    if (typeof (data) != "undefined") {
      var result = doT.template (tmplResult)(data);
      return result;
    } else {
      return tmplResult;
    }
  },

  // 公用库
  "common": "Common",
  "commonviews": [
    "tools.ForPost",
    "com.Table",
  ],

  // 自定义
  "route": "Index",
  "views": [
    "main.LeftMenu",
    "main.Content",
    'main.LogoutModel',
    
    'activity.OfSystemList',
    'activity.OfUserList',

    'job.OfTeacherList',
    
    'service.List',
    
    'user.List',
    'user.Add',

    'worker.ManagerList',

    'home.UnitList',
    "home.Welcome",
    'home.Personnum'
  ],
  "models": [
    "UserList",
    "SexList",
    "WorkerList"
  ],
  "entry": "main.Main"
});
app.run ();
