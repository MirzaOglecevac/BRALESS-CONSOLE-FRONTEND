VideopreviewVM = function(superClass, VideopreviewModel, Configuration) {

    return class extends superClass {

        constructor() {
            super();
        }

        getVideoData(ironRequest, id) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/video/data?id=' + id;
            var request = 'video-preview';
            var coreAjax = ironRequest;

            // setup iron request
            VideopreviewModel.requestIron(url,endpoint,request,coreAjax,this);
            VideopreviewModel.getVideoData();
        }


        deleteVideoData(ironRequest, id) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/video/remove?id=' + id;
            var request = 'video-delete';
            var coreAjax = ironRequest;

            // setup iron request
            VideopreviewModel.requestIron(url,endpoint,request,coreAjax,this);
            VideopreviewModel.deleteVideo();
        }


        updateVideoData(ironRequest, body) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/video/data';
            var request = 'video-update';
            var coreAjax = ironRequest;

            // setup iron request
            VideopreviewModel.requestIron(url,endpoint,request,coreAjax,this);
            VideopreviewModel.updateVideoData(body);
        }



        ready(){
            super.ready();
            this.addEventListener('request-response', (e) => this._requestResponse(e));
        }

        _requestResponse(e){

            if(e.detail.kind == 'video-preview'){
                console.log(e.detail.response.data[0]);
                this.videoData = e.detail.response.data[0];
            }else if(e.detail.kind == 'video-delete'){
                console.log(e.detail);
                //location.href = '/videos';
            }else if(e.detail.kind == 'video-update'){
                console.log('data updated');
            }


        }

    }

}
