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
        return(
            <div>
                {super.render()}
                knowledge: {this.props.citizenCharacteristics.knowledge}
            </div>

        )
    }

    calcKnowledge (){
        return Math.floor(this.props.citizenCharacteristics.age+this.props.citizenCharacteristics.professions.length*10-this.props.citizenCharacteristics.friends.length*10+Math.abs(this.props.cityCharacteristics.averageWeight-this.props.citizenCharacteristics.weight)*5);
           }

}