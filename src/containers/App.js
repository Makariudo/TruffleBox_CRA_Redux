import { connect } from 'react-redux';

import App from '../components/App';
import {newInstance, changeField, submitValue} from '../actions/contract';


const mapStateToProps = (store) => {
const  {web3, accounts, contract, storageValue, isLoading, inputValue} = store.contract
   return ({
    web3,
    accounts,
    contract,
    storageValue,
    isLoading,
    inputValue,
  })
}

const mapDispatchToProps = (dispatch) => ({
  newInstance: () => {
    dispatch(newInstance());
  },
  changeField: (value, field) => {
    dispatch(changeField(value,field));
  },
  submitValue: () => {
    dispatch(submitValue());
  }
})

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(App);