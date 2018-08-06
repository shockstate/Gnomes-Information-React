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
            <button  className="btn btn-secondary" onClick={e => { this._orderByType(typeOfOrder); }} key={typeOfOrder.name}>
               {typeOfOrder.name}  ({typeOfOrder.goldCost} gold)
            </button >
          ));

        return(
            <div>
                <div className="title">
                        <span onClick={e => { this.props.returnToBoard();}} key={'backButton'} className="glyphicon glyphicon-chevron-left backImg"></span>
                    {/* <button >
                        Go back to board!
                    </button> */}
                    <span >{this.props.city.name}</span>
                </div>
                <div className="customBar">
                    <div className="barComponent">
                        Order by:
                    </div>
                    <div className="btn-group barComponent" role="group" aria-label="Order by">
                        {buttonsToOrder}
                    </div>
                </div>

                <div className="d-flex flex-wrap responsiveCont">
                    {this.state.inhabitants.map(function (inhabitant,index) {
                        switch(that.props.city.race){
                            case('gnomes'):
                                return  (
                                    <Gnome citizenCharacteristics={inhabitant} cityCharacteristics={that.state.cityCharacteristics} spendGold={that.props.spendGold} key={index}> </Gnome>
                                 )
                            default:
                                 return;
                        }
                    })
                    }
                </div>
            </div>
        )
    }

    _orderByType(typeOfOrder){
        this.props.spendGold(typeOfOrder.goldCost);
        this.setState({
            inhabitants : this._InhabitantsService.orderBy(typeOfOrder)
        });
    }

}