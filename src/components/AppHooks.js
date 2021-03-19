import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import {NEW_INSTANCE} from "../actions/types";
import {newInstance, changeField,submitValue} from "../actions/contract";
import  contract  from "../reducers/contract";
import "./App.css";

const App = () => {
const dispatch = useDispatch();
const store = useSelector(store => {
  return store.contract}
  );

const { contract, storageValue, inputValue, isLoading } = store;

const fetchContract = useCallback(()=> {
  dispatch(newInstance())
},[newInstance])
  
useEffect(() => {
    console.log('New Instance...');
    if(!contract){
      fetchContract();
    }
}, [contract, fetchContract])

const handleChange = event => dispatch(changeField(event.target.value, event.target.name));
const handleSubmit = event => dispatch(submitValue()); 

    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          {contract ? "Your contracts compiled and migrated successfully" : "Try to deploy your contract !"}
        </p>
        <p>
          Try changing the value stored on your smart contract : <input type="number" name="inputValue" value={inputValue} onChange={handleChange}></input> <button type="button" onClick={handleSubmit}>Submit</button>
        </p>
        <div>The stored value is: {isLoading ? "data is loading..." : storageValue}</div>
      </div>
    );
  }


export default App;
