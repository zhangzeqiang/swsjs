import '../../css/tools/ForPost.css';

SwsJs.View ({
  "namespace": "Common",
  "alias": "tools.ForPost",
  "html": require ('../../tools/ForPost.html'),
  init: function () {
  },
  tmpldata: function () {
      var username = __Global.username;
      return {
        "name": "最热推荐",
        "data": [
          {"author": "莫言", "image": "img/table1.gif", "title": "周五放假", "type": "出行", "clicknumber": "12万"},
          {"author": "莫言", "image": "img/table2.gif", "title": "周五放假", "type": "出行", "clicknumber": "12万"},
          {"author": "莫言", "image": "img/table3.gif", "title": "周五放假", "type": "出行", "clicknumber": "12万"},
          {"author": "莫言", "image": "img/table4.gif", "title": "周五放假", "type": "出行", "clicknumber": "12万"},
          {"author": "莫言", "image": "img/table5.gif", "title": "周五放假", "type": "出行", "clicknumber": "12万"},
          {"author": "莫言", "image": "img/table6.gif", "title": "周五放假", "type": "出行", "clicknumber": "12万"},
          {"author": "莫言", "image": "img/table7.gif", "title": "周五放假", "type": "出行", "clicknumber": "12万"}   
        ]
      };
  },
  afterrender: function () {
  }
});
