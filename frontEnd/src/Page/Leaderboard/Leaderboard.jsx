import Sidebar from "../../Layout/Sidebar/Sidebar";
import design from "./style.module.css";
import { Outlet } from "react-router-dom";


const Leaderboard = () => {
  return (
    <div className={design.Leaderboard_wrapper}>
    <Sidebar />
      <div className={design.outlet}>
        <Outlet/> 
      </div>
    </div>
  )
}

export default Leaderboard
