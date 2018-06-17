var PornstarpreviewModel = (function(){

    var pornstarpreviewModel = function(requestHandler){

        var main = this;
        var url;
        var endpoint;
        var request;
        var coreAjax;
        var thisApp;

        this.requestIron = function(url, endpoint, request, coreAjax,thisApp){
            main.url = url;
            main.endpoint = endpoint;
            main.request = request;
            main.coreAjax = coreAjax;
            main.thisApp = thisApp;
        }

        this.getPornstarData = function(){
            requestHandler.getRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp);
        };

        this.updatePornstarData = function(body){
            requestHandler.putRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp, body);
        };

        this.pornstarAddVideo = function(body){
            requestHandler.postRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp, body);
        };

        this.pornstarAddImage = function(body){
            requestHandler.postRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp, body);
        };

        this.deletePornstar = function(){
            requestHandler.deleteRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp);
        };

    }

    return new pornstarpreviewModel(RequestHandler);
})();
