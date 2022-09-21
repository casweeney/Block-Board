import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from "./layout/NavBar";
import GasFee from "./components/GasFee";
import Transactions from './components/Transactions';
import Explorer from './components/Explorer';
import Accounts from './components/Accounts';
import StakingReports from './components/StakingReports';
import NftCollection from './components/NftCollection';

function App() {
    const [account, setAccount] = useState(null);
    const [protocol, setProtocol] = useState(null);
    const [accountData, setAccountData] = useState(null);
    const [accountTransactions, setAccountTransactions] = useState(null);
    const [currentBlock, setCurrentBlock] = useState(null);
    const [blockTransactions, setBlockTransactions] = useState(null);
    const [blockIdentifiers, setBlockIdentifiers] = useState(null);

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

    const getAccountData = async () => {
        const response = await fetch(`https://ubiquity.api.blockdaemon.com/v1/ethereum/mainnet/account/0x617cd3DB0CbF26F323D5b72975c5311343e09115`, {
            headers: {Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`}
        });

        const data = await response.json();
        setAccountData(data);
    }

    const getAccountTransactions = async () => {
      const response = await fetch(`https://ubiquity.api.blockdaemon.com/v1/ethereum/mainnet/account/0x617cd3DB0CbF26F323D5b72975c5311343e09115/txs`, {
        headers: {Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`}
      });

      const data = await response.json();

      setAccountTransactions(data);
    }

    const setNewProtocol = (newProtocol) => {
      setProtocol(newProtocol);
    }

    const setNewAccount = (newAccount) => {
      setAccount(newAccount);
    }

    const submitClickHandler = () => {
      console.log("Hello");
    }

    useEffect(() => {
        getAccountData();
        getAccountTransactions();
        getCurrentBlock();
        if(currentBlock !== null) {
          getBlockTransactions();
        }
        getBlockIdentifiers();
    }, [currentBlock]);

  return (
    <div>
      {/* <iframe src="https://coinhippo.io?widget=price-marquee&theme=dark" title="Price Update" frameBorder="0" width="100%" height="60"></iframe> */}
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Transactions blockIdentifiers={blockIdentifiers} blockTransactions={blockTransactions} />
        </Route>

        <Route path="/gas-fee" exact>
          <GasFee />
        </Route>

        <Route path="/explorer" exact>
          <Explorer />
        </Route>

        <Route path="/accounts" exact>
          <Accounts account={account} accountData={accountData} accountTransactions={accountTransactions} onSetProtocol={setNewProtocol} onSetAccount={setNewAccount} onSubmitClicked={submitClickHandler} />
        </Route>

        <Route path="/staking-reports" exact>
          <StakingReports />
        </Route>

        <Route path="/nft-collections" exact>
          <NftCollection />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
