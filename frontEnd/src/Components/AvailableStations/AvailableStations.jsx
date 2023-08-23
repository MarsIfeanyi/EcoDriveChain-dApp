import design from "./style.module.css";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const AvailableStations = () => {
  return (
    <div className={design.Available_stations}>
      <h4>Available stations</h4>
      <p>Near your location</p>
      <div className={design.Available_stations_detail}>
        <p className={design.Available_collect}>Abakpa collection unit</p>
        <span>
          <p>View in map</p>
          <ArrowForwardIosRoundedIcon style={{ fontSize: "12px" }} />
        </span>
      </div>
      <div className={design.Available_stations_detail}>
        <p className={design.Available_collect}>Abakpa collection unit</p>
        <span>
          <p>View in map</p>
          <ArrowForwardIosRoundedIcon style={{ fontSize: "12px" }} />
        </span>
      </div>
    </div>
  );
};

export default AvailableStations;
