import React from 'react';
import '../index.css';
import {City} from './City.js';

const cities = [
    {
        name: 'Brastlewark',
        url: 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
    },
    {
        name: 'Secret City',
        url: ''
    }
];

export class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            actualView : 'board'
        }
        console.log();
    }

    render() {
        const buttonsOfCities = cities.map(city => (
            <button /*style={someStyle}*/ onClick={e => { this._selectCity(city); }} key={city.name}>
              { city.name }
            </button >
          ));
        if(this.state.actualView==='board'){
            return (
                <div>
                    {buttonsOfCities}
                 </div>
            )
        }
        else if(this.state.actualView==='city'){
            return(
                <City city={this.state.actualCity} returnToBoard={this.returnToBoard}>
                </City>
            )
        }
    }

    _selectCity(city) {
        if(city.url!=''){
            this.setState({
                actualCity : city,
                actualView : 'city'
            })
        }
    }
    returnToBoard = () =>{
        this.setState({
            actualView : 'board'
        })
    }

}