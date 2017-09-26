SwsJs.View ({
  "namespace": "Login",
  "alias": "Main",
  "html": "",
  "cssautoload": true,
  init: function () {
    __Global.localDir="app/Login";
  },

  afterrender: function () {
    $("#login_ok").click(function(){
      /** 获取number,passwd,是否记住密码 */
      var number = $('#login_number').val ();
      var passwd = $('#login_passwd').val ();
      var ifremember = $('#login_ifremember').is (":checked");

      // window.setTimeout("window.location='index.html'", 0);  
      /** 请求登陆 */
      $.post(
        __Global.getFilePath ("login_index"), 
        {
            number: number,
            password: passwd
        }, 
        function(result){
          // 成功请求
          __Global.handlePost (result, function (result) {

            // 成功
            $('#tipsModel').modal("show");
            $('#tipsModel').find (".modal-title").html ("成功登陆");     
  
            // 倒计时
            var iCount = 1;
            var sBody = "欢迎回来,<strong>"+result.data.username+"</strong>"+","+iCount+"s后跳转至首页";
            $('#tipsModel').find (".modal-body").html (sBody);
  
            // 保存cookie
            __Global.flag = result.data.flag;
            __Global.password = passwd;
            __Global.number = number;

            CM_Cookie.setCookie (__Global.C_NUMBER, __Global.number);
            CM_Cookie.setCookie (__Global.C_FLAG, __Global.flag);
            CM_Cookie.setCookie (__Global.C_PASSWD, __Global.password);
  
            setInterval(function () {
              --iCount;
              if (iCount <= -1) {
                  // 计数完成，跳转至首页
                  window.setTimeout("window.location='index.html'", 0);
              } else {
                  var sBody = "欢迎回来,<strong>"+result.data.username+"</strong>"+","+iCount+"s后跳转至首页";
                  $('#tipsModel').find (".modal-body").html (sBody);
              }
            }, 1000);

          }, function (result) {
            // 失败
          SwsJs.Log.l (result);            
            $('#tipsModel').modal("show");
            $('#tipsModel').find (".modal-title").html ("登陆失败");
            $('#tipsModel').find (".modal-body").html ("原因:<strong style='color: red;'>"+result.msg+"</strong>");
          });
        }
      );
    });
  }
});
