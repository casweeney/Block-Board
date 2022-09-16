import { Route, Switch } from 'react-router-dom';
import GasFee from "./components/GasFee";
import Transactions from './components/Transactions';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Transactions />
        </Route>
        <Route path="/gas-fee" exact>
          <GasFee />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
