import React from 'react';
import '../index.css';
import {City} from './City.js';

const cities = [
    {
        name: 'Brastlewark',
        url: 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json',
        race: 'gnomes',
        image: 'city1',
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
        url: '-1',
        race: 'goblins',
        image: 'locked'
    },
    {
        name: 'Secret City2',
        url: '-1',
        race: 'humans',
        image: 'locked'
    },
    {
        name: 'Secret City3',
        url: '-1',
        race: 'gremblins',
        image: 'locked'
    }
];

export class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            actualView : 'board',
            playerName : 'Un Programador muy tranquilo',
            totalGold : 1000
        }
        console.log();
    }

    render() {
        // buttons to chose which city you want to visit
        const buttonsOfCities = cities.map(city => (
            <div className={"card-city m-2 " + city.image} /*style={someStyle}*/ onClick={e => { this._selectCity(city); }} key={city.name}>
             <div className="card-body cityNameContainer">
                <span className="cityName">{ city.name }</span>
                </div>
            </div >
          ));
          return(
              //header with the player/game information, static through both views
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
                        <div className = "pageDistribution">
                            <div className="d-flex flex-wrap responsiveCont">
                                {buttonsOfCities}
                            </div>
                        </div> :
                        <City city={this.state.actualCity} returnToBoard={this.returnToBoard} spendGold={this.spendGold}>
                        </City>
                }
                </div>
            </div>

          )
    }

    _selectCity(city) {
        if(city.url!=='-1'){
            this.setState({
                actualCity : city,
                actualView : 'city'
            })
        }
    }
    returnToBoard = () =>{
        //go back function
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