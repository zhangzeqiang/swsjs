/**
 * swsJs的作用域
 */
var SwsJs = (function () {
  /**
   * 定义继承类
   */
  var Class = (function() {
    var _mix = function(r, s) {
      for (var p in s) {
        if (s.hasOwnProperty(p)) {
          r[p] = s[p];
        }
      }
    };
  
    var _extend = function() {
  
      //开关 用来使生成原型时,不调用真正的构成流程init
      this.initPrototype = true;
      var prototype = new this();
      this.initPrototype = false;
  
      var items = Array.prototype.slice.apply(arguments).slice() || [];
      var item;
  
      //支持混入多个属性，并且支持{}也支持 Function
      while (item = items.shift()) {
        _mix(prototype, item.prototype || item);
      }
  
      // 这边是返回的类，其实就是我们返回的子类
      function SubClass() {
        if (!SubClass.initPrototype && this.init) {
          this.init.apply(this, arguments);//调用init真正的构造函数
        }
      }
  
      // 赋值原型链，完成继承
      SubClass.prototype = prototype;
  
      // 改变constructor引用
      SubClass.prototype.constructor = SubClass;
  
      // 为子类也添加extend方法
      SubClass.extend = _extend;
  
      return SubClass;
    };
  
    //超级父类
    var Class = function() {};
  
    //为超级父类添加extend方法
    Class.extend = _extend;
    return Class;
  
  })();
  
  /**
   * 定义基类原型
   */
  var Base = Class.extend({
    init:function(config){
      //自动保存配置项
      this.__config = config;
      this.bind();
      this.render();
      if (typeof (this.__config.init) != "undefined") {
        this.__config.init();
      }
    },
  
    //可以使用get来获取配置项
    get:function(key){
      return this.__config[key];
    },
  
    //可以使用set来设置配置项
    set:function(key, value){
      this.__config[key] = value;
    },
  
    bind:function(){
    },
  
    render:function() {
    },
  
    //定义销毁的方法，一些收尾工作都应该在这里
    destroy:function(){
    }
  });
  
  // 定义UI数组
  var SwsJs = function () {};
  SwsJs.ViewsMap = new Array();
  SwsJs.ModelsMap = new Array();

  SwsJs.__thisApp = "";   // app
  SwsJs.__Route = "";     // 当前用户工作区
  SwsJs.__Common = "";    // 当前用户使用的UI库区

  SwsJs.__ViewLists = [];

  // 定义应用
  var Application = Base.extend ({
    run: function () {
      /** 加载Route */
      SwsJs.__thisApp = this;
      SwsJs.__Route = this.__config.route;
      SwsJs.__Common = this.__config.common;

      var viewlists = this.__config.views;
      var modellists = this.__config.models;

      var commonViewlists = this.__config.commonviews;
      var commonModellists = this.__config.commonmodels;

      /** 合并两个viewLists */
      if (typeof (commonViewlists) != 'undefined') {
        SwsJs.__ViewLists = commonViewlists.concat (viewlists);
      } else {
        SwsJs.__ViewLists = viewlists;
      }

      /** 加载首个ui */
      /*var firstConfName = this.__config.entry;
      firstDirFilename = firstConfName.replace (/\./g, '/');
      SwsJs.__thisApp.entryScriptloading (SwsJs.__Route, firstDirFilename);*/
      
      /** 导入common库 */
      Application.loadWorkspace (SwsJs.__thisApp, modellists, 
        viewlists, SwsJs.__Route);

      /** 导入自定义工作区 */
      Application.loadWorkspace (SwsJs.__thisApp, commonModellists, 
        commonViewlists, SwsJs.__Common);
    },

    /**
     * 入口View
     */
    entryScriptloading: function (route, firstDirFilename) {
      // 此处还待优化(要求配置views的时候需要把入口页面写第一条)
      Application.LoadJs (firstDirFilename, function () {
        firstAliasKey = firstDirFilename.replace (/\//g, '');
        var firstDiv = SwsJs.ViewsMap[firstAliasKey];
        if (typeof(firstDiv) != 'undefined') {
          try {
            firstDiv.loadToTag (firstAliasKey);
          } catch (error) {
            SwsJs.Log.e (error);
          }
        } else {
        }
      }, SwsJs.__Route);
    },

    /**
     * 其他view
     */
    otherTag: function (lists) {
      // 加载所有View
      for (var key in lists) {
        var confname = lists[key];

        // 全文替换.->空
        confAliasKey = confname.replace (/\./g, '');
        var firstDiv = SwsJs.ViewsMap[confAliasKey];
        if (typeof(firstDiv) != 'undefined') {
          try {
            firstDiv.loadToTag (confAliasKey);
          } catch (error) {
            SwsJs.Log.e (error);
          }
        } else {
        }
      }
    }
  });
    
  /**
   * 定义APP静态类
   */
  // 加载工作区
  Application.loadWorkspace = function (app, modellists, viewlists, route) {
    // 加载models
    for (var key in modellists) {
      var secondConfName = modellists[key];

      // 替换.成/
      secondDirFileName = secondConfName.replace (/\./g, '/');

      // 此处还待优化(要求配置views的时候需要把入口页面写第一条)
      Application.LoadModel (secondDirFileName, function () {
      }, route);
    }

    // 加载view
    for (var key in viewlists){
      var secondConfName = viewlists[key];

      // 替换.成/
      secondDirFileName = secondConfName.replace (/\./g, '/');

      // 此处还待优化(要求配置views的时候需要把入口页面写第一条)
      Application.LoadJs (secondDirFileName, function () {
        Application.Refresh ();
      }, route);
    }
  } 

  /**
   * 判断所有view加载完毕才刷新UI
   */
  Application.Refresh = function () {
    var length = Object.keys(SwsJs.ViewsMap).length;
    var totalNum = SwsJs.__ViewLists.length;
    if (length >= totalNum) {
      SwsJs.__thisApp.otherTag (SwsJs.__ViewLists);
    }
  };

  // 加载css
  Application.css = function (filename, route) {
    var viewCssFile = "app/"+route+"/css/"+filename+".css";
    $("<link>").attr({ 
      rel: "stylesheet",
      type: "text/css",
      href: viewCssFile
    })
    .appendTo("head");
    return true;
  };

  // 加载Js
  Application.LoadJs = function (filename, func, route) {
    var viewJsFile = "app/"+route+"/js/"+filename+".js";

    // $.getScript(viewJsFile, func);
    func ();
  };

  // 加载model
  Application.LoadModel = function (filename, func, route) {
    var viewJsFile = "app/"+route+"/model/"+filename+".js";
    /*$.ajax({
      type: "get",
      async: false,
      cache: true,
      url: viewJsFile, 
      success: func
    });*/
    func ();
  };

  // 加载html
  Application.LoadHtml = function (filename, func, route) {
    var htmlFile = "app/"+route+"/html/"+filename+".html";
    /*$.ajax({ 
      async: false,
      url: htmlFile,
      cache: true,
      success: function (tmplResult) {
        func (tmplResult);
      }
    });*/

  };

  var Tools = (function () {

    var Tools = new Object();

    Tools.replaceForKey = function (objarr, srcKey, desKey) {
      for (var i=0;i<objarr.length;i++) {
          var obj = objarr[i];
          for (var key in obj) {
              if (srcKey == key) {
                  obj[desKey] = obj[key];
                  delete obj.key;
                  break;
              }
          }
      }
    };
    return Tools;
  });
  var __tools = new Tools ();
  SwsJs.Tools = __tools;

  // 定义日志输出类
  var Log = function () {};
  Log.l = function (content) {
    console.log (content);
  };
  Log.e = function (content) {
    console.error (content);
  };
  SwsJs.Log = Log;

  SwsJs.Application = Application;

  /** 定义View */
  SwsJs.View = (function (__obj) {
    
    // 加载自定义标签
    __obj.loadToTag = (function (aliasKey) {
      // 第一个ui
      var docObjs = $(aliasKey);
      var aliasKeyObj = SwsJs.ViewsMap[aliasKey];   // 事件定义

      if (typeof(aliasKeyObj) == "undefined") {
        SwsJs.Log.e ("content找不到");
      }

      var len = docObjs.length;

      if (len > 0) {
        for (var i=0;i<len;i++) {
          docDom = docObjs[i];
          docObj = $(docDom);

          // 渲染前的初始化
          if (typeof(aliasKeyObj.beforerender) != "undefined") {
            aliasKeyObj.beforerender ();
          }

          if (typeof (docObj) != 'undefined') {
            // 加入标签
            var tmpNode = aliasKeyObj.div.cloneNode (true);

            // 获取定义的属性值
            var props = docObj.attr ("props");
            var tmplResult = aliasKeyObj.tmpl;  // 获取tmpl

            // 加载属性
            aliasKeyObj.loadAttr (docObj, tmpNode);

            aliasKeyObj.props = props;

            var tmplFunc = SwsJs.__thisApp.__config.tmplFunc;
            var tmplData = aliasKeyObj.props;
            
            // 优先解析view的tmpldata方法,其次解析自定义标签的props
            if (typeof(aliasKeyObj.tmpldata) != "undefined") {
              tmplData = aliasKeyObj.tmpldata ();
            } else if (typeof (tmplData) != "undefined"){
              // 将字符串转成对象
              tmplData = tmplData.replace (/\'/g, '\"');
              tmplData = $.parseJSON(tmplData);
            } else {}

            aliasKeyObj.props = tmplData;
            
            /** 执行App自定义的模板解析函数 */
            var result = tmplResult;
            if (typeof (tmplFunc) != "undefined") {
              result = tmplFunc (tmplResult, aliasKeyObj.props);
            }
            tmpNode.innerHTML = result;

            // 添加新节点
            docObj.parent().append (tmpNode);

            // 删除节点
            docObj.remove ();

            // 渲染后
            if (typeof(aliasKeyObj.afterrender) != "undefined") {
              aliasKeyObj.afterrender ();
              aliasKeyObj.loadTags ();
            }
          }
          // break;
        }   
      } else {
      }
    });

    // 加载属性
    __obj.loadAttr = (function (docObj, tmpNode) {
      var Attrs = ["value", "id", "props"];
      for (var i=0;i<Attrs.length;i++) {
        var attr = docObj.attr (Attrs[i]);
        if (typeof (attr) != 'undefined') {
          tmpNode.setAttribute (Attrs[i], attr);
        }
      }
    });

    __obj.loadTags = (function () {
      SwsJs.__thisApp.otherTag (SwsJs.__ViewLists);
    });

    // 获取model
    __obj.getModel = (function (aliasKey) {
      return SwsJs.ModelsMap[aliasKey];
    });

    // 获取view
    __obj.getView = (function (aliasKey) {
      return SwsJs.ViewsMap[aliasKey];
    });

    // 重新渲染标签
    __obj.update = (function (aliasKey) {
      this.loadToTag(aliasKey);
    });

    // 重新渲染标签
    __obj.refresh = (function () {
      this.refreshWithAttr ("class", this.alias.replace (/\./g, ''));
      /*$("."+aliasClassName).removeAttr("class").empty().replaceWith(aliasDirDir);
      this.update (aliasDirFileName);*/
    });

    // 重新渲染标签,根据拥有指定属性值来刷新
    __obj.refreshWithAttr = (function (attrKey, attrValue) {
      var alias = this.alias;
      aliasDirFileName = alias.replace (/\./g, '');
      aliasClassName = alias.replace (/\./g, '');

      var docObjs = $("."+aliasClassName);
      for (var i=0;i<docObjs.length;i++) {
        // 更新class为alias的标签并删除
        var aliasDirDir = document.createElement (aliasDirFileName);

        docDom = docObjs[i];
        docObj = $(docDom);
        if (docObj.attr (attrKey) != attrValue) {
          continue;
        }
        this.loadAttr (docObj, aliasDirDir);
        docObj.removeAttr ("class").empty ().replaceWith (aliasDirDir);
        this.update (aliasDirFileName);
      }
      /*$("."+aliasClassName).removeAttr("class").empty().replaceWith(aliasDirDir);
      this.update (aliasDirFileName);*/
    });

    // 构造函数
    var View = new Object ();

    // 使用html文件构造自定义标签和事件
    (function (obj) {
      // 获取别名
      var alias = "";
      if (typeof (obj.alias) != "undefined") {
        alias = obj.alias;
      } else {
        SwsJs.Log.e ("alias 不能为空");
        return ;
      }

      // 生成div标签
      var div = document.createElement ("div");
      aliasClass = alias.replace (/\./g, '');
      div.setAttribute("class", aliasClass);
      obj.div = div;
 
      // 全文替换.->/
      aliasDirFileName = alias.replace (/\./g, '/');

      // css路径是否配置
      if (typeof (obj.cssautoload) != 'undefined' && obj.cssautoload == true) {
        SwsJs.Application.css (aliasDirFileName, obj.namespace);
      } else {
      }

      // 获取html定义
      if (typeof(obj.html) != "undefined") {
        var html = obj.html;
        obj.tmpl = html;
      } else {
        Application.LoadHtml (aliasDirFileName, function(result){
          obj.tmpl = result;    // 临时保存tmpl
        }, obj.namespace);
      }

      // 加入views队列
      SwsJs.ViewsMap[aliasDirFileName.replace (/\//g, '')] = obj;

      // 在ui渲染前
      if (typeof(__obj.init) != "undefined") {
        __obj.init ();
      }
    })(__obj);

    // 根据标别名键值加载
    View.obj = __obj;  // view的this对象

    return View;
  });

  // TODO 
  SwsJs.Model = (function (__obj) {

    // 加载model
    __obj.load = (function (callback) {
      
      var type = this.type;
      // 如果是远程请求
      if (typeof(type) == 'undefined' || type == 'remote') {
        var url = this.url;
        var param = this.param;

        if (typeof (url) != "undefined") {
          V_this = this;
          $.ajax({
            type: "post",
            url: url, 
            async : false,
            data: param, 
            success: function (result) {
              V_this.data = result[V_this.root];
              if (typeof (callback) != 'undefined') {
                  callback (V_this, result);
              }
            }
          });
        }
      }
      return this;
    });

    if (typeof(__obj.init) != "undefined") {
      __obj.init ();
    }

    var Model = new Object();

    (function (obj) {
      // 获取别名
      var alias = "";
      if (typeof (obj.alias) != "undefined") {
        alias = obj.alias;
      } else {
        SwsJs.Log.e ("alias 不能为空");
        return ;
      }

      aliasKeyName = alias.replace (/\./g, '');

      // 加入models队列
      SwsJs.ModelsMap[aliasKeyName] = obj;
    })(__obj);

    Model.obj = __obj;

    // 自动加载
    if (__obj.autoload) {
      __obj.load (function () {
      });
    }

    return Model;
  });

  return SwsJs;

})();