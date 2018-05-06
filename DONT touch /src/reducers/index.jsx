import { combineReducers } from 'redux';

import mainPageReducer from './mainPageReducer';
import usersReducer from './usersReducer';


export default combineReducers({
    mainPageReducer,
    usersReducer
})