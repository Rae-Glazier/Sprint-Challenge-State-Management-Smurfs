import { FETCH_SMURF, POST_SMURF} from '../actions/index';

export const initialState = {
    items: [],
    item: {}
};

export const smurfReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF:
            return {
                ...state,
                items: action.payload
            };

        case POST_SMURF:
            return {
                ...state,
                item: action.payload
            }

        default :
            return state;
    }
}