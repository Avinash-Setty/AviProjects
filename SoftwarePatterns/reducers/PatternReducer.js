import {
    PATTERNLIST_FETCH_SUCCESS,
    PATTERNLIST_FETCH_FAIL,
    PATTERNLIST_FETCH_WAIT,
} from '../actions/types';

const INITIAL_STATE = {
    patterns: [],
    loading: false,
    error: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PATTERNLIST_FETCH_WAIT:
            return { ...state, loading: true, error: false }
        case PATTERNLIST_FETCH_FAIL:
            return { ...state, loading: false, error: true }
        case PATTERNLIST_FETCH_SUCCESS:
            return { ...state, loading: false, error: false, patterns: action.payload.list }
        default:
            return state;
    }
};
