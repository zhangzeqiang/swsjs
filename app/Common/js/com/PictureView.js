/*!
 * Trip-admin1.0 Javascript Library
 * @Author: LYM
 * @function: 图片组件
 */
import '../../css/com/PictureView.css';

SwsJs.View ({
    "namespace": "Common",
    "alias": "com.PictureView",
    "cssautoload": false,
    "html": require ('../../com/PictureView.html'),
    init: function () {
    },
    "data": [
      {
        "image": "img/table1.gif", "title": "【自驾】川西行迹", "author": "麻雀也要飞", "type": "自驾之路", "clicknumber": "12万",
        "imagehref": "https://www.sina.com", "titlehref": "https://www.google.com",
        "authorhref": "https://www.baidu.com", "typehref": "https://www.bilibili.com",
      },
      {
        "image": "img/table2.gif", "title": "【山野】初识女神白卡莲", "author": "泳珊wp20", "type": "山野", "clicknumber": "12万",
        "imagehref": "https://www.sina.com", "titlehref": "https://www.google.com",
        "authorhref": "https://www.baidu.com", "typehref": "https://www.bilibili.com",
      },
      {
        "image": "img/table3.gif", "title": "【自驾】七天行走滇川藏", "author": "麦秆", "type": "自驾之路", "clicknumber": "12万",
        "imagehref": "https://www.sina.com", "titlehref": "https://www.google.com",
        "authorhref": "https://www.baidu.com", "typehref": "https://www.bilibili.com",
      },
      {
        "image": "img/table4.gif", "title": "【自驾】7月青甘川游记", "author": "锋文有雨", "type": "长假远行", "clicknumber": "12万",
        "imagehref": "https://www.sina.com", "titlehref": "https://www.google.com",
        "authorhref": "https://www.baidu.com", "typehref": "https://www.bilibili.com",
      },
      {
        "image": "img/table5.gif", "title": "【摄影】花鸟岛的星空和荧光海", "author": "grueming", "type": " 驴光掠影", "clicknumber": "12万",
        "imagehref": "https://www.sina.com", "titlehref": "https://www.google.com",
        "authorhref": "https://www.baidu.com", "typehref": "https://www.bilibili.com",
      },
      {
        "image": "img/table6.gif", "title": "【山野】三明虎头山-莲花峰", "author": "莫言", "type": "出行", "clicknumber": "12万",
        "imagehref": "https://www.sina.com", "titlehref": "https://www.google.com",
        "authorhref": "https://www.baidu.com", "typehref": "https://www.bilibili.com",
      },
      {
        "image": "img/table7.gif", "title": "【自驾 】黔南小七孔，遊山玩", "author": "litterren", "type": "山野", "clicknumber": "12万",
        "imagehref": "https://www.sina.com", "titlehref": "https://www.google.com",
        "authorhref": "https://www.baidu.com", "typehref": "https://www.bilibili.com",
      },
      {
        "image": "img/table8.gif", "title": "【山野】三明虎头山-莲花峰", "author": "2an1", "type": " 长假远行", "clicknumber": "12万",
        "imagehref": "https://www.sina.com", "titlehref": "https://www.google.com",
        "authorhref": "https://www.baidu.com", "typehref": "https://www.bilibili.com",
      },
      {
        "image": "img/table9.gif", "title": "【长假】边走边看之大美新疆", "author": "莫言", "type": "长假远行", "clicknumber": "12万",
        "imagehref": "https://www.sina.com", "titlehref": "https://www.google.com",
        "authorhref": "https://www.baidu.com", "typehref": "https://www.bilibili.com",
      },
    ],
    "image":"img/hottopic.jpg",
    "imagehref":"https://www.baidu.com",
    "title":"【2017年度大型活动】清洁山野，一起行动",
    "titlehref":"https://www.baidu.com",
    "description":"榜样就是力量！不仅仅是去户外清理垃圾，而是希望影响周围的人，树立起“不乱丢垃圾、不破坏自然”的环保意识。",
    "ultitle":[
      {"title":"【活动公告】2017磨房河源九九重阳登山","titlehref":"https://www.baidu.com"},
      {"title":"【活动公告】2017磨房北京山野百里","titlehref":"https://www.google.com"},
      {"title":"【活动公告】2017磨房发现深圳","titlehref":"https://www.sina.com"},
      {"title":"【活动公告】2017磨房南山十登","titlehref":"https://www.baidu.com"},
      {"title":"【活动公告】益骑中国·2017环深圳250公里骑行","titlehref":"https://www.baidu.com"}
    ],
    "morepopular":[
      {"title":" 磨坊户外线路","titlehref":"https://www.baidu.com"},
      {"title":" 装备测评","titlehref":"https://www.baidu.com"},
      {"title":" 磨房淘宝","titlehref":"https://www.baidu.com"},
      {"title":" 安全回家","titlehref":"https://www.baidu.com"},
      {"title":" 出行保险","titlehref":"https://www.baidu.com"}
    ],
    /*tmpldata: {
      "name": "通过"
    },*/
    tmpldata: function () {
      var username = __Global.username;
      return {
        "name": "最热推荐",
        "data":this.data,
        "image":this.image,
        "imagehref":this.imagehref,
        "title":this.title,
        "titlehref":this.titlehref,
        "description":this.description,
        "ultitle":this.ultitle,
        "morepopular":this.morepopular
      };
    },
    setData: function (data) {
      this.data = data;
    },
    setHottopic: function (image) {
      this.image = image;
    },
    setHottopic: function (imagehref) {
      this.imagehref = imagehref;
    },
    setHottopic: function (title) {
      this.title = title;
    },
    setHottopic: function (titlehref) {
      this.titlehref = titlehref;
    },
    setHottopic: function (ultitle) {
      this.ultitle = ultitle;
    },
    setHottopic: function (morepopular) {
      this.morepopular = morepopular;
    },
    afterrender: function () {
      
    }
});
