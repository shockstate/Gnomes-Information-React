import $ from 'jquery';

export class CityService{
    constructor(city) {
        this._inhabitantsUrl = city.url;
        this._cityName = city.name;
        this._inhabitants = [];
    }

    // get inhabitants(){
    //     let that = this;
    //     return new Promise((resolve, reject) => {
    //         this.getAllGnomes().then(function() {
    //           if(that._inhabitants.length>0){
    //             resolve(this._inhabitants);
    //           }
    //           else{
    //             reject('Error');
    //           }
    //         });
    //       })
    // }

    getAllGnomes(){
        let that = this;
        return new Promise((resolve, reject) => {
            $.getJSON(that._inhabitantsUrl, function (data) {
                that._inhabitants =  data[that._cityName]
                resolve(that._inhabitants);
            });
            
        });
    }

}