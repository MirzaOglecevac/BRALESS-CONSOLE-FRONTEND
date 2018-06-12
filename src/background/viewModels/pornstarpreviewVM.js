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



        ready(){
            super.ready();
            this.addEventListener('request-response', (e) => this._requestResponse(e));
        }

        _requestResponse(e){

            if(e.detail.kind == 'pornstar-preview'){
                console.log(e.detail.response.data[0]);
                this.pornstarData = e.detail.response.data[0];
            }else if(e.detail.kind == 'pornstar-delete'){
                console.log(e.detail);
                //location.href = '/pornstars';
            }else if(e.detail.kind == 'pornstar-update'){
                console.log('data updated');
            }


        }

    }

}
