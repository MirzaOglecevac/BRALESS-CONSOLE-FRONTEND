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


        getVideoComments(ironRequest, id) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = "/video/comments?id=" + id;
            var request = 'video-comments';
            var coreAjax = ironRequest;

            // setup iron request
            VideopreviewModel.requestIron(url,endpoint,request,coreAjax,this);
            VideopreviewModel.getVideoComments();
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


        deleteComment(ironRequest, id) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = "/video/comment?id=" + id;
            var request = 'video-comment-delete';
            var coreAjax = ironRequest;

            // setup iron request
            VideopreviewModel.requestIron(url,endpoint,request,coreAjax,this);
            VideopreviewModel.deleteComment();
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
                this.$.loaderContainer.style="display: none";
                this.$.mainContainer.style="display: flex";
            }else if(e.detail.kind == 'video-delete'){
                location.href = '/videos';
            }else if(e.detail.kind == 'video-update'){
                console.log('data updated');
            }else if(e.detail.kind == 'video-comments'){
                console.log(e.detail.response);
                this.comments = e.detail.response.data;
                if(this.comments.length == 0){
                    this.$.commentHeading.innerHTML = "No comments";

                }else {
                    this.$.commentHeading.innerHTML = "Comments";

                }
                this.$.commentHeading.style="display: block";
                this.$.loaderComm.style="display: none";
                this.$.comments.style="display: block"

                //console.log(this.comments);
            }else if(e.detail.kind == 'video-comment-delete'){
                this.$.comments.style="display: none"
                this._getComments();
            }


        }

    }

}
