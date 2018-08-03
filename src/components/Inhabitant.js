import React from 'react';


export class Inhabitant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return(
            <div>
                <div> {this.props.citizenCharacteristics.name}
                </div>
                age: <div> {this.props.citizenCharacteristics.age}
                </div>
            </div>
        )

    }

}