import { NEW_INSTANCE } from '../actions/types';
import { seedInstance } from '../actions/contract';
import getWeb3 from "../utils/getWeb3";
import SimpleStorageContract from "../contracts/SimpleStorage.json";

const web3 = ({getState, dispatch}) => (next) => async (action) => {
  const store = getState();
  const result = next(action);

  switch (action.type) {
    case NEW_INSTANCE :
    try { // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      console.log('networkid:', networkId);

      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      console.log("instance:", instance);
      //get the storageValue 
      const storageValue = await instance.methods.get().call()
      console.log('storageValue:', storageValue)
      // Set web3, accounts, and contract to the store

      if(instance && storageValue) {
          dispatch(seedInstance(web3, accounts, instance, storageValue));
      }
      
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  break;
  }
  return result;
  };


export default web3;