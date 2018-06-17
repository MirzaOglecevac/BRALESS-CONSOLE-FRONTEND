UserVM = function(superClass,UserModel,Configuration) {

    return class extends superClass {

        constructor() {
            super();
        }

        getUsers(ironRequest, from, limit) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/user/users?from=' + from + '&limit=' + limit;
            var request = 'user';
            var coreAjax = ironRequest;

            // setup iron request
            UserModel.requestIron(url,endpoint,request,coreAjax,this);
            UserModel.getUsers();
        }


        getSearchUsers(ironRequest, term) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/user/search?term=' + term;
            var request = 'user-search';
            var coreAjax = ironRequest;

            // setup iron request
            UserModel.requestIron(url,endpoint,request,coreAjax,this);
            UserModel.getSearchUsers();
        }


        deleteUser(ironRequest, id) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/user/remove?id=' + id;
            var request = 'user-delete';
            var coreAjax = ironRequest;

            // setup iron request
            UserModel.requestIron(url,endpoint,request,coreAjax,this);
            UserModel.deleteUser();
        }


        ready(){
            super.ready();
            this.addEventListener('request-response', (e) => this._requestResponse(e));
        }

        _requestResponse(e) {

            if(e.detail.kind == 'user'){

                var data = this.users;
                this.users = data.concat(e.detail.response.data);
                this.from += 20;
                this.$.loaderContainer.style="display: none";
                this.$.usersContainer.style="display: block";

                if(e.detail.response.data.length < 20){
                    this.$.loadMore.style="display: none";
                }
            }else if(e.detail.kind == 'user-search'){
                this.users = [];
                this.users = e.detail.response.data;
                this.$.loadMore.style="display: none";
                this.$.backToMain.style = "display: block;";
                this.$.loaderContainer.style="display: none";
                this.$.usersContainer.style="display: block";

                if(this.users.length  == 0){
                    this.$.infoHeading.style="display: none";
                }else {
                    this.$.infoHeading.style="display: table";
                }

            }else if(e.detail.kind == 'user-delete'){
                this.users = [];
                this.from = 0;
                this.limit = 20;
                this._getUsers();
            }


        }
    }

}
