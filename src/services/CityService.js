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
         if(typeOfOrder.type==='single'){
             this._inhabitants.sort(function(a, b){
                 if(a[typeOfOrder.name]-b[typeOfOrder.name]==0)
                    return a['name']>b['name'];
                else
                    return a[typeOfOrder.name]-b[typeOfOrder.name]});
         }
         else if(typeOfOrder.type==='multi'){
            this._inhabitants.sort(function(a, b){
                if(a[typeOfOrder.name].length-b[typeOfOrder.name].length==0)
                   return a['name']>b['name'];
               else
                   return a[typeOfOrder.name].length-b[typeOfOrder.name].length});
         }
        return this._inhabitants;
    }

}