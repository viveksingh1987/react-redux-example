import {combineReducers} from 'redux';
import { amountReducer } from './amountReducer';

const reducers = combineReducers({
    bankAccount: amountReducer
});

export default reducers;