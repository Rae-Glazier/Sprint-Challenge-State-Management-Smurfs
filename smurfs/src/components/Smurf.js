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

    const sEdit = (smurf) => {
        // e.preventDefualt();

        axios 
            .put(`http://localhost:3333/smurfs/${smurf.id}`)
            .then(response => {
                console.log(response.data)
                updateSmurfList(response.data)
            })
            .catch(error => console.log(error.response, 'edit smurf'))

            
    }

    const deleteSmurf = (smurf) => {
        axios   
            .delete(`http://localhost:3333/smurfs/${smurf.id}`)
            .then(response => {
                console.log(response.data)
                updateSmurfList(response.data);
            })
            .catch(error => console.log(error.response.data, 'delete'))
    }


    return(
        <div className='SmurfInfo'>

            <div>
                {sInfo.map(smurf => {
                    return(
                        <div key={smurf.id} onClick= {() => sEdit(smurf)}>
                        
                        <div>
                            <h3>Name: {smurf.name} </h3>
                            <h4>ID: {smurf.id} </h4>
                            <h4>Age: {smurf.age} </h4>
                            <h4>Height: {smurf.height} </h4>
                        </div>

                        <span>
                            <span className = 'delete' onClick={e => {e.stopPropagation(); deleteSmurf(smurf)}}>
                                delete
                            </span>{''} 
                            {smurf.smurf}
                        </span>
                        {/* <br></br>
                        <span>
                            <span className = 'edit' onClick={e => {e.stopPropagation(); sEdit(smurf);}}>
                                edit
                            </span>{''} 
                            {smurf.smurf}
                        </span> */}

                    </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Smurf;