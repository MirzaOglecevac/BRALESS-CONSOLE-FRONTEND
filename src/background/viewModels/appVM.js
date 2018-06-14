AppVM = function(superClass,AppModel,Configuration) {

    return class extends superClass {

        constructor() {
            super();
        }

        login(ironRequest, body) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/admin/login';
            var request = 'login';
            var coreAjax = ironRequest;

            // setup iron request
            AppModel.requestIron(url,endpoint,request,coreAjax,this);
            AppModel.login(body);
        }




        ready(){
            super.ready();
            this.addEventListener('request-response', (e)=>this._requestResponse(e));
        }

        _requestResponse(e) {


            if(e.detail.kind == "login"){

                if(e.detail.response){
                    this.username = e.detail.response.username;
                    this.userImage = e.detail.response.profile_image;
                    sessionStorage.setItem("logged in", true);
                    sessionStorage.setItem("image", this.userImage);
                    this.$.loginScreen.style="display: none;";
                }else {
                    this.$.username.value = "Incorrect password or username";
                    this.$.password.value = "";
                    this.$.username.style = "color: red";

                }
            }
        }
    }

}
