/**
* 定义应用主入口
*/
var app = new SwsJs.Application ({
  "route": "Login",
  "views": [
    'LogoutModel'
  ],
  "entry": "Main"
});
app.run ();
