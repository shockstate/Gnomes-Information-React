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
                property: 'knowledge',
                name: 'Knowledge',
                goldCost: 120,
                type: 'single' 
            },
            {
                property: 'professions',
                name: 'Nº professions',
                goldCost: 50,
                type: 'multi'
            },
            {
                property: 'friends',
                name: 'Nº friends',
                goldCost: 70,
                type: 'multi'
            },
            {
                property: 'age',
                name: 'Age',
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
            totalGold : 1000
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
                <div className="customHeader">
                    <div className="headerComponent">
                        Player: {this.state.playerName}
                    </div>
                    <div className="headerComponent">
                        <h4>Role adventures with gnomes and other creatures</h4>
                    </div>
                    <div className="headerComponent">
                        Gold: {this.state.totalGold}
                    </div>
                </div>
                <div>
                {
                    this.state.actualView==='board' ? 
                        <div>
                            {buttonsOfCities}
                        </div> :
                        <City city={this.state.actualCity} returnToBoard={this.returnToBoard} spendGold={this.spendGold}>
                        </City>
                }
                </div>
            </div>

          )
    }

    _selectCity(city) {
        if(city.url!==''){
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
    spendGold = (goldSpent) =>{
        var a = this.state.totalGold - goldSpent;
        if (a<0)
            a=0;
        this.setState({
            totalGold : a 
        })
    }

}