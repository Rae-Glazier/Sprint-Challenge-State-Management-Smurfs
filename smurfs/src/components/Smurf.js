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

    const sEdit = smurf => {
        // e.preventDefualt();

        axios 
            .put(`http://localhost:3333/smurfs/${smurf.id}`, smurfEdit)
            .then(updateSmurfList())
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
                        <div key={smurf.id} onClick= {() => sEdit(smurfs)}>
                        <span>
                            <span className = 'delete' onClick={e => {e.stopPropagation(); deleteSmurf(smurf)}}>
                                x
                            </span>{''} 
                            {smurf.smurf}
                        </span>
                        <div>
                            <h3>Name: {smurf.name} </h3>
                            <h4>ID: {smurf.id} </h4>
                            <h4>Age: {smurf.age} </h4>
                            <h4>Height: {smurf.height} </h4>
                        </div>
                    </div>
                    )
                })}
            </div>
            

        {editing && (
            <form onSubmit={sEdit}>
                <legend>edit smurf</legend>
                <label>
                Name:
                <input
                    onChange={e =>
                    setSmurfEdit({ ...smurfEdit, Name: e.target.value })
                    }
                    value={smurfEdit.smurf.name}
                />
                </label>

                <label>
                Age:
                <input
                    onChange={e =>
                        setSmurfEdit({
                        ...smurfEdit,
                        Age: e.target.value 
                    })
                    }
                    value={smurfEdit.smurf.age}
                />
                </label>

                <label>
                Height:
                <input
                    onChange={e =>
                        setSmurfEdit({
                        ...smurfEdit,
                        Height: e.target.value 
                    })
                    }
                    value={smurfEdit.smurf.height}
                />
                </label>

                <div className="button-row">
                <button type="submit">save</button>
                <button onClick={() => setEditing(false)}>cancel</button>
                </div>
            </form>
        )}

        </div>
    )
}

export default Smurf;