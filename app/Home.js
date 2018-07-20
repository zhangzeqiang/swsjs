/**
* 定义应用主入口
*/
var app = new SwsJs.Application ({
  "init": function () {
  },
  /** 自定义模板解析函数 */
  "tmplFunc": function (tmplResult, data) {
    if (typeof (data) != "undefined" && typeof (tmplResult) != "undefined") {
      var result = doT.template (tmplResult)(data);
      return result;
    } else {
      return tmplResult;
    }
  },

  // 公用库
  "common": "Common",
  "commonviews": [
    'system.Header',
    'system.Menu',
    'system.Footer'
  ],

  // 自定义
  "route": "Home",
  "views": [
    'main.Main',
    'activity.Detail',
    'activity.Description',
    'activity.User',
    'activity.Participant'
  ],
  "models": [
  ],
});
app.run ();
