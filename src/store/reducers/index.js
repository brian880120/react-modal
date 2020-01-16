import { combineReducers } from 'redux';
import shopmodeReducer from './shopmode.reducer';
import addressReducer from './address.reducer';

const rootReducer = combineReducers({
    mode: shopmodeReducer,
    address: addressReducer,
});

export default rootReducer;
