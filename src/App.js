import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import DashboardMain from "./components/DashBoardMain";
import Exchange from "./components/Exchange";
import BuyCrypto from "./components/BuyCrypto";
import AddCoinAndToken from "./components/AddCoinAndToken";
import CoinInfo from "./components/CoinInfo";
import ExchangeMain from "./components/ExchangeMain";
import Wallet from './components/Wallet';
import Staking from './components/Staking';
import Trading from './components/Trading';
import Setting from './components/Setting';

function App() {
  return (
    <div>
      <Router>
        <main>
          <Routes>
            <Route exact path='/' element={<>Root</>}/>
            <Route exact path="main" element={<Dashboard />}>
              <Route exact path="dashboard" element={<DashboardMain />}/>
              <Route exact path="exchange" element={<Exchange />} />
              <Route exact path="exchange/addcoinandtoken" element= {<AddCoinAndToken />} />
              <Route exact path="exchange/coininfo" element= {<CoinInfo />} />
              <Route exact path="exchange/exchange" element= {<ExchangeMain />} />
              
              <Route exact path="buycrypto" element={<BuyCrypto />} />
              <Route exact path="wallet" element={<Wallet />} />
              <Route exact path="staking" element={<Staking />} />
              <Route exact path="trading" element={<Trading />} />
              <Route exact path="setting" element={<Setting />} />
            </Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
