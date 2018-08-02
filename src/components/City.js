import React from 'react';
import {CityService} from '../services/CityService.js';
import {Gnome} from './Gnome.js';


export class City extends React.Component {
    constructor(props) {
        super(props);
        this._GnomesService = new CityService(this.props.city);
        this.state = {
            gnomes : []
        }
        let that = this;
        this._GnomesService.getAllGnomes().then(function(data){
            that.setState({
                gnomes : data
            });
        }); 

    }
    render() {
        return(
            <div>
                <div>{this.props.city.name}</div>
                <button onClick={e => { this.props.returnToBoard();}} key={'backButton'}>
                Go back to board!
                </button>
                {this.state.gnomes.map(function (gnome) {
                    return  <Gnome characteristics={gnome}> </Gnome>
                    })
                }
            </div>
        )
    }

}