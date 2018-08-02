import React from 'react';
import {CityService} from '../services/CityService.js';
import {Gnome} from './Gnome.js';


export class City extends React.Component {
    constructor(props) {
        super(props);

        //service that gives the city information
        this._InhabitantsService = new CityService(this.props.city);

        this.state = {
            inhabitants : [],
            cityCharacteristics: {}
        }
        let that = this;
        this._InhabitantsService.getAllInhabitants().then(function(data){
            var actChars = that.state.cityCharacteristics;
            actChars.averageWeight = that._InhabitantsService.averageWeight;
            that.setState({
                cityCharacteristics : actChars
            });
            that.setState({
                inhabitants : data
            });

        }); 

    }
    render() {
        let that = this;
        const buttonsToOrder = this.props.city.orderList.map(typeOfOrder => (
            <button /*style={someStyle}*/ onClick={e => { this._orderByType(typeOfOrder); }} key={typeOfOrder.name}>
               {typeOfOrder.name}  ({typeOfOrder.goldCost} gold)
            </button >
          ));

        return(
            <div>
                <div>{this.props.city.name}</div>
                <button onClick={e => { this.props.returnToBoard();}} key={'backButton'}>
                    Go back to board!
                </button>
                <div>
                    Order by:
                </div>
                <div>
                    {buttonsToOrder}
                </div>
                {this.state.inhabitants.map(function (inhabitant,index) {
                    switch(that.props.city.race){
                        case('gnomes'):
                            return  <Gnome citizenCharacteristics={inhabitant} cityCharacteristics={that.state.cityCharacteristics} key={index}> </Gnome>
                    }
                })
                }
            </div>
        )
    }

    _orderByType(typeOfOrder){
        this.setState({
            inhabitants : this._InhabitantsService.orderBy(typeOfOrder)
        });
    }

}