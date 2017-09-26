SwsJs.View ({
  "namespace": "Index",
  "alias": "worker.ManagerList",
  init: function () {
    // 默认加载Model作为本页数据
    this.loadModel ();
  },
  // 加载模块作为本页数据
  loadModel: function () {
  },
  // 重新加载数据
  reload: function () {
    // 发起ajax请求
    var comTable = this.getView ("comTable");
    var workerModel = this.getModel ("WorkerList");
    var modelData = workerModel./*load ().*/data;
    comTable.setData ({
      "property": {
      "workid": "管理员ID",
      "username": "名字",
      "logintime": "最近一次登录",
      },
      "pageSize": 10, // 默认为20
      "data": modelData
    });
    comTable.reload ();
  },
  afterrender: function () {
    var V_this = this;
    $('#managerlist .refresh').click (function () {
      // 发起ajax请求
      V_this.reload();
    });
    /*$('#userlist .add').click (function () {
      var tagName = "userAdd";
      $('#window').find (".modal-title").html ("新增用户");
      $('#window').find (".modal-body").html ("<userAdd></userAdd>");
      V_this.update(tagName);
      $('#window').modal("show");
    });*/
  }
});
