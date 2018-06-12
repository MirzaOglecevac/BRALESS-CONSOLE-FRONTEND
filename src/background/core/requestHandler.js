var RequestHandler = (function(){

    var requestHandler = function(app){

        /**
         * Handle Get Request
         *
         * @param url
         * @param request
         * @param ironAjax
         * @param thisApp
         */
        this.getRequest = function(url,request,ironAjax,thisApp) {
            ironAjax.url = url;
            ironAjax.method = 'GET';
            this.handleResponse(ironAjax, request, thisApp);
        }


        /**
         * Handle Post Request
         *
         * @param url
         * @param request
         */
        this.postRequest = function(url,request,ironAjax,thisApp,body) {
            ironAjax.url = url;
            ironAjax.method = 'POST';
            ironAjax.body = body;
            this.handleResponse(ironAjax, request, thisApp);
        }


        /**
         * Handle Put Request
         *
         * @param url
         * @param request
         */
        this.putRequest = function(url,request,ironAjax,thisApp,body) {
            ironAjax.url = url;
            ironAjax.method = 'PUT';
            ironAjax.body = body;

            this.handleResponse(ironAjax, request, thisApp);
        }


        /**
         * Make Delete Request
         *
         * @param url
         * @param request
         */
        this.deleteRequest = function(url,request,ironAjax,thisApp) {
            ironAjax.url = url;
            ironAjax.method = 'DELETE';
            this.handleResponse(ironAjax, request, thisApp);
        }


        /**
         * Handle Response
         *
         * @param ironAjax
         * @param request
         * @param thisApp
         */
        this.handleResponse = function(ironAjax, request, thisApp) {
            var response = ironAjax.generateRequest();
            response.completes.then(function(req) {
                    thisApp.dispatchEvent(new CustomEvent('request-response', {
                        bubbles: true, composed: true, detail:
                            {
                                response:req.response,
                                status:req.status,
                                kind:request
                            }
                    }));
                }, function(rejected) {
                    // failed request, argument is an object
                    thisApp.dispatchEvent(new CustomEvent('request-response', {
                        bubbles: true, composed: true, detail:
                            {
                                status:request.status,
                                kind:request
                            }
                    }));

                    let req = rejected.request;
                    let error = rejected.error;

                }
            )
        }

    }

    return new requestHandler();
})();
