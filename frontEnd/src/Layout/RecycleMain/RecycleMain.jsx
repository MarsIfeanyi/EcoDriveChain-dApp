import DashNavbar from "../../Components/DashNavbar/DashNavbar";
import design from "./style.module.css";
import QRCodeScanner from "../../Components/QrScanner/QrScanner";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Hero from "../../assets/dash_hero.png";
import DidYouKnow from "../../Components/DidYouKnow/DidYouKnow";
import Processing from "../../Components/Processing/Processing";
import AuthContext from "../../context/AuthProvider";
import EarnedResults from "../../Components/EarnedResult/EarnedResult";
import { useContext, useState } from "react";
import Button from "../../Components/Button/Button";

const EarnedResult = ({ result }) => {
  return (
    <div>
      <p>You have earned: {result}</p>
    </div>
  );
};
const RecycleMain = () => {
  const [processed, setProcessed] = useState(false);
  const [recycledData, setRecycledData] = useState("");
  const [earnedResult, setEarnedResult] = useState(0);

  const handleRecycledData = (data) => {
    setRecycledData(data);
    const result = data * 0.02;
    setEarnedResult(result);
  };

  const handleProcessed = () => {
    setProcessed(true);
  };
  const { auth } = useContext(AuthContext);

  return (
    <div className={design.RecycleMain_container}>
      <DashNavbar title="Recycle" />
      <div className={design.RecycleMain_hero}>
        <div>
          <h2>{auth?.user?.fullName}</h2>
          <p>
            Scan the QR code found on any of our machines to get started
            recycling
          </p>
        </div>
        <img src={Hero} />
      </div>
      <div className={design.RecycleMain_middle}>
        <div className={design.RecycleMain_middle_left}>
          {processed ? (
            <Processing
              content={`Processing your ` + recycledData + `bottles`}
            />
          ) : (
            <QRCodeScanner
              onRecycledData={handleRecycledData}
              onProcessed={handleProcessed}
            />
          )}
        </div>
        <div className={design.RecycleMain_middle_right}>
          <DidYouKnow />
          <div className={design.RecycleMain_stations}>
            <h4>Available stations</h4>
            <p>Near your location</p>
            <div className={design.RecycleMain_stations_detail}>
              <p className={design.RecycleMain_collect}>
                Abakpa collection unit
              </p>
              <span>
                <p>View in map</p>
                <ArrowForwardIosRoundedIcon style={{ fontSize: "12px" }} />
              </span>
            </div>
            <div className={design.RecycleMain_stations_detail}>
              <p className={design.RecycleMain_collect}>
                Abakpa collection unit
              </p>
              <span>
                <p>View in map</p>
                <ArrowForwardIosRoundedIcon style={{ fontSize: "12px" }} />
              </span>
            </div>
          </div>
          {recycledData && <EarnedResults result={earnedResult} />}
        </div>
      </div>
    </div>
  );
};

export default RecycleMain;

// import DashNavbar from "../../Components/DashNavbar/DashNavbar";
// import design from "./style.module.css";
// import QRCodeScanner from "../../Components/QrScanner/QrScanner";
// import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
// import Hero from "../../assets/dash_hero.png";
// import DidYouKnow from "../../Components/DidYouKnow/DidYouKnow";
// import Processing from "../../Components/Processing/Processing";
// import AuthContext from "../../context/AuthProvider";
// import { useContext, useState } from "react";

// const EarnedResult = ({ result }) => {
//   return (
//     <div>
//       <p>You have earned: {result}</p>
//     </div>
//   );
// };

// const RecycleMain = () => {
//   const [processed, setProcessed] = useState(false);
//   const [recycledData, setRecycledData] = useState("");
// const [earnedResult, setEarnedResult] = useState(0);

//   const handleRecycledData = (data) => {
//     setRecycledData(data);
// const result = data * 0.02;
// setEarnedResult(result);
//   };

//   const handleProcessed = () => {
//     setProcessed(true);
//   };

//   const { auth } = useContext(AuthContext);

//   return (
//     <div className={design.RecycleMain_container}>
//       <DashNavbar title="Recycle" />
//       <div className={design.RecycleMain_hero}>
//         <div>
//           <h2>{auth?.user?.fullName}</h2>
//           <p>Scan the QR code found on any of our machines to get started recycling</p>
//         </div>
//         <img src={Hero} alt="Hero" />
//       </div>
//       <div className={design.RecycleMain_middle}>
//         <div className={design.RecycleMain_middle_left}>
//           {processed ? (
//             <Processing content={`Processing your ${recycledData} bottles`} />
//           ) : (
//             <QRCodeScanner
//               onRecycledData={handleRecycledData}
//               onProcessed={handleProcessed}
//             />
//           )}
//         </div>
//         <div className={design.RecycleMain_middle_right}>
//           <DidYouKnow />
//           <div className={design.RecycleMain_stations}>
//             <h4>Available stations</h4>
//             <p>Near your location</p>
//             <div className={design.RecycleMain_stations_detail}>
//               <p className={design.RecycleMain_collect}>Abakpa collection unit</p>
//               <span>
//                 <p>View in map</p>
//                 <ArrowForwardIosRoundedIcon style={{ fontSize: "12px" }} />
//               </span>
//             </div>
//             <div className={design.RecycleMain_stations_detail}>
//               <p className={design.RecycleMain_collect}>Abakpa collection unit</p>
//               <span>
//                 <p>View in map</p>
//                 <ArrowForwardIosRoundedIcon style={{ fontSize: "12px" }} />
//               </span>
//             </div>
//           </div>
// {recycledData && <EarnedResult result={earnedResult} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecycleMain;
