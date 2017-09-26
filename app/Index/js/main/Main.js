SwsJs.View ({
    "namespace": "Index",
    "alias": "main.Main",
    "cssautoload": true,
    init: function () {
        __Global.localDir="app/Index";
    },
    /*tmpldata: {
      "name": "通过"
    },*/
    afterrender: function () {
      $(".bn_main").click(function(){
        console.log ("Hello");
      });
    }
});
