import React from 'react';

const Smurf = props => {
    return(
        <div>
            <h3>Name: {props.smurf.name}</h3>
            <h4>ID: {props.smurf.id}</h4>
            <h4>Age: {props.smurf.age}</h4>
            <h4>Height: {props.smurf.height}</h4>
        </div>
    )
}

export default Smurf;