import '../css/Main.css';

SwsJs.View ({
  "namespace": "Login",
  "alias": "Main",
  "html": require ('../html/Main.html'),
  "cssautoload": false,
  init: function () {
    __Global.localDir="app/Login";
    console.log ("Main.js init.");
  },

  afterrender: function () {
    // console.log ("Main.js afterrender.");
  }
});