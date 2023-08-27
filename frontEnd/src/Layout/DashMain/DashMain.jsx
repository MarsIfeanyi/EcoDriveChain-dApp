import PropTypes from "prop-types";
import { useContext } from "react";
import IC2 from "../../assets/Nig.png";
import design from "./style.module.css";
import IC1 from "../../assets/Usdc.png";
import { Link, useNavigate } from "react-router-dom";
import IC3 from "../../assets/Bottle.png";
import Hero from "../../assets/dash_hero.png";
import Button from "../../Components/Button/Button";
import AuthContext from "../../context/AuthProvider";
import DashCard from "../../Components/DashCard/DashCard";
import DashNavbar from "../../Components/DashNavbar/DashNavbar";
import DidYouKnow from "../../Components/DidYouKnow/DidYouKnow";
import TransactionHistory from "../../Components/TransactionHistory/TransactionHistory";
import RecycleHistory from "../../Components/RecycleHistory/RecycleHistory";
import AvailableStations from "../../Components/AvailableStations/AvailableStations";

const DashMain = () => {
  const { auth } = useContext(AuthContext);

  const navigate = useNavigate();
  function handleRecycle() {
    navigate("/dashboard/start-recycling");
  }

  function ColorfulPTag({ content }) {
    const isPositive = content.startsWith("+");

    return (
      <p style={{ color: isPositive ? "#039855" : "#D92D20" }}>{content}</p>
    );
  }
  ColorfulPTag.propTypes = {
    content: PropTypes.string.isRequired,
  };
  return (
    <div
      className={design.DashMain_wrapper}
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <DashNavbar title="Home" />
      <div className={design.DashMain_hero}>
        <div>
          <h2>Hello {auth?.user?.fullName}</h2>
          <p>
            We are on a mission to make the world cleaner using blockchain
            technology for recycling.
          </p>
          {/* <Link to="/start-recycling"> */}
          <Button
            onClick={handleRecycle}
            content="Start recycling"
            style={{
              backgroundColor: "#7F56D9",
              border: "none",
              marginLeft: "0",
            }}
          />
          {/* </Link> */}
        </div>
        <img src={Hero} />
      </div>
      <div className={design.DashMain_middle}>
        <div className={design.DashMain_middle_left}>
          <div className={design.DashMain_middle_left_upper}>
            <DashCard
              icons={IC1}
              title="USDC"
              value="Balance"
              number="0"
              className={design.crd_1}
            />
            <DashCard
              icons={IC2}
              title="Nigeria"
              value="Leaderboard"
              number="0"
              className={design.crd_2}
            />
            <DashCard
              icons={IC3}
              title="Plastic bottles"
              value="Total recycled"
              number="0"
              className={design.crd_3}
            />
          </div>
          <div className={design.DashMain_middle_left_lower}>
            <TransactionHistory />
            <RecycleHistory />
          </div>
        </div>
        <div className={design.DashMain_middle_right}>
          <DidYouKnow />
          <AvailableStations />
        </div>
      </div>
    </div>
  );
};

export default DashMain;
