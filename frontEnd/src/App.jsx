import { Routes, Route } from "react-router-dom";
import Login from "./userAuthenticate/Login/Login";
import Signup from "./userAuthenticate/Signup/Signup";
import Home from "./Page/Home/Home";
import DashMain from "./Layout/DashMain/DashMain";
import Footer from "./Components/Footer/Footer";
// import Recycle from "./Page/Recycle/Recycle";
import RecycleMain from "./Layout/RecycleMain/RecycleMain";
import Settings from "./Page/Settings/SettingsPage/Settings";
import EditPersonal from "./Page/Settings/SettingsComponents/EditPersonal/EditPersonal";
import EditPassword from "./Page/Settings/SettingsComponents/EditPassword/EditPassword";

import PrivateRoutes from "./userAuthenticate/PrivateRoutes";
import PublicRoute from "./userAuthenticate/PublicRoute";
import Wallet from "./Page/Wallet/WalletPage/Wallet";
import WalletMain from "./Page/Wallet/WalletComponents/WalletMain/WalletMain";
import SendFunds from "./Page/Wallet/WalletComponents/SendFunds/SendFunds";
import SendFundsAmount from "./Page/Wallet/WalletComponents/SendFundsAmount/SendFundsAmount";
import SendFundsConfirm from "./Page/Wallet/WalletComponents/SendFundsConfirm/SendFundsConfirm";
import ConvertFunds from "./Page/Wallet/WalletComponents/ConvertFunds/ConvertFunds";

import LeaderMain from "./Layout/LeaderMain/LeaderMain";

function App() {
  return (
    <>
      <Routes>
        <Route path="dashboard" element={<PrivateRoutes />}>
          <Route path="" element={<DashMain />} />
          <Route path="leaderboard" element={<LeaderMain />} />
          <Route path="start-recycling" element={<RecycleMain />} />
          <Route path="wallet" element={<Wallet />}>
            <Route path="" element={<WalletMain />} />
            <Route path="convert-funds" element={<ConvertFunds />} />
            <Route path="send-funds" element={<SendFunds />} />
            <Route path="send-funds-amount" element={<SendFundsAmount />} />
            <Route path="send-funds-confirm" element={<SendFundsConfirm />} />
          </Route>

          <Route path="settings" element={<Settings />}>
            <Route path="" element={<EditPersonal />} />
            <Route path="password" element={<EditPassword />} />
          </Route>
        </Route>
        {/* <Route path="" element={<PrivateRoutes />}> */}
        {/* <Route path="/start-recycling" element={<Recycle />} /> */}
        {/* <Route path="/start-recycling" element={<RecycleMain />} /> */}
        {/* </Route> */}

        <Route path="/" element={<PublicRoute />}>
          <Route path="" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
