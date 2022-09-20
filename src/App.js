import { Route, Switch } from 'react-router-dom';
import NavBar from "./layout/NavBar";
import GasFee from "./components/GasFee";
import Transactions from './components/Transactions';
import Explorer from './components/Explorer';
import Accounts from './components/Accounts';
import StakingReports from './components/StakingReports';
import NftCollection from './components/NftCollection';

function App() {
  return (
    <div>
      <iframe src="https://coinhippo.io?widget=price-marquee&theme=dark" title="Price Update" frameBorder="0" width="100%" height="60"></iframe>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Transactions />
        </Route>

        <Route path="/gas-fee" exact>
          <GasFee />
        </Route>

        <Route path="/explorer" exact>
          <Explorer />
        </Route>

        <Route path="/accounts" exact>
          <Accounts />
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
