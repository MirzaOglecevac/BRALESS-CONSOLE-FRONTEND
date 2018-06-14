ImagepreviewVM = function(superClass, ImagepreviewModel, Configuration) {

    return class extends superClass {

        constructor() {
            super();
        }

        getImageData(ironRequest, id) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/image/data?id=' + id;
            var request = 'image-preview';
            var coreAjax = ironRequest;

            // setup iron request
            ImagepreviewModel.requestIron(url,endpoint,request,coreAjax,this);
            ImagepreviewModel.getImageData();
        }


        getImageComments(ironRequest, id) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = "/image/comments?id=" + id;
            var request = 'image-comments';
            var coreAjax = ironRequest;

            // setup iron request
            ImagepreviewModel.requestIron(url,endpoint,request,coreAjax,this);
            ImagepreviewModel.getImageComments();
        }


        deleteImageData(ironRequest, id) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/image/remove?id=' + id;
            var request = 'image-delete';
            var coreAjax = ironRequest;

            // setup iron request
            ImagepreviewModel.requestIron(url,endpoint,request,coreAjax,this);
            ImagepreviewModel.deleteImage();
        }


        deleteComment(ironRequest, id) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = "/image/comment?id=" + id;
            var request = 'image-comment-delete';
            var coreAjax = ironRequest;

            // setup iron request
            ImagepreviewModel.requestIron(url,endpoint,request,coreAjax,this);
            ImagepreviewModel.deleteComment();
        }


        updateImageData(ironRequest, body) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/image/data';
            var request = 'image-update';
            var coreAjax = ironRequest;

            // setup iron request
            ImagepreviewModel.requestIron(url,endpoint,request,coreAjax,this);
            ImagepreviewModel.updateImageData(body);
        }



        ready(){
            super.ready();
            this.addEventListener('request-response', (e) => this._requestResponse(e));
        }

        _requestResponse(e){

            if(e.detail.kind == 'image-preview'){
                console.log(e.detail.response.data[0]);
                this.imageData = e.detail.response.data[0];
                this.$.loaderContainer.style="display: none";
                this.$.mainContainer.style="display: flex";
            }else if(e.detail.kind == 'image-delete'){
                location.href = '/images';
            }else if(e.detail.kind == 'image-update'){
                console.log('data updated');
            }else if(e.detail.kind == 'image-comments'){
                this.comments = e.detail.response.data;
                if(this.comments.length == 0){
                    this.$.commentHeading.innerHTML = "No comments";
                }else {
                    this.$.commentHeading.innerHTML = "Comments";
                }
                this.$.commentHeading.style="display: block";
                this.$.loaderComm.style="display: none";
                this.$.comments.style="display: block"

            }else if(e.detail.kind == 'image-comment-delete'){
                this.$.comments.style="display: none"
                this._getComments();
            }


        }

    }

}
