var AdminModel = (function(){

    var adminModel = function(requestHandler){

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

        this.getAdmins = function(){
            requestHandler.getRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp);
        };

        this.updateAdmin = function(body){
            requestHandler.putRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp, body);
        };

        this.deleteAdmin = function(){
            requestHandler.deleteRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp);
        };

        this.addAdmin = function(body){
            requestHandler.postRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp, body);
        };

    }

    return new adminModel(RequestHandler);
})();
