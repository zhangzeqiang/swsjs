/**
* 定义应用主入口
*/
import './Login/js/Main.js';
import './Login/js/LogoutModel.js';

var app = new SwsJs.Application ({
  "route": "Login",
  "views": [
    'Main',
    'LogoutModel'
  ],
});
app.run ();