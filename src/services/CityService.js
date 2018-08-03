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

                //should distintc between type of int or type of string in the future
                 if(a[typeOfOrder.property]-b[typeOfOrder.property]===0){
                    if (a['name'] < b['name']) //sort string ascending
                    return -1;
                   if (a['name'] > b['name'])
                    return 1;
                    return 0;
                 }
                else
                    return a[typeOfOrder.property]-b[typeOfOrder.property]});
         }
         else if(typeOfOrder.type==='multi'){
            this._inhabitants.sort(function(a, b){
                if(a[typeOfOrder.property].length-b[typeOfOrder.property].length===0){
                    // var result = a['property']>b['property'];
                    if (a['name'] < b['name']) //sort string ascending
                    return -1;
                   if (a['name'] > b['name'])
                    return 1;
                    return 0;
                //     return result;
                }
               else
                   return a[typeOfOrder.property].length-b[typeOfOrder.property].length});
         }
        return this._inhabitants;
    }

}