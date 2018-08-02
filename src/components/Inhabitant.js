import React from 'react';


export class Inhabitant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return(
        <div> {this.props.characteristics.name} </div>
        )

    }

}