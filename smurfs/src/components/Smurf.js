import React from 'react';

const Smurf = props => {
    return(
        <div>
            <h3>Name: {props.smurf.name}</h3>
            <h2>Age: {props.smurf.age}</h2>
            <h2>Height: {props.smurf.height}</h2>
        </div>
    )
}

export default Smurf;