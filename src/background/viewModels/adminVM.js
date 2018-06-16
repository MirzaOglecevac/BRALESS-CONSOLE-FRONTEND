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


        deleteAdmin(ironRequest, id) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/admin/remove?id=' + id;
            var request = 'admin-delete';
            var coreAjax = ironRequest;

            // setup iron request
            AdminModel.requestIron(url,endpoint,request,coreAjax,this);
            AdminModel.deleteAdmin();
        }


        addAdmin(ironRequest, body) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/admin/add';
            var request = 'add-admin';
            var coreAjax = ironRequest;

            // setup iron request
            AdminModel.requestIron(url,endpoint,request,coreAjax,this);
            AdminModel.addAdmin(body);
        }


        updateAdmin(ironRequest, body) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/admin/info';
            var request = 'update-admin';
            var coreAjax = ironRequest;

            // setup iron request
            AdminModel.requestIron(url,endpoint,request,coreAjax,this);
            AdminModel.updateAdmin(body);
        }


        ready(){
            super.ready();
            this.addEventListener('request-response', (e)=>this._requestResponse(e));
        }

        _requestResponse(e) {


            if(e.detail.kind == "admin"){
                this.admins = e.detail.response.data;
            }else if(e.detail.kind == "admin-delete"){
                this._getAdmins();
            }else if(e.detail.kind == "add-admin"){
                this._getAdmins();
            }else if(e.detail.kind == "update-admin"){
                this._getAdmins();
            }
        }
    }

}
