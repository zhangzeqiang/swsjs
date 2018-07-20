/*!
 * Trip-admin1.0 Javascript Library
 * @Author: LYM
 * @function: 简约列表组件(列表形式显示内容)
 */
import '../../css/com/BriefListView.css';

SwsJs.View ({
    "namespace": "Common",
    "alias": "com.BriefListView",
    "cssautoload": false,
    "html": require ('../../com/BriefListView.html'),
    init: function () {
    },
    "relatedTitle": "相关活动",
    "recentTitle": "近期活动",
    "relatedData": [
        {
            "image": "img/table1.gif",
            "imagetext": "图片消失了呢！？",
            "title": "长假 | 国庆川西长线徒步",
            "author": "海洋沙漠",
            "time":"日期:2017-09-28",
            "imagehref": "https://www.sina.com",
            "titlehref": "https://www.baidu.com",
            "authorhref": "https://www.google.com",
        },
        {
            "image": "img/table2.gif",
            "imagetext": "图片消失了呢！？",
            "title": "自驾 | 川西党岭葫芦海",
            "author": "刚莫过小腿",
            "time":"日期:2017-09-30",
            "imagehref": "https://www.sina.com",
            "titlehref": "https://www.baidu.com",
            "authorhref": "https://www.google.com",
        },
        {
            "image": "img/table3.gif",
            "imagetext": "图片消失了呢！？",
            "title": "异域 | 新西兰20天自驾",
            "author": "yingshanliu",
            "time":"日期:2017-10-28",
            "imagehref": "https://www.sina.com",
            "titlehref": "https://www.baidu.com",
            "authorhref": "https://www.google.com",
        },
    ],
    "recentData": [
        {
            "image": "img/table4.gif",
            "imagetext": "图片消失了呢！？",
            "title": "徒步 | 青岛唐岛湾",
            "author": "一贫道长",
            "time":"出发:2017-09-23",
            "imagehref": "https://www.sina.com",
            "titlehref": "https://www.baidu.com",
            "authorhref": "https://www.google.com",
        },
        {
            "image": "img/table5.gif",
            "imagetext": "图片消失了呢！？",
            "title": "休闲 | 河源万绿湖自驾",
            "author": "空中巴士",
            "time":"出发:2017-09-30",
            "imagehref": "https://www.sina.com",
            "titlehref": "https://www.baidu.com",
            "authorhref": "https://www.google.com",
        },
        {
            "image": "img/table6.gif",
            "imagetext": "图片消失了呢！？",
            "title": "山野 | 深圳三水线穿越",
            "author": "鹰与蜗牛py",
            "time":"出发:2017-10-01",
            "imagehref": "https://www.sina.com",
            "titlehref": "https://www.baidu.com",
            "authorhref": "https://www.google.com",
        },
        {
            "image": "img/table7.gif",
            "imagetext": "图片消失了呢！？",
            "title": "骑行 | 国庆环海南岛骑行",
            "author": "liujkh123",
            "time":"出发:2017-10-01",
            "imagehref": "https://www.sina.com",
            "titlehref": "https://www.baidu.com",
            "authorhref": "https://www.google.com",
        },
    ],
    "ulstrive":[
        {
            "title":"1分钟微信投保",
            "titlehref":"https://www.baidu.com",
        },
        {
            "title":"磨房新版APP",
            "titlehref":"https://www.baidu.com",
        },
        {
            "title":"磨房户外线路",
            "titlehref":"https://www.baidu.com",
        },
        {
            "title":"磨房触屏版",
            "titlehref":"https://www.baidu.com",
        },
        {
            "title":"发现心世界",
            "titlehref":"https://www.baidu.com",
        }
    ],
    tmpldata: function () {
        return {
            "relatedTitle": this.relatedTitle,
            "recentTitle": this.recentTitle,
            "relatedData": this.relatedData,
            "recentData": this.recentData,
            "ulstrive":this.ulstrive
        };
    },
    setrelatedTitle: function (relatedTitle){
        this.relatedTitle = relatedTitle;
    },
    setrecentTitle: function (recentTitle){
        this.recentTitle = recentTitle;
    },
    setrelatedData: function (relatedData){
        this.relatedData = relatedData;
    },
    setrecentData: function (recentData){
        this.recentData = recentData;
    },
    setrecentData: function (ulstrive){
        this.ulstrive = ulstrive;
    },
    afterrender: function () {
      
    }
});
