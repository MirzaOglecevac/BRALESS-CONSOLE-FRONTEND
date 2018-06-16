StatisticVM = function(superClass,StatisticModel,Configuration) {

    return class extends superClass {

        constructor() {
            super();
        }

        getStatistic(ironRequest) {
            var url = Configuration.configuration()[0].baseUrl;
            var endpoint = '/statistic/statistics';
            var request = 'statistic';
            var coreAjax = ironRequest;

            // setup iron request
            StatisticModel.requestIron(url,endpoint,request,coreAjax,this);
            StatisticModel.getStatistic();
        }


        ready(){
            super.ready();
            this.addEventListener('request-response', (e)=>this._requestResponse(e));
        }

        _requestResponse(e) {
            this.statistic = e.detail.response.data[0];
            this.$.loaderContainer.style="display: none";
            this.$.statisticContainer.style="display: flex";
        }
    }

}
