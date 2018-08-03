import React from 'react';
import '../index.css';
import {City} from './City.js';

const cities = [
    {
        name: 'Brastlewark',
        url: 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json',
        race: 'gnomes',
        orderList: [
            {
                name: 'knowledge',
                goldCost: 120,
                type: 'single' 
            },
            {
                name: 'professions',
                goldCost: 50,
                type: 'multi'
            },
            {
                name: 'friends',
                goldCost: 70,
                type: 'multi'
            },
            {
                name: 'age',
                goldCost: 20,
                type: 'single'
            },
        ]
    },
    {
        name: 'Secret City',
        url: '',
        race: 'goblins'
    },
    {
        name: 'Secret City2',
        url: '',
        race: 'humans'
    },
    {
        name: 'Secret City3',
        url: '',
        race: 'gremblins'
    }
];

export class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            actualView : 'board',
            playerName : 'PaquitoElProgramador',
            totalCoins : 150
        }
        console.log();
    }

    render() {
        const buttonsOfCities = cities.map(city => (
            <button /*style={someStyle}*/ onClick={e => { this._selectCity(city); }} key={city.name}>
              { city.name }
            </button >
          ));
          return(
            <div>
                <div style={{width:"100%", height:"50px", position:"relative"}}>
                    <span style={{left:"0", position:"absolute"}}>
                        Player: {this.state.playerName}
                    </span>
                    <span style={{right:"0", position:"absolute"}}>
                        Gold: {this.state.totalCoins}
                    </span>
                </div>
                <div>
                {
                    this.state.actualView=='board' ? 
                        <div>
                            {buttonsOfCities}
                        </div> :
                        <City city={this.state.actualCity} returnToBoard={this.returnToBoard}>
                        </City>
                }
                </div>
            </div>

          )
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