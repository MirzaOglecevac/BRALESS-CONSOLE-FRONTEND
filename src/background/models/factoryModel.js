var FactoryModel = (function(){

    var factoryModel = function(requestHandler){

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

        this._addVideo = function(body){
            requestHandler.postRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp, body);
        };

        this._addVideos = function(body){
            requestHandler.postRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp, body);
        };

        this._addPornstars = function(body){
            requestHandler.postRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp, body);
        };

        this._addPornstar = function(body){
            requestHandler.postRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp, body);
        };

        this._addSearch = function(body){
            requestHandler.postRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp, body);
        };

    }

    return new factoryModel(RequestHandler);
})();
