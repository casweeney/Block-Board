import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from "./layout/NavBar";
import GasFee from "./components/GasFee";
import Transactions from './components/Transactions';
import Explorer from './components/Explorer';
import Accounts from './components/Accounts';
import StakingReports from './components/StakingReports';
import NftCollection from './components/NftCollection';
import TxDetails from './components/TxDetails';
import BlockTransactions from './components/BlockTransactions';

function App() {
    const [currentBlock, setCurrentBlock] = useState(null);
    const [blockTransactions, setBlockTransactions] = useState(null);
    const [blockIdentifiers, setBlockIdentifiers] = useState(null);
    const [latestTransactions, setLatestTransactions] = useState(null);
    const [defaultProtocol, setDefaultProtocol] = useState("");

    let defaultChain = localStorage.getItem('defaultProtocol');

    const changeDefaultProtocol = (defaultProtocol) => {
      
      localStorage.setItem("defaultProtocol", JSON.stringify(defaultProtocol));
      console.log("Protocol changed");
      alert("Default protocol changed");
    }

    const getLatestTransactions = async () => {
      const response = await fetch(`https://ubiquity.api.blockdaemon.com/v1/ethereum/mainnet/txs`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`
        }
      });

      const data = await response.json();
      setLatestTransactions(data);
    }

    const getBlockIdentifiers = async () => {
      const response = await fetch(`https://ubiquity.api.blockdaemon.com/v1/ethereum/mainnet/block_identifiers`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`
        }
      });

      const data = await response.json();
      setBlockIdentifiers(data);
    }

    const getCurrentBlock = async () => {
      const response = await fetch(`https://ubiquity.api.blockdaemon.com/v1/ethereum/mainnet/sync/block_number`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`
        }
      });

      const data = await response.json();
      setCurrentBlock(data);
    }

    const getBlockTransactions = async () => {
      const response = await fetch(`https://ubiquity.api.blockdaemon.com/v1/ethereum/mainnet/block/${currentBlock}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`
        }
      });

      const data = await response.json();
      setBlockTransactions(data);
    }

    useEffect(() => {
        getLatestTransactions();
        getCurrentBlock();
        if(currentBlock !== null) {
          getBlockTransactions();
        }
        getBlockIdentifiers();
        // eslint-disable-next-line
    }, [currentBlock]);

    useEffect(() => {
        if(defaultChain === null) {
          localStorage.setItem("defaultProtocol", JSON.stringify("ethereum"));
        }
        // eslint-disable-next-line
        defaultChain = JSON.parse(localStorage.getItem('defaultProtocol'));
        setDefaultProtocol(defaultChain);
        
    }, [defaultProtocol]);

  return (
    <div>
      <iframe src="https://coinhippo.io?widget=price-marquee&theme=dark" title="Price Update" frameBorder="0" width="100%" height="60"></iframe>
      <NavBar onProtocolChangeSubmit={changeDefaultProtocol} />
      <Switch>
        <Route path="/" exact>
          <Transactions defaultProtocol={defaultProtocol} blockIdentifiers={blockIdentifiers} blockTransactions={blockTransactions} />
        </Route>

        <Route path="/gas-fee" exact>
          <GasFee />
        </Route>

        <Route path="/explorer" exact>
          <Explorer latestTransactions={latestTransactions} />
        </Route>

        <Route path="/accounts/:protocol/:network/:address" exact>
          <Accounts />
        </Route>

        <Route path="/staking-reports" exact>
          <StakingReports />
        </Route>

        <Route path="/nft-collections" exact>
          <NftCollection />
        </Route>

        <Route path="/details/tx/:transactionId" exact>
          <TxDetails />
        </Route>

        <Route path="/block/:blockNumber" exact>
          <BlockTransactions />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
