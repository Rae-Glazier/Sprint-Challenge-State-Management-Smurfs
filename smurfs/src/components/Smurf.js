import React, { useContext, useState } from 'react';
import axios from 'axios';
import { SmurfContext } from './SmurfContext';


const initialSmurf = {
    smurf: '',
    id: { id: '' }
};

const Smurf = (smurfs, updateSmurfs) => {
    const sInfo = useContext(SmurfContext);
    console.log(smurfs);
    const [smurfEdit, setSmurfEdit] = useState(initialSmurf);
    const [editing, setEditing] = useState(false);

    

    const updateSmurfList = () => {
        axios
            .get(`http://localhost:3333/smurfs/`)
            .then(response => {
                setSmurfEdit(response.data);
            })
            .catch(error => console.log(error.response, 'updateSmurfList'));
    };

    return(
        <div className='SmurfInfo'>

            <div>
                {sInfo.map(smurf => {
                    return(
                        <div key={smurf.id}>
                        
                        <div className='details'>
                            <h3> Name:  {smurf.name} </h3>
                            <h4> {smurf.age} Years Old </h4>
                            <h4> {smurf.height} </h4>
                        </div>
                    </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Smurf;