AdminVM = function(superClass,AdminModel,Configuration) {

    return class extends superClass {

        constructor() {
            super();
        }

        getAdmins(ironRequest) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/admin/all';
            var request = 'admin';
            var coreAjax = ironRequest;

            // setup iron request
            AdminModel.requestIron(url,endpoint,request,coreAjax,this);
            AdminModel.getAdmins();
        }

        _onAdminModelChange() {

        }

        ready(){
            super.ready();
            this.addEventListener('request-response', (e)=>this._requestResponse(e));
        }

        _requestResponse(e) {

            this.admins = e.detail.response.data;

            return;

        }
    }

}
