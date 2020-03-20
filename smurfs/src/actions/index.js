export const FETCH_SMURF = 'FETCH_SMURF';
export const POST_SMURF = 'POST_SMURF';

export const fetchSmurf = () => {
    fetch('http://localhost:3333/smurfs')
        .then (res => res.json())
        .then(smurfs => 
            dispatchEvent({
                type: FETCH_SMURF,
                payload: smurfs
            }))
}

export const postSmurf = smurfData => dispatch => {
    fetch('http://localhost:3333/smurfs', {
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