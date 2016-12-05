(function($){

    $(document).ready(function(){
        $.getJSON(getRoot() + "/data/test.json",function(result){
            console.log(result)
        });
    });

    function getRoot(){
        var host = window.location.origin;
        host = host.indexOf("localhost") > -1 ?  host + "/hanyonghao.github.io" : host;
        return host;
    }

})(jQuery);