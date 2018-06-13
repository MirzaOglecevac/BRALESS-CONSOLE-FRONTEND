VideoVM = function(superClass, VideoModel, Configuration) {

    return class extends superClass {

        constructor() {
            super();
        }

        getVideos(ironRequest, from, limit) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/video/videos?from=' + from + '&limit=' + limit;
            var request = 'video';
            var coreAjax = ironRequest;

            // setup iron request
            VideoModel.requestIron(url,endpoint,request,coreAjax,this);
            VideoModel.getVideos();
        }


        getSearchVideos(ironRequest, term) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/video/search?term=' + term;
            var request = 'search-video';
            var coreAjax = ironRequest;

            // setup iron request
            VideoModel.requestIron(url,endpoint,request,coreAjax,this);
            VideoModel.getSearchVideos();
        }


        ready(){
            super.ready();
            this.addEventListener('request-response', (e) => this._requestResponse(e));
        }

        _requestResponse(e) {

            if(e.detail.kind == 'video'){
                var data = this.videos;
                this.videos = data.concat(e.detail.response.data);
                this.from += 20;
                this.$.loaderContainer.style="display: none";
                this.$.videosContainer.style="display: flex";

                if(e.detail.response.data.length < 20){
                    this.$.loadMore.style="display: none";
                }
            }else if(e.detail.kind == 'search-video'){
                this.videos = [];
                this.videos = e.detail.response.data;
                this.$.loadMore.style="display: none";
                this.$.backToMain.style = "display: block;";
                this.$.loaderContainer.style="display: none";
                this.$.videosContainer.style="display: flex";
            }


        }

    }

}
