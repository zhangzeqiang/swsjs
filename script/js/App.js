/*********************************
 ***  自定义js类
 ********************************/
/**
 * 自定义COOKIE操作类 (未完成)
 */
var CM_Cookie = {
    setCookie: function (c_name, value, Days) {
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie=c_name+ "=" +escape(value)+((Days==null) ? "" : ";expires="+exp.toGMTString());
    },
    delCookie: function(c_name) 
    { 
        var exp = new Date(); 
        exp.setTime(exp.getTime() - 1); 
        var cval=CM_Cookie.getCookie(c_name); 
        if(cval!=null) 
            document.cookie= c_name + "="+cval+";expires="+exp.toGMTString(); 
    },
    getCookie: function (c_name) {
        if (document.cookie.length>0)
        {
            c_start=document.cookie.indexOf(c_name + "=");
            if (c_start!=-1)
            { 
                c_start=c_start + c_name.length+1 ;
                c_end=document.cookie.indexOf(";",c_start);
                if (c_end==-1)  {
                    c_end=document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start,c_end));
            } 
        }
        return "";
    }
};
/**
 * 定义全局变量
 */
var __Global = {
    //netDir: "http://123.207.239.176/sws/public/index.php/admin",
    // netDir: "http://192.168.1.68:9000/thinkphp/public/index.php/admin",
    // netDir: "http://localhost/sws/public/index.php/admin",
    netDir: "../public/index.php/admin",
    localDir: "app/Index",
    dataDir: "data",
    localsuffix: ".json",
    remotesuffix: "",
    // 在线人数
    onlinenumber: 0,

    // 登陆信息
    number: 0,
    roleid: 0,
    password: 0,
    imuserid: 0,
    flag: 0,        // 登陆类型
    headpic: "",
    username: "账户",
    C_NUMBER: "number",
    C_IMUSERID: "imuserid",
    C_FLAG: "flag",
    C_ROLEID: "roleid",
    C_USERNAME: "username",
    C_PASSWD: "password",
    C_HEADPIC: "headpic",

    // 常量
    SPLIT: '#',
    L_WORKER: 0,        // 登陆类型-工作人员
    L_MASTER: 1,        // 登陆类型-园长
    L_TEACHER: 2,       // 登陆类型-老师
    L_PARENT: 3,        // 登陆类型-家长
    T_PARENT: 1,        // 家长
    T_TEACHER: 0,       // 老师
    P_ENTRY: 0,         // 入园
    P_OUT: 1,           // 出园
    P_UNREGISTER: 2,    // 未注册
    CAR_GETIN: 0,       // 上车
    CAR_GETOFF: 1,      // 下车
    title: "童邻后台管理系统",

    // 后台类型 
    loginType: 0,       // UI类型(左侧菜单格式)

    // 调试类型
    debug: false,

    // 函数定义
    getFilePath: function (filename) {      // 根据是否为debug来定义路径
        var strs = new Array();
        strs=filename.split ("_");
        var retfilename = "";
        for (var i=0;i<strs.length;i++) {
            if (i == (strs.length-1)) {
                retfilename = retfilename+strs[i];
            } else {
                retfilename = retfilename+strs[i]+"/";
            }
        }
        var appDir = __Global.debug?(__Global.localDir+"/"+__Global.dataDir):__Global.netDir;              // 获取地址类型(本地还是网络)
        var suffix = __Global.debug?__Global.localsuffix:__Global.remotesuffix;     // 获取后缀
        var filename = __Global.debug?filename:retfilename;
        var rootAddr = appDir+"/"+filename+suffix;
        return rootAddr;
    },
    handlePost: function (result, successFunc, failFunc) {
        var code = result.code;
        if (code == 0) {
            // 失败
            failFunc (result);
        } else if (code == 1) {
            // 成功
            successFunc (result);
        } else {}
    }
};
