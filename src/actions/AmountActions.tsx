
import {ADD_AMOUNT, REMOVE_AMOUNT, RESET_AMOUNT} from '../actiontype';

const addAmount = (amount: number) => {
    console.log('addAmount action', amount);
    return (dispatch: any)=> {
        dispatch({
            type: ADD_AMOUNT,
            payload: amount
        });
    }
}

const removeAmount = (amount: number) => {
    console.log('removeAmount action', amount);
    return (dispatch: any)=> {
        dispatch({
            type: REMOVE_AMOUNT,
            payload: amount
        });
    }
}

const resetAmount = () => {
    console.log('resetAmount action');
    return (dispatch: any)=> {
        dispatch({
            type: RESET_AMOUNT,
            payload: 0
        });
    }
}


export {addAmount, removeAmount, resetAmount};