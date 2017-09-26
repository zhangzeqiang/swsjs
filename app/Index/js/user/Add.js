SwsJs.View ({
  "namespace": "Index",
  "alias": "user.Add",
  init: function () {
    this.loadModel ();
  },
  "data": {
    "sexdata": [],
    "pageSize": 3, // 默认为20
    "data": [
    ]
  },
  tmpldata: function () {
    var data = this.data;
    return this.data;
  },
  loadModel: function () {
    // 获取性别
    var modelData = this.getModel ("SexList").data;
    this.data.sexdata = modelData;

    // 刷新本页
    this.refresh ();
  },
  afterrender: function () {
    var V_this = this;
    $(".sexlist").select2({
      data: V_this.data.sexdata,
      placeholder: "请选择性别"
    })
    $(".windowok").click (function () {
        // alert ('我接到提交指令了');
        SwsJs.Log.l ("提交");
    });
  }
});
