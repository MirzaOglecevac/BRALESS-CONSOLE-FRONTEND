ImageVM = function(superClass,ImageModel,Configuration) {

    return class extends superClass {

        constructor() {
            super();
        }

        getImages(ironRequest, from, limit) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = "/image/images?from=" + from + "&limit=" + limit;
            var request = 'image';
            var coreAjax = ironRequest;

            // setup iron request
            ImageModel.requestIron(url,endpoint,request,coreAjax,this);
            ImageModel.getImages();
        }


        getSearchImages(ironRequest, term) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/image/search?term=' + term;
            var request = 'search-image';
            var coreAjax = ironRequest;

            // setup iron request
            ImageModel.requestIron(url,endpoint,request,coreAjax,this);
            ImageModel.getSearchImages();
        }


        ready(){
            super.ready();
            this.addEventListener('request-response', (e)=>this._requestResponse(e));
        }


        _requestResponse(e) {

            if(e.detail.kind == 'image'){
                var data = this.images;
                this.images = data.concat(e.detail.response.data);
                this.from += 20;
                this.$.loaderContainer.style="display: none";
                this.$.imagesContainer.style="display: flex";

                if(e.detail.response.data.length < 20){
                    this.$.loadMore.style="display: none";
                }
            }else if(e.detail.kind == 'search-image'){
                this.images = [];
                this.images = e.detail.response.data;
                this.$.loadMore.style="display: none";
                this.$.backToMain.style = "display: block;";
                this.$.loaderContainer.style="display: none";
                this.$.imagesContainer.style="display: flex";
            }

        }
    }

}
