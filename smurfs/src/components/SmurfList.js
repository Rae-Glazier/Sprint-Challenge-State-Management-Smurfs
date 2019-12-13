import React, { useContext } from 'react';
import { SmurfContext } from './SmurfContext';
import  Smurf  from './Smurf';

const SmurfList = () => {
    const sInfo = useContext(SmurfContext);

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