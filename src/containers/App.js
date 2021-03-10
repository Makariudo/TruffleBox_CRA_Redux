import { connect } from 'react-redux';

import App from '../components/App';
import {newInstance} from '../actions/contract';


const mapStateToProps = (store) => {
const  {web3, accounts, contract, storageValue, isLoading} = store.contract
   return ({
    web3,
    accounts,
    contract,
    storageValue,
    isLoading,
  })
}

const mapDispatchToProps = (dispatch) => ({
  newInstance: () => {
    dispatch(newInstance());
  },

 
})

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(App);