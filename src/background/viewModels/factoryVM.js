FactoryVM = function(superClass,FactoryModel,Configuration) {

    return class extends superClass {

        constructor() {
            super();
        }

        addVideo(ironRequest, body) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/';
            var request = 'add-video';
            var coreAjax = ironRequest;

            // setup iron request
            FactoryModel.requestIron(url,endpoint,request,coreAjax,this);
            FactoryModel._addVideo(body);
        }

        addVideos(ironRequest, body) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/';
            var request = 'add-videos';
            var coreAjax = ironRequest;

            // setup iron request
            FactoryModel.requestIron(url,endpoint,request,coreAjax,this);
            FactoryModel._addVideos(body);
        }

        addPornstars(ironRequest, body) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/';
            var request = 'add-pornstars';
            var coreAjax = ironRequest;

            // setup iron request
            FactoryModel.requestIron(url,endpoint,request,coreAjax,this);
            FactoryModel._addPornstars(body);
        }


        addPornstar(ironRequest, body) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/';
            var request = 'add-pornstar';
            var coreAjax = ironRequest;

            // setup iron request
            FactoryModel.requestIron(url,endpoint,request,coreAjax,this);
            FactoryModel._addPornstar(body);
        }

        addSearch(ironRequest, body) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/';
            var request = 'add-search';
            var coreAjax = ironRequest;
console.log(body);
            // setup iron request
            FactoryModel.requestIron(url,endpoint,request,coreAjax,this);
            FactoryModel._addSearch(body);
        }



        ready(){
            super.ready();
            this.addEventListener('request-response', (e)=>this._requestResponse(e));
        }

        _requestResponse(e) {

            if(e.detail.kind == "add-video"){
                this.$.loadVideoSpinner.style = "display: none";
                this.$.addVideoButton.style = "display: inline-block";
                this.$.addVideosButton.disabled = false;
                this.$.addPornstarButton.disabled = false;
                this.$.addPornstarsButton.disabled = false;
                this.$.addSearchButton.disabled = false;
            }else if(e.detail.kind == "add-videos"){
                this.$.loadVideosSpinner.style = "display: none";
                this.$.addVideosButton.style = "display: inline-block";
                this.$.addVideoButton.disabled = false;
                this.$.addPornstarButton.disabled = false;
                this.$.addPornstarsButton.disabled = false;
                this.$.addSearchButton.disabled = false;
            }else if(e.detail.kind == "add-pornstars"){
                this.$.loadPornstarsSpinner.style = "display: none";
                this.$.addPornstarsButton.style = "display: inline-block";
                this.$.addVideoButton.disabled = false;
                this.$.addVideosButton.disabled = false;
                this.$.addPornstarButton.disabled = false;
                this.$.addSearchButton.disabled = false;
            }else if(e.detail.kind == "add-pornstar"){
                this.$.loadPornstarSpinner.style = "display: none";
                this.$.addPornstarButton.style = "display: inline-block";
                this.$.addVideoButton.disabled = false;
                this.$.addVideosButton.disabled = false;
                this.$.addPornstarsButton.disabled = false;
                this.$.addSearchButton.disabled = false;
            }else if(e.detail.kind == "add-search"){
                this.$.loadSearchSpinner.style = "display: none";
                this.$.addSearchButton.style = "display: inline-block";
                this.$.addVideoButton.disabled = false;
                this.$.addVideosButton.disabled = false;
                this.$.addPornstarsButton.disabled = false;
                this.$.addPornstarButton.disabled = false;
            }

            this.dispatchEvent(new CustomEvent('scrap-ended', {
                bubbles: true, composed: true, detail: {
                    value: "scrap"
                }
            }));

        }
    }

}
