PornstarVM = function(superClass, PornstarModel, Configuration) {

    return class extends superClass {

        constructor() {
            super();
        }

        getPornstars(ironRequest, from, limit) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/pornstar/pornstars?from=' + from + '&limit=' + limit;
            var request = 'pornstar';
            var coreAjax = ironRequest;

            // setup iron request
            PornstarModel.requestIron(url,endpoint,request,coreAjax,this);
            PornstarModel.getPornstars();
        }


        getSearchPornstars(ironRequest, term) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/pornstar/search?term=' + term;
            var request = 'search-pornstar';
            var coreAjax = ironRequest;

            // setup iron request
            PornstarModel.requestIron(url,endpoint,request,coreAjax,this);
            PornstarModel.getSearchPornstars();
        }


        ready(){
            super.ready();
            this.addEventListener('request-response', (e) => this._requestResponse(e));
        }

        _requestResponse(e) {

            if(e.detail.kind == 'pornstar'){
                var data = this.pornstars;
                this.pornstars = data.concat(e.detail.response.data);
                this.from +=20;
                this.$.loaderContainer.style="display: none";
                this.$.pornstarsContainer.style="display: block";

                if(e.detail.response.data.length < 20){
                    this.$.loadMore.style="display: none";
                }
            }else if(e.detail.kind == 'search-pornstar'){
                this.pornstars = [];
                this.pornstars = e.detail.response.data;
                this.$.loadMore.style="display: none";
                this.$.backToMain.style = "display: block;";
                this.$.loaderContainer.style="display: none";
                this.$.pornstarsContainer.style="display: block";

            }


        }

    }

}
