TermVM = function(superClass,TermModel,Configuration) {

    return class extends superClass {

        constructor() {
            super();
        }

        getTerms(ironRequest) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/terms/data';
            var request = 'term';
            var coreAjax = ironRequest;

            // setup iron request
            TermModel.requestIron(url,endpoint,request,coreAjax,this);
            TermModel.getTerms();
        }


        updateTerms(ironRequest, body) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = "/terms/edit";
            var request = 'term-update';
            var coreAjax = ironRequest;

            // setup iron request
            TermModel.requestIron(url,endpoint,request,coreAjax,this);
            TermModel.updateTerms(body);
        }



        ready(){
            super.ready();
            this.addEventListener('request-response', (e)=>this._requestResponse(e));
        }

        _requestResponse(e) {

            if(e.detail.kind == "term"){
                this.terms = e.detail.response[0].content;
                this.$.textContainer.style="display: block";
                this.$.buttonContainer.style="display: block";
                this.$.loaderContainer.style="display: none;"
            }else if(e.detail.kind == "term-update"){
                console.log("updated");
            }


        }
    }

}
