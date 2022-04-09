
import {ADD_AMOUNT, REMOVE_AMOUNT, RESET_AMOUNT} from '../actiontype';

const initialState = {
    amount: 0
};

const amountReducer = (state = initialState, action: any) => {

    console.log('reducer', action);
    switch(action.type) {
        case ADD_AMOUNT :
            return {...state, amount: (state.amount + action.payload)};
        case REMOVE_AMOUNT :
            return {...state, amount: (state.amount - action.payload)};
        case RESET_AMOUNT :
            return {...state, amount: 0};
        default: 
            return state;
    }
}

export {amountReducer};