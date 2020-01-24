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

    

    const updateSmurfList = () => {
        axios
            .get('http://localhost:3333/smurfs')
            .then(response => {
                setSmurfEdit(response.data);
            })
            .catch(error => console.log(error.response, 'updateSmurfList'));
    };

    const sEdit = e => {
        // e.preventDefualt();

        axios 
            .put(`http://localhost:3333/smurfs/${smurfs.smurf.id}`, smurfEdit)
            .then(updateSmurfList())
            .catch(error => console.log(error.response, 'edit smurf'))
    }

    const deleteSmurf = () => {
        axios   
            .delete(`http://localhost:3333/smurfs/${smurfs.smurf.id}`)
            .then(updateSmurfList())
            .catch(error => console.log(error, 'delete'))
    }


    return(
        <div className='SmurfInfo'>

            <ul>
                {sInfo.map(smurf => {
                    <li key={smurf.id} onClick= {() => sEdit(smurfs)}>
                        <span>
                            <span className = 'delete' onClick={e => {e.stopPropagation(); deleteSmurf(smurf)}}>
                                ~delete~
                            </span>{''} 
                            {smurf.smurf}
                        </span>
                        <div>
                            <h3>Name: {smurfs.smurf.name}</h3>
                            <h4>ID: {smurfs.smurf.id}</h4>
                            <h4>Age: {smurfs.smurf.age}</h4>
                            <h4>Height: {smurfs.smurf.height}</h4>
                        </div>
                    </li>
                })}
            </ul>
            
        </div>
    )
}

export default Smurf;