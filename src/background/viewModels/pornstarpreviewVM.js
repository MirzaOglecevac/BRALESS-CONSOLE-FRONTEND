PornstarpreviewVM = function(superClass, PornstarpreviewModel, Configuration) {

    return class extends superClass {

        constructor() {
            super();
        }

        getPornstarData(ironRequest, id) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/pornstar/profile?id=' + id;
            var request = 'pornstar-preview';
            var coreAjax = ironRequest;

            // setup iron request
            PornstarpreviewModel.requestIron(url,endpoint,request,coreAjax,this);
            PornstarpreviewModel.getPornstarData();
        }


        deletePornstarData(ironRequest, id) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/pornstar/remove?id=' + id;
            var request = 'pornstar-delete';
            var coreAjax = ironRequest;

            // setup iron request
            PornstarpreviewModel.requestIron(url,endpoint,request,coreAjax,this);
            PornstarpreviewModel.deletePornstar();
        }


        updatePornstarData(ironRequest, body) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/pornstar/edit';
            var request = 'pornstar-update';
            var coreAjax = ironRequest;

            // setup iron request
            PornstarpreviewModel.requestIron(url,endpoint,request,coreAjax,this);
            PornstarpreviewModel.updatePornstarData(body);
        }


        pornstarAddVideo(ironRequest, body) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/';
            var request = 'pornstar-add-video';
            var coreAjax = ironRequest;

            // setup iron request
            PornstarpreviewModel.requestIron(url,endpoint,request,coreAjax,this);
            PornstarpreviewModel.pornstarAddVideo(body);
        }

        pornstarAddImage(ironRequest, body) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/image/data';
            var request = 'pornstar-add-image';
            var coreAjax = ironRequest;

            // setup iron request
            PornstarpreviewModel.requestIron(url,endpoint,request,coreAjax,this);
            PornstarpreviewModel.pornstarAddImage(body);
        }



        ready(){
            super.ready();
            this.addEventListener('request-response', (e) => this._requestResponse(e));
        }

        _requestResponse(e){

            if(e.detail.kind == 'pornstar-preview'){
                console.log(e.detail.response.data[0]);
                this.pornstarData = e.detail.response.data[0];
                this.$.loaderContainer.style="display: none";
                this.$.mainContainer.style="display: flex";
            }else if(e.detail.kind == 'pornstar-delete'){
                location.href = '/pornstars';
            }else if(e.detail.kind == 'pornstar-update'){
                this.$.loaderContainer.style="display: block";
                this.$.mainContainer.style="display: none";
                this.getPornstarData(this.$.ironAjax, this.id);
            }else if(e.detail.kind == 'pornstar-add-video'){
                this.dispatchEvent(new CustomEvent('scrap-ended', {
                    bubbles: true, composed: true, detail: {
                        value: "scrap"
                    }
                }));
            }else if(e.detail.kind == 'pornstar-add-image'){
                this.dispatchEvent(new CustomEvent('scrap-ended', {
                    bubbles: true, composed: true, detail: {
                        value: "scrap"
                    }
                }));
            }

        }

    }

}
