import axios from 'axios';

export const FETCH_SMURF = 'FETCH_SMURF';
export const POST_SMURF = 'POST_SMURF';

export const fetchSmurf = () => {
    axios('http://localhost:3333/smurfs')
        // .then (res => console.log(res) res.json())
        .then (res => console.log(res))
        .then(smurfs => 
            dispatchEvent({
                type: FETCH_SMURF,
                payload: smurfs
            }))
}

export const postSmurf = smurfData => dispatch => {
    axios('http://localhost:3333/smurfs', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(smurfData)
    })
    .then(res => res.json())
    .then(smurf => 
        dispatch({
            type: POST_SMURF,
            payload: smurf
        })
        )
}