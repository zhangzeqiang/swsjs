## 1、App层
1) 参数

    init: 应用初始化时执行
    tmplFunc: 模板解析函数(使用doT.js模板引擎)
    
    common: 公用库
    commonviews: 导入公用库内的库组件
    
    route: 用户自定义模块引用目录
    views: 交互模块
    models: 数据模型
    
    entry: 入口 (入口组件)

## 2、View+controller层
### 1) JS定义

    对象属性
    namespace: 命名空间(必须)
    alias: 别名(必须)
    init: 初始化时执行(必须)
    afterrender: 渲染后的事件定义(定义标签事件,必须)
    cssautoload: 自动加载默认css路径(可默认不需css定义)
    tmpldata: 返回模板数据源格式(可默认模板不需要数据)
    
    函数
    refresh(): 刷新UI()

### 2) HTML标签定义

    <View props={} id='xxx'></View>
    <comTable></comTable>
    
## 3、model层

    对象属性
    namespace: 命名空间
    alias: 别名
    data: 默认数据
    autoload: 是否自动加载数据
    url: 远程地址
    param: 参数
    root: 返回结果键域(取json中的哪个关键数据作为根数据)
    
    函数
    load: function (obj, result) {
        // result为获取的结果
    }

## 4、获取引用
1) view内model引用

    this.getModel("SexList")

2) view内view引用

    this.getView("SexList")

## 5、框架加载流程
    
    启动Application->同步加载Model->加载View->获取html模板定义并用解析函数解析、监听事件
    
## 6、例子
### 组件导入
1) index.html引入组件标签mainMain

**index.html**

    ...
    <script type="text/javascript" src="app/Index.js"></script>
    ...
    <mainMain props="{'name': '测试'}"></mainMain>
    ...

2) Index.js声明入口组件main.Main,使用模板解析doT.js函数解析html模板

**Index.js**

    var app = new SwsJs.Application ({
        // 初始化
        "init": function () {
        },
        /** 自定义模板解析函数 */
        "tmplFunc": function (tmplResult, data) {
            if (typeof (data) != "undefined") {
                var result = doT.template (tmplResult)(data);
                return result;
            } else {
                return tmplResult;
            }
        },
        // 公用组件库
        ... 
        // 自定义
        "route": "Index",
        // 声明组件
        "views": [
            "main.LeftMenu",
            "main.Content",
            'main.LogoutModel'
        ],
        // 声明模型
        "models": [
            "UserList",
        ],
        // 入口文件
        "entry": "main.Main"
    });
    app.run ();

3) Index.js声明用户自定义组件和公用库组件

**Index.js**

    ...
    // 公用库
    "common": "Common",
    "commonviews": [
        "com.Table",
    ],
    ...
        
4) route(Index/js/main/Main.js,Index/css/...,Index/html/...)目录里定义组件main.Main的js、css、html定义

**js/main/Main.js**

    SwsJs.View ({
        // 定义所在的工作区(Index)
        "namespace": "Index",
        // 定义别名(直接通过mainMain标签可引入)
        "alias": "main.Main",   
        // 默认为false，即不导入对应的css文件
        "cssautoload": true,    
        // 组件初始化时执行(只执行一次)
        init: function () {
            __Global.localDir="app/Index";
        },
        // 组件刷新或者渲染后执行(一般完成事件定义)
        afterrender: function () {
          $(".bn_main").click(function(){
            console.log ("Hello");
          });
        }
    });

**css/main/Main.css**

    div .rightcontent { border: solid 1px #C2C2C2; }
    div .leftmenu { border: solid 1px #C2C2C2; }

**html/main/Main.html**

    <div class='container-fluid'>
      <div class='row'>
        <div class='col-md-2 col-sm-3 col-xs-4 col-lg-1 leftmenu'>
          <!-- 左侧菜单 -->
          <div class='row text-center' style='height: 100%;'>
            <mainLeftMenu></mainLeftMenu>
          </div>
        </div>
        <div class='col-md-10 col-sm-9 col-xs-8 col-lg-11 rightcontent' style='background-color: #ffffff;'>
          <!-- 右侧菜单项 -->
          <div class='row text-center' style='height: 100%;'>
            <mainContent></mainContent>
          </div>
        </div>
      </div>
    </div>

### 公用库组件定义(以Table.js为例子)
1) 组件定义
    
**Common/js/com/Table.js**

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

**Common/html/com/Table.html**

    <div class="panel panel-success row">
        <!-- 操作 -->
        <div class="panel-heading" style="">
            <h3 class="panel-title">普通用户</h3>
        </div>
        <table class="table table-bordered table-striped table-hover" style="width: 100%;">
            <thead>
            <tr>
                {{ for (var key in it.property) { }}
                <th>{{= it.property[key] }}</th>
                {{ } }}
            </tr>
            </thead>
            <tbody>
                {{~it.data :value:index }}
                <tr>
                {{ for (var key in value) { }}
                
                {{ for (var prokey in it.property) { }}
                
                {{? prokey === key }}
                <td>{{= value[key] }}</td>
                {{??}}
                {{?}}
    
                {{ } }}
                {{ } }}
    
                </tr>
                {{~}}
            </tbody>
        </table>
    </div>
    <div class="row">
        <ul class="pagination">
            <li><a href="#">&laquo;</a></li>
            {{ for(var prop=0,pageSize=((typeof(it.pageSize))=='undefined'?20:it.pageSize);prop<it.data.length;prop=(prop+pageSize)){ }}
            <li><a href="#">{{=(prop/pageSize)+1}}</a></li>
            {{ } }}
            <li><a href="#">&raquo;</a></li>
        </ul>
    </div>

2) 组件引入
    
**Index/html/user/List.html**
在Index.js通过组件别名导入公用库Table组件后,直接在html标签引入组件标签(又别名转换，点分隔符去掉)即可

    <comTable></comTable>

**Index/js/user/List.js**

先执行模型的load方法刷新模型数据后获取模型的data，把data通过组件comTable提供的setData方法更新组件的内部数据,执行组件的reload方法，刷新组件

    var comTable = this.getView ("comTable");
    var modelData = this.getModel ("UserList").load ().data;
    comTable.setData ({
      "property": {
      "userid": "用户id",
      "sex": "性别",
      "username": "用户名",
      },
      "pageSize": 10, // 默认为20
      "data": modelData
    });
    comTable.reload ();
    