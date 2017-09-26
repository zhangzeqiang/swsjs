SwsJs.View ({
  "namespace": "Common",
  "alias": "com.Table",
  init: function () {
    // 默认加载Model作为本页数据
    // this.reload ();
  },
  "data": {
    "property": {
    },
    "pageSize": 3, // 默认为20
    "data": [
    ]
  },
  tmpldata: function () {
    var data = this.data;
    var len = data.data.length;
    var pageSize = data.pageSize;

    var pageNumber = Math.ceil(len/pageSize);
    this.data.pageNumber = pageNumber;
    return this.data;
  },
  // 加载模块作为本页数据
  reload: function () {
    // 刷新本页
    this.refresh ();
  },
  // 设置表格数据
  setData: function (json) {
    this.data = json;
  },
  loadWithData: function () {
  },
  afterrender: function () {
  }
});
