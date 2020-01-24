import React, { useContext, useState } from 'react';
import { SmurfContext } from './SmurfContext';
import  Smurf  from './Smurf';




const SmurfList = () => {
    // const sInfo = useContext(SmurfContext);
    
    

    return(
        <div>
            <h1>Smurf Village</h1>
            {/* <ul>
                {sInfo.map(smurf => {
                    return <Smurf 
                                key={smurf.id}  
                                smurf={smurf} 
                                />
                })}
            </ul> */}

            <Smurf />
            
        </div>
    )
}

export default SmurfList;