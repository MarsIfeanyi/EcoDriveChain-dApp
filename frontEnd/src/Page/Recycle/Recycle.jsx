// import RecycleMain from "../../Layout/RecycleMain/RecycleMain";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import design from "./style.module.css";
import { Outlet } from "react-router-dom";

const Recycle = () => {
  return (
    <div className={design.Recycle_wrapper}>
      <Sidebar />
      <div className={design.outlet}>
        <Outlet />

        {/* <RecycleMain /> */}
      </div>
    </div>
  );
};

export default Recycle;
