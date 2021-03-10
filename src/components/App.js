import React, { useEffect } from "react";

import "./App.css";

const App = ({web3, accounts, contract, storageValue, isLoading, newInstance}) => {
 
  useEffect(() => {
    console.log('New Instance...');
    if(!contract){
      newInstance();
    }
}, [])

    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          Your contracts compiled and migrated successfully
        </p>
        <p>
          Try changing the value stored on your smart contract : <input type="number"></input> 
        </p>
        <div>The stored value is: {storageValue}</div>
      </div>
    );
  }


export default App;
