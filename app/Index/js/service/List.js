SwsJs.View ({
  "namespace": "Index",
  "alias": "service.List",
  init: function () {
  },
  tmpldata: function () {
      var username = __Global.username;
      return {"username": username};
  },
  // 重新加载数据
  reload: function () {
    // 发起ajax请求
    var comTable = this.getView ("comTable");
    var modelData = this.getModel ("UserList").data;
    comTable.setData ({
      "property": {
      "userid": "用户id",
      "sex": "性别",
      "username": "用户名",
      },
      "pageSize": 3, // 默认为20
      "data": []
    });
    comTable.reload ();
  },
  afterrender: function () {
    this.reload ();
  }
});
