(function(){
    var host = "http://" + window.location.host;
    host = host.indexOf("localhost") > -1 ?  host + "/hanyonghao.github.io" : host;
    $.getJSON(host + "/data/test.json",function(result){
        console.log(result)
    });
})();