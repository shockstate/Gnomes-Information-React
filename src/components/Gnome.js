import React from 'react';
import {Inhabitant} from './Inhabitant.js';

export class Gnome extends Inhabitant {
    constructor(props) {
        super(props);
        // this.state = {
        //     knowledge : this.calcKnowledge()
        // }
        props.citizenCharacteristics.knowledge = this.calcKnowledge();
    }
    render() {
        //this card has the colour of each gnome
        return(
            <div className="card m-2" style={{border: "2px solid " + this.props.citizenCharacteristics.hair_color}}>
                    <img className="card-img-top cardImage" src={this.props.citizenCharacteristics.thumbnail} title={this.props.citizenCharacteristics.name} alt="Deleted picture"/>
                    <div className="card-body">
                        {super.render()}
                        <p className="card-text">Knowledge: {this.props.citizenCharacteristics.knowledge} <br/>
                        Age: {this.props.citizenCharacteristics.age} </p>
                        <a href="#" className="card-link">Ask for a quest</a>
                        <a href="#" className="card-link">Details</a>
                    </div>
            </div>

        )
    }

    calcKnowledge (){
        return Math.floor(this.props.citizenCharacteristics.age+this.props.citizenCharacteristics.professions.length*10-this.props.citizenCharacteristics.friends.length*10+Math.abs(this.props.cityCharacteristics.averageWeight-this.props.citizenCharacteristics.weight)*5);
           }

}