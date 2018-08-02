import $ from 'jquery';

export class CityService{
    constructor(city) {
        this._inhabitantsUrl = city.url;
        this._cityName = city.name;
        this._inhabitants = [];
    }

    get averageWeight(){
        var avgWeight = 0;
        for (let i =0; i<this._inhabitants.length;++i){
            avgWeight += this._inhabitants[i].weight;
        }
        return avgWeight/this._inhabitants.length;
    }

    getAllInhabitants(){
        let that = this;
        return new Promise((resolve, reject) => {
            $.getJSON(that._inhabitantsUrl, function (data) {
                that._inhabitants =  data[that._cityName]
                resolve(that._inhabitants);
            });
            
        });
    }

    orderBy(typeOfOrder){
        // if(typeOfOrder.type==='single'){
        //     this._inhabitants.sort(function(a, b){
        //         return a[typeOfOrder.name]-b[typeOfOrder.name]});
        // }
        // else if(typeOfOrder.type==='multi'){

        // }
        return this._inhabitants;
    }

}