import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../actions/actions';


function Depositor() {

    const bankAmount = useSelector((state: any)=> {
        console.log('state: ', state.bankAccount.amount)
        return state.bankAccount.amount});
    console.log('bankAmount',bankAmount);
    
    const dispatch = useDispatch();
    const {addAmount, removeAmount, resetAmount} = bindActionCreators(actionCreators, dispatch);
 

    return(
        <div>
            Depositor
            <div style={{borderStyle: 'solid', padding:'30px',marginLeft:'200px', marginRight:'200px'}}>
                <span>Total Amount: {bankAmount}</span>
                <hr></hr>
                <div>
                    <button id="deposit" value="deposit" onClick={()=>addAmount(100)}>Deposit</button>
                    <hr></hr>
                    <button id="withdraw" value="withdraw" onClick={()=>removeAmount(100)}>Withdraw</button>
                    <hr></hr>
                    <button id="clear" value="clear" onClick={()=>resetAmount()}>Clear</button>
                </div>
            </div>
        </div>
    );
}

export default Depositor;