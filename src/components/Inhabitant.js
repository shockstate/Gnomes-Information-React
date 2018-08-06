import React from 'react';


export class Inhabitant extends React.Component {

    // class used in case we wanted diferent races of inhabitants
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return(
            <div>
                <h5 className="card-title">
                    {this.props.citizenCharacteristics.name}
                </h5>
            </div>
        )

    }

}