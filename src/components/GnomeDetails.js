import React from 'react';

export class GnomeDetails extends React.Component {

    render() {
        //basic modal with the gnome information
        let that = this;
        return (
            <div className="modal fade" id={this.props.gnome.name.replace(/\s/g, '')} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.props.gnome.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className="card-text">Knowledge: {this.props.gnome.knowledge} </p>
                            <p className="card-text">Age: {this.props.gnome.age} </p>
                            <p className="card-text">Hair Colour: {this.props.gnome.hair_color} </p>
                            <p className="card-text">Height: {this.props.gnome.height} </p>
                            <p className="card-text">Weight: {this.props.gnome.weight} </p>
                            <p className="card-text">Friends:
                                {this.props.gnome.friends.map(function  (friend, index) {
                                        if(index!==that.props.gnome.friends.length-1){
                                            return (
                                                <span className="card-text" key= {index}>{friend}, </span>
                                            )
                                        }
                                        else{
                                            return (
                                                <span className="card-text" key= {index}>{friend}</span>
                                            )
                                        }
                                    })
                                }
                            </p>
                            
                            <p className="card-text">Professions: 
                                {this.props.gnome.professions.map(function  (profession, index) {
                                        if(index!==that.props.gnome.professions.length-1){
                                            return (
                                                <span className="card-text" key={index}> {profession},</span>
                                            )
                                        }
                                        else{
                                            return (
                                                <span className="card-text" key={index}> {profession}</span>
                                            )
                                        }
                                    })
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}