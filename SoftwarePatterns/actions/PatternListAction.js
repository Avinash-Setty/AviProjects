import {
    PATTERNLIST_FETCH_FAIL,
    PATTERNLIST_FETCH_WAIT,
    PATTERNLIST_FETCH_SUCCESS
} from './types'

export const patternListFetch = () => {
    
    return (dispatch) => {
        dispatch({ type: PATTERNLIST_FETCH_WAIT });
        const list = require('../data/pattern_list.json');
        dispatch({
            type: PATTERNLIST_FETCH_SUCCESS,
            payload: {
                list
            }
        });
    };
};
