import { combineReducers } from 'redux';
import PatternReducer from './PatternReducer';

export default combineReducers({
    patternList: PatternReducer
});
