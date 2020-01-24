import React, { useContext } from 'react';
import { SmurfContext } from './SmurfContext';
import  Smurf  from './Smurf';

const initialSmurf = {
    smurf: '',
    id: { id: '' }
};

const SmurfList = () => {
    const sInfo = useContext(SmurfContext);
    
    const [smurfEdit, setSmurfEdit] = useState(initialSmurf);

    const editSmurf = smurf => {
        setSmurfEdit(smurf);
    };

    const updateSmurfList = () => {
        axios
            .get('http://localhost:3333/smurfs')
            .then(response => {
                updateSmurfList(response.data);
            });
    };

    const smurfEdit = e => {
        e.preventDefualt();

        axios 
            .put(`http://localhost:3333/smurfs${smurfEdit.id}`, smurfEdit)
            .then(updateSmurfList())
            .catch(error => console.log(error.response, 'edit smurf'))
    }

    const deleteSmurf = smurf => {
        axios   
            .get(`http://localhost:3333/smurfs${smurf.id}`)
            .then(updateSmurfList())
            .catch(error => console.log(error, 'delete'))
    }

    return(
        <div>
            {sInfo.map(smurf => {
                return <Smurf 
                            key={smurf.id} 
                            smurf={smurf}
                       />
            })}
        </div>
    )
}

export default SmurfList;