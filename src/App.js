import React, { useState, useEffect } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import NavBar from "./layout/NavBar";
import GasFee from "./components/GasFee";
import Transactions from './components/Transactions';
import Explorer from './components/Explorer';
import Accounts from './components/Accounts';
import StakingReports from './components/StakingReports';
import NftCollection from './components/NftCollection';
import TxDetails from './components/TxDetails';
import BlockTransactions from './components/BlockTransactions';
import NftDetails from './components/NftDetails';

function App() {
    const [currentBlock, setCurrentBlock] = useState(null);
    const [blockTransactions, setBlockTransactions] = useState(null);
    const [blockIdentifiers, setBlockIdentifiers] = useState(null);
    const [latestTransactions, setLatestTransactions] = useState(null);
    const [defaultProtocol, setDefaultProtocol] = useState("");
    const history = useHistory();

    console.log(defaultProtocol, " Current Block Number:", currentBlock)

    let defaultChain = localStorage.getItem('defaultProtocol');

    const changeDefaultProtocol = (defaultProtocol) => {
      setCurrentBlock(null);
      setBlockTransactions(null);
      setBlockIdentifiers(null);
      setLatestTransactions(null);
      localStorage.setItem("defaultProtocol", JSON.stringify(defaultProtocol));
      defaultChain = JSON.parse(localStorage.getItem('defaultProtocol'));
      setDefaultProtocol(defaultChain);
      alert("Default protocol changed");

      history.push("/");
    }

    const getLatestTransactions = async () => {
      try {
        const response = await fetch(`https://ubiquity.api.blockdaemon.com/v1/${defaultProtocol}/mainnet/txs`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`
          }
        });

        const data = await response.json();
        setLatestTransactions(data);
      } catch (error) {
        console.log(error);
      }
    }

    const getBlockIdentifiers = async () => {
      try {
        const response = await fetch(`https://ubiquity.api.blockdaemon.com/v1/${defaultProtocol}/mainnet/block_identifiers`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`
          }
        });

        const data = await response.json();
        setBlockIdentifiers(data);
      } catch (error) {
        console.log(error);
      }
    }

    const getCurrentBlock = async () => {
      try {
        const response = await fetch(`https://ubiquity.api.blockdaemon.com/v1/${defaultProtocol}/mainnet/sync/block_number`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`
          }
        });

        const data = await response.json();
        setCurrentBlock(data);
      } catch (error) {
        console.log(error);
      }
    }

    const getBlockTransactions = async () => {
      try {
        const response = await fetch(`https://ubiquity.api.blockdaemon.com/v1/${defaultProtocol}/mainnet/block/${currentBlock}`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_UBIQUITY_KEY}`
          }
        });

        const data = await response.json();
        setBlockTransactions(data);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
        if(defaultProtocol !== ""){
          getCurrentBlock();
          getBlockIdentifiers();
          getLatestTransactions();
        }

        if(currentBlock !== null && defaultProtocol !== "") {
          getBlockTransactions();
        }
        // eslint-disable-next-line
    }, [currentBlock, defaultProtocol]);



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
      <coingecko-coin-price-marquee-widget  coin-ids="bitcoin,eos,ethereum,litecoin,ripple,solana,dogecoin" currency="usd" background-color="#000000" locale="en" font-color="#ffffff"></coingecko-coin-price-marquee-widget>
      <div style={{ backgroundColor: "#000000", overflow: "hidden", height: "62px", padding: "0px", margin: "0px", width: "100%" }}>
        <iframe title="coinmarquee" src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=dark&pref_coin_id=1505&invert_hover=" width="100%" height="36px" scrolling="auto" marginWidth="0" marginHeight="0" frameBorder="0" border="0" style={{ border: "0", margin: "0", padding: "0" }}></iframe>
      </div>

      {/* <div id="cr-widget-marquee"
        data-coins="bitcoin,ethereum,tether,ripple,cardano,litecoin,tezos,dogecoin,polkadot"
        data-theme="dark"
        data-show-symbol="true"
        data-show-icon="true"
        data-show-period-change="true"
        data-period-change="24H"
        data-api-url="https://api.cryptorank.io/v0"
        className="text-center"
      >
        <a href="https://cryptorank.io">Loading... Coins by BlockBoard</a>
      </div> */}
      <NavBar currentProtocol={defaultProtocol} onProtocolChangeSubmit={changeDefaultProtocol} />
      <Switch>
        <Route path="/" exact>
          <Transactions defaultProtocol={defaultProtocol} blockIdentifiers={blockIdentifiers} blockTransactions={blockTransactions} />
        </Route>

        <Route path="/gas-fee" exact>
          <GasFee />
        </Route>

        <Route path="/explorer" exact>
          <Explorer latestTransactions={latestTransactions} currentProtocol={defaultProtocol} />
        </Route>

        <Route path="/accounts/:protocol/:network/:address" exact>
          <Accounts />
        </Route>

        <Route path="/staking-reports" exact>
          <StakingReports />
        </Route>

        <Route path="/nft-collections/:address" exact>
          <NftCollection />
        </Route>

        <Route path="/nft-details/:nftId" exact>
          <NftDetails />
        </Route>

        <Route path="/details/tx/:protocol/:transactionId" exact>
          <TxDetails />
        </Route>

        <Route path="/block/:protocol/:blockNumber" exact>
          <BlockTransactions />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
