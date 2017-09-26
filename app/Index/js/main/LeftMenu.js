SwsJs.View ({
    "namespace": "Index",
    "alias": "main.LeftMenu",
    init: function () {
      var alias = this.alias;
    },
    "cssautoload": true,
    ifmenuVisible: function (permitFlagArr) {
      var flag = __Global.flag;
      for (var i=0;i<permitFlagArr.length;i++) {
        var permitFlag = permitFlagArr[i];
        if (flag == permitFlag) {
          return "visibility: visible;";
        }
      }
      return "display: none;";
    },
    tmpldata: function () {
      var flag = __Global.flag;
      var username = __Global.username;
      var imuserid = __Global.imuserid;
      
      var headpic = (typeof(__Global.headpic) != "undefined")?__Global.headpic:"img/headpic.png";

      var AdminText = ((flag==__Global.L_WORKER)?"工作人员":(
                          (flag==__Global.L_MASTER)?"园长端":(
                            (flag==__Global.L_TEACHER)?"教师端":"未知"
                          )
                        )
                      );
      return {
        "admintext": AdminText, 
        "username": username, 
        "imuserid": imuserid,
        "headpic": headpic,

        /** 定义左侧菜单参数 */
        "menujson": [
          {
            "icon": "glyphicon glyphicon-cog", 
            "href": "home", 
            "text": "设置", 
            "expand": "second collapse in",
            "visible": this.ifmenuVisible([0, 1, 2]),
            "child": [
              { 
                "content": "homeWelcome", 
                "text": "首页",
                "icon": "glyphicon glyphicon-home",
                "visible": this.ifmenuVisible([0, 1, 2]),
              }, 
              { 
                "content": "homeUnitList", 
                "text": "单位",
                "icon": "glyphicon glyphicon-yen"
              }
            ]
          }, 
          {
            "icon": "glyphicon glyphicon-user", 
            "href": "worker", 
            "text": "人员管理", 
            "visible": this.ifmenuVisible([0, 1, 2]),
            "expand": "second collapse in",
            "child": [
              { 
                "content": "workerManagerList", 
                "text": "管理人员",
                "icon": "glyphicon glyphicon-king",
                "visible": this.ifmenuVisible([0, 1, 2]),
              },
              { 
                "content": "userList", 
                "text": "普通用户",
                "icon": "glyphicon glyphicon-queen",
                "visible": this.ifmenuVisible([0, 1, 2]),
              }
            ]
          },
          {
            "icon": "glyphicon glyphicon-globe", 
            "href": "service", 
            "text": "服务", 
            "expand": "second collapse",
            "visible": this.ifmenuVisible([0, 1, 2]),
            "child": [
              { 
                "content": "serviceList", 
                "text": "服务管理",
                "icon": "glyphicon glyphicon-thumbs-up"
              }
            ]  
          },
          {
            "icon": "glyphicon glyphicon-knight", 
            "href": "activity", 
            "text": "活动", 
            "expand": "second collapse",
            "visible": this.ifmenuVisible([0, 1, 2]),
            "child": [
              { 
                "content": "homePersonnum", 
                "text": "人数范围",
                "icon": "glyphicon glyphicon-equalizer"
              }, 
              { 
                "content": "activityOfSystemList", 
                "text": "系统活动",
                "icon": "glyphicon glyphicon-star"
              }, 
              { 
                "content": "activityOfUserList", 
                "text": "用户活动",
                "icon": "glyphicon glyphicon-star-empty"
              }
            ]  
          },
          {
            "icon": "glyphicon glyphicon-fire", 
            "href": "parttimejob", 
            "text": "兼职", 
            "expand": "second collapse",
            "visible": this.ifmenuVisible([0, 1, 2]),
            "child": [
              { 
                "content": "jobOfTeacherList", 
                "text": "兼职管理",
                "icon": "glyphicon glyphicon-pawn"
              }
            ]  
          }, {
            "icon": "glyphicon glyphicon-eye-open", 
            "href": "tools", 
            "text": "工具", 
            "expand": "second collapse in",
            "visible": this.ifmenuVisible([0, 1, 2]),
            "child": [
              { 
                "content": "toolsForPost", 
                "text": "工具",
                "icon": "glyphicon glyphicon-eye-open"
              }
            ]
          },   
        ]
      };
    },
    afterrender: function () {
      var v_this = this;
      $("#leftmenu-item").children("div.menu").children("div").children("a").click(function(){
          // 往Content添加元素
          var aliasKey = $(this).attr("content");
          var tabsText = "<"+aliasKey+"></"+aliasKey+">";
          $("#content-box").empty();
          $("#content-box").append(tabsText);

          // 更新breakcrumb
          var itemName = $(this).children("span").text();
          var rootItemName = $(this).parent().siblings("a").children("span").first().text();
          var crumbBody = "<li class='glyphicon glyphicon-th-large'> "+rootItemName+"</li><li class='active'>"+itemName+"</li>";
          $("#content-crumb").html(crumbBody);
          v_this.update (aliasKey);
          return false;
      });
    }
});