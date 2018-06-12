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


        ready(){
            super.ready();
            this.addEventListener('request-response', (e) => this._requestResponse(e));
        }

        _requestResponse(e) {

            if(e.detail.kind == 'user'){
                var data = this.users;
                this.users = data.concat(e.detail.response.data);
                this.from += 20;

                if(e.detail.response.data.length < 20){
                    this.$.loadMore.style="display: none";
                }
            }else if(e.detail.kind == 'user-search'){
                this.users = [];
                this.users = e.detail.response.data;
                this.$.loadMore.style="display: none";
            }


        }
    }

}
