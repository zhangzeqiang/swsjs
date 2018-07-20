/*!
 * Trip-admin1.0 Javascript Library
 * @Author: LYM
 * @function: 简约组件(首项会重点图文介绍)
 */
import '../../css/com/BriefView.css';

SwsJs.View ({
    "namespace": "Common",
    "alias": "com.BriefView",
    "cssautoload": false,
    "html": require ('../../com/BriefView.html'),
    init: function () {
    },
    "title": "推荐目的地",
    "data": [
        {
            "image": "img/table7.gif",
            "imagetext": "图片消失了呢！？",
            "title": "川西",
            "description": "春有百花夏有风, 秋有黄叶冬有雪, 在川西可同获四季。",
            "author": "秋之收获",
            "imagehref": "https://www.sina.com",
            "titlehref": "https://www.baidu.com",
            "descriptionhref": "https://www.google.com",
        }, 
        {
            "image": "img/table6.gif",
            "title": "新西兰",
            "description": "南十字星下，美景无限，最适合自驾，也适合色驴边走边拍。",
            "author": "lonelyplane007",
            "imagehref": "https://www.sina.com",
            "titlehref": "https://www.baidu.com",
            "descriptionhref": "https://www.google.com",
        },
        
    ],
    tmpldata: function () {
        return {
            "title": this.title,
            "data": this.data
        };
    },
    setData: function (data) {
        this.data = data;
    },
    setTitle: function (title) {
        this.title = title;
    },
    afterrender: function () {
      
    }
});
