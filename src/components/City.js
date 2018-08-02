import React from 'react';
import $ from 'jquery';

export class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gnomes : []
        }
        this.getAllGnomes();
    }
    render() {
        return(
            <div>
                <div>{this.props.city.name}</div>
                <button onClick={e => { this.props.returnToBoard();}} key={'backButton'}>
                Go back to board!
                </button>
                {this.state.gnomes.map(function  (gnome) {
                    return  <div> {gnome.name} </div>
                    })
                }
            </div>
        )
    }

    getAllGnomes() {
        let that = this;
        console.log(this.props);
        $.getJSON(that.props.city.url, function (data) {
            console.log(data);
            that.setState({
                gnomes: data[that.props.city.name]
            })
            console.log(that.state);
        });

    }

}