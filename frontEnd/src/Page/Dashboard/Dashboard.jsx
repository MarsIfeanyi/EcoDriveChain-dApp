import Sidebar from "../../Layout/Sidebar/Sidebar";
import design from "./style.module.css";
import { Outlet } from "react-router-dom";


const Dashboard = () => {
  return (
    <div className={design.Dashboard_wrapper}>
      <Sidebar />
      <div className={design.outlet}>
        <Outlet/> 
      </div>
    </div>
  );
};

export default Dashboard;
