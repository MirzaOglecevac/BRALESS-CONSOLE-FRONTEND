var ImagepreviewModel = (function(){

    var imagepreviewModel = function(requestHandler){

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

        this.getImageData = function(){
            requestHandler.getRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp);
        };

        this.getImageComments = function(){
            requestHandler.getRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp);
        };

        this.updateImageData = function(body){
            requestHandler.putRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp, body);
        };

        this.deleteImage = function(){
            requestHandler.deleteRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp);
        };

        this.deleteComment = function(){
            requestHandler.deleteRequest(main.url+main.endpoint, main.request, main.coreAjax, main.thisApp);
        };

    }

    return new imagepreviewModel(RequestHandler);
})();
