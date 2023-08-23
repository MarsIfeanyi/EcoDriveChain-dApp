import design from "./style.module.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthContext from "../../context/AuthProvider";
import { useContext } from "react";
import Button from "../Button/Button";
import { v4 as uuidv4 } from "uuid";

const DashNavbar = (props) => {
  const { auth } = useContext(AuthContext);
  const [walletData, setWalletData] = useState(null);
  const [walletCreated, setWalletCreated] = useState(false);

  const [activeItem, setActiveItem] = useState("dashboard");
  const location = useLocation();

  // update activeItem based on current location
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setActiveItem("dashboard");
    } else if (location.pathname === "/wallet") {
      setActiveItem("wallet");
    } else if (location.pathname === "/leaderboard") {
      setActiveItem("leaderboard");
    } else if (location.pathname === "/settings") {
      setActiveItem("settings");
    }
  }, [location]);
  // define active and inactive colors
  const activeBackgroundColor = "#8bc34a";

  // set style for active link
  const activeLinkStyle = {
    backgroundColor: activeBackgroundColor,
    textDecoration: "none",
    color: "#fff",
  };

  // Create wallet and address

  const createCircleWallet = async () => {
    const idempotencyKey = uuidv4();

    try {
      // Create the wallet
      const createWalletOptions = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization:
            "Bearer SAND_API_KEY:d4f5a846ab735475be2c55be25cc7953:72903f7cb32e324f5bc3c6fa87fd6869",
        },
        body: JSON.stringify({
          idempotencyKey: idempotencyKey,
        }),
      };

      const walletResponse = await fetch(
        "https://api-sandbox.circle.com/v1/wallets",
        createWalletOptions
      );
      const walletData = await walletResponse.json();
      console.log("Wallet:", walletData);

      // Create the address
      const createAddressOptions = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization:
            "Bearer SAND_API_KEY:d4f5a846ab735475be2c55be25cc7953:72903f7cb32e324f5bc3c6fa87fd6869",
        },
        body: JSON.stringify({
          currency: "USD",
          chain: "ETH",
          idempotencyKey: idempotencyKey,
        }),
      };

      const addressResponse = await fetch(
        `https://api-sandbox.circle.com/v1/wallets/${walletData.data.walletId}/addresses`,
        createAddressOptions
      );
      const addressData = await addressResponse.json();
      console.log("Address:", addressData);

      setWalletData({
        walletId: walletData.data.walletId,
        balance: walletData.data.balance,
        address: addressData.data.address,
      });

      // Set the wallet and address data to the user's email in the database
      const updateUserOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          walletId: walletData.walletId,
          address: walletData.address,
        }),
      };

      const updateUserResponse = await fetch(
        `https://circle-wms.onrender.com/api/v1/users/${auth?.user?.email}`, // Replace with your API endpoint for updating user data
        updateUserOptions
      );

      if (updateUserResponse.ok) {
        setWalletCreated(true);
        toast.success("Wallet successfully created");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={design.DashNavbar_container}>
      {/* <ToastContainer /> */}
      <h3>{props.title} </h3>
      <div className={design.DashNavbar_user}>
        {!walletCreated && (
          <Button
            onClick={createCircleWallet}
            content="Create Wallet"
            style={{
              backgroundColor: "#8BC34A",
              border: "1px solid #8BC34A",
              marginLeft: "0",
            }}
          />
        )}
        <img src={auth?.user?.imageUrl} alt="logo" className={design.userImg} />
        <div className={design.DashNavbar_user_title}>
          <h4>{auth?.user?.fullName}</h4>
          <p>{auth?.user?.email}</p>
          {walletData && (
            <>
              <p>{auth?.user?.walletId}</p>

              <p> {walletData.address}</p>
            </>
          )}
        </div>
        <input type="checkbox" />
        <div className={design.hamburgerLines}>
          <span className={`${design.line} ${design.line1}`}></span>
          <span className={`${design.line} ${design.line2}`}></span>
          <span className={`${design.line} ${design.line3}`}></span>
        </div>{" "}
        <div className={design.DashNavbar_toHide}>
          <ul className={design.menuItems}>
            <li>
              <Link
                className={design.Sidebar_tabs}
                to="/dashboard"
                style={activeItem === "dashboard" ? activeLinkStyle : {}}
              >
                {" "}
                <div className={design.Sidebar_tabs_inner}>
                  <HomeRoundedIcon />
                  <h3>Home</h3>
                </div>
                <ArrowForwardIosRoundedIcon className={design.chev} />
              </Link>
            </li>
            <li>
              <Link
                className={design.Sidebar_tabs}
                to="/wallet"
                style={activeItem === "wallet" ? activeLinkStyle : {}}
              >
                <div className={design.Sidebar_tabs_inner}>
                  <MonetizationOnRoundedIcon />
                  <h3>Wallet</h3>
                </div>
                <ArrowForwardIosRoundedIcon className={design.chev} />
              </Link>
            </li>
            <li>
              <Link
                className={design.Sidebar_tabs}
                to="/leaderboard"
                style={activeItem === "leaderboard" ? activeLinkStyle : {}}
              >
                <div className={design.Sidebar_tabs_inner}>
                  <LeaderboardRoundedIcon />
                  <h3>Leaderboard</h3>
                </div>{" "}
                <ArrowForwardIosRoundedIcon className={design.chev} />
              </Link>
            </li>
            <li>
              <Link
                className={design.Sidebar_tabs}
                to="/settings"
                style={activeItem === "settings" ? activeLinkStyle : {}}
              >
                <div className={design.Sidebar_tabs_inner}>
                  <SettingsRoundedIcon />
                  <h3>Settings</h3>
                </div>{" "}
                <ArrowForwardIosRoundedIcon className={design.chev} />
              </Link>
            </li>{" "}
            <li className={design.Sidebar_logout}>
              <ArrowBackIosNewRoundedIcon /> Log out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

DashNavbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DashNavbar;
