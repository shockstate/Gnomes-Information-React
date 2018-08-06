import React from 'react';
import { Inhabitant } from './Inhabitant.js';
import { GnomeDetails } from './GnomeDetails.js';

export class Gnome extends Inhabitant {
    constructor(props) {
        super(props);
        props.citizenCharacteristics.knowledge = this.calcKnowledge();
    }
    render() {

        //this card has the colour of each gnome
        return (
            <div className="card m-2" style={{ border: "2px solid " + this.props.citizenCharacteristics.hair_color }}>
                <img className="card-img-top cardImage" src={this.props.citizenCharacteristics.thumbnail} title={this.props.citizenCharacteristics.name} alt="Deleted" />
                <div className="card-body">
                    {super.render()}
                    <p className="card-text">Knowledge: {this.props.citizenCharacteristics.knowledge} <br />
                        Age: {this.props.citizenCharacteristics.age} </p>
                    <span className="fake-link card-link" onClick={e => { this._completeQuest(); }}>Ask for a quest</span>
                    <span className="fake-link card-link" data-toggle="modal" data-target={"#" + this.props.citizenCharacteristics.name.replace(/\s/g, '')}>Details</span>
                </div>
                <GnomeDetails gnome={this.props.citizenCharacteristics}> </GnomeDetails>
                <div id="snackbar">Some text some message..</div>
            </div>


        )
    }

    calcKnowledge() {
        //custom (and weird) way to calculate the knowledge of the gnome :P
        return Math.floor(this.props.citizenCharacteristics.age + this.props.citizenCharacteristics.professions.length * 10 - this.props.citizenCharacteristics.friends.length * 10 + Math.abs(this.props.cityCharacteristics.averageWeight - this.props.citizenCharacteristics.weight) * 5);
    }
    _completeQuest() {

        //random number generator to chose what action the gnome takes

        var x = document.getElementById("snackbar");
        x.className = "show";
        var max = 100;
        var min = -100;
        var goldWon = Math.floor(Math.random() * (max - min + 1)) + min;
        var text = "";
        if(goldWon % 4 === 0){ //once every 4 times you cant use it!
            text = "Gnome is sleeping...";
        }
        else if(goldWon > 0){
            text = "This lovely gnome gave you " + goldWon + " gold!";
            this.props.spendGold(goldWon*-1);
        }
        else{
            text = "This scary gnome took " + goldWon + " gold from you!";
            this.props.spendGold(goldWon*-1);
        }
        

        //be careful at clicking a lot of times (not controlled exception because I only created 1 div for the message)
        x.innerHTML = text;
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

}