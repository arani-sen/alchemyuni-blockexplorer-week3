import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState,createContext, useContext } from 'react';

import './App.css';
import SelectBlock from './components/SelectBlock';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

 export const AlchemyContext = createContext(null);

function App() {


  return <div className="App">
    <AlchemyContext.Provider value={alchemy}>
      <SelectBlock />
    </AlchemyContext.Provider>
    </div>;

}

export default App;
