import design from "./style.module.css";
import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SLOGO from "../../assets/logo.png";
import EcoLogo from "../../Components/EcoLogo/EcoLogo";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();

  //Logout Functionality
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear()
    navigate('/login')
  }


  // update activeItem based on current location
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setActiveItem("dashboard");
    } else if (location.pathname === "/dashboard/wallet") {
      setActiveItem("wallet");
    } else if (location.pathname === "/dashboard/leaderboard") {
      setActiveItem("leaderboard");
    } else if (location.pathname === "/dashboard/settings") {
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
    transition: ".5s ease",
  };

  return (
    <div className={design.Sidebar_wrapper}>
      {/*<img src={SLOGO} alt="" className={design.Sidebar_img} />*/}
      <div className={design.Sidebar_img_wrapper}>
        
        <EcoLogo 
            className={design.Sidebar_img}
            textStyles={
              {
                "marginLeft":"2px",
                "fontSize":"28px"
              }
            }
            />
      </div>

      <div className={design.menuItems}>
        {" "}
        <div>
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
        </div>
        <div>
          <Link
            className={design.Sidebar_tabs}
            to="wallet"
            style={activeItem === "wallet" ? activeLinkStyle : {}}
          >
            <div className={design.Sidebar_tabs_inner}>
              <MonetizationOnRoundedIcon />
              <h3>Wallet</h3>
            </div>
            <ArrowForwardIosRoundedIcon className={design.chev} />
          </Link>
        </div>
        <div>
          <Link
            className={design.Sidebar_tabs}
            to="leaderboard"
            style={activeItem === "leaderboard" ? activeLinkStyle : {}}
          >
            <div className={design.Sidebar_tabs_inner}>
              <LeaderboardRoundedIcon />
              <h3>Leaderboard</h3>
            </div>{" "}
            <ArrowForwardIosRoundedIcon className={design.chev} />
          </Link>
        </div>
        <div>
          <Link
            className={design.Sidebar_tabs}
            to="settings"
            style={activeItem === "settings" ? activeLinkStyle : {}}
          >
            <div className={design.Sidebar_tabs_inner}>
              <SettingsRoundedIcon />
              <h3>Settings</h3>
            </div>{" "}
            <ArrowForwardIosRoundedIcon className={design.chev} />
          </Link>
        </div>
      </div>
      <div className={design.Sidebar_logout} onClick={handleLogout}>
        <ArrowBackIosNewRoundedIcon /> Log out
      </div>
    </div>
  );
};

export default Sidebar;
