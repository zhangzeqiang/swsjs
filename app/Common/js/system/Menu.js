import '../../css/system/Menu.css';

SwsJs.View ({
    "namespace": "Common",
    "alias": "system.Menu",
    "cssautoload": true,
    "html": require ('../../system/Menu.html'),
    init: function () {
    },
    "data": [
        {
            "name": "活动",
            "items": [
                {
                    "name": "分类",
                    "href": "list.html",
                    "values": [
                        {
                            "name": "餐饮",
                            "href": "detail.html"
                        },
                        {
                            "name": "出行",
                            "href": "detail.html"
                        },
                        {
                            "name": "睡觉",
                            "href": "detail.html"
                        },
                        {
                            "name": "更多...",
                            "href": "detail.html"
                        }
                    ]
                },
                {
                    "name": "热门目的地",
                    "href": "list.html",
                    "values": [
                        {
                            "name": "大梅沙",
                            "href": "detail.html"
                        },
                        {
                            "name": "东冲",
                            "href": "detail.html"
                        },
                        {
                            "name": "更多...",
                            "href": "detail.html"
                        }
                    ]
                },
                {
                    "name": "热门出发地",
                    "href": "list.html",
                    "values": [
                        {
                            "name": "大梅沙",
                            "href": "detail.html"
                        },
                        {
                            "name": "东冲",
                            "href": "detail.html"
                        },
                        {
                            "name": "更多...",
                            "href": "detail.html"
                        }
                    ]
                },
            ]
        },
        {
            "name": "圈子",
            "items": [
                {
                    "name": "同城学校",
                    "href": "list.html",
                    "values": [
                        {
                            "name": "龙岗小学",
                            "href": "detail.html"
                        },
                        {
                            "name": "南头中学",
                            "href": "detail.html"
                        },
                        {
                            "name": "更多",
                            "href": "detail.html"
                        }
                    ]
                },
            ]
        },
        {
            "name": "服务",
            "items": [
                {
                    "name": "第三方",
                    "href": "#",
                    "values": [
                        {
                            "name": "KISS校园",
                            "href": "https://kiss.qqswshu.com/sws-admin/teacher"
                        },
                        {
                            "name": "KISS后台",
                            "href": "https://kiss.qqswshu.com/sws-admin/web"
                        },
                    ]
                },
                {
                    "name": "教师服务",
                    "href": "list.html",
                    "values": [
                        {
                            "name": "教师服务",
                            "href": "#"
                        },
                    ]
                },
            ]
        },
    ],
    tmpldata: function () {
        return {
            "home": "首页",
            "data": this.data
        };
    },
    afterrender: function () {
      
    }
});