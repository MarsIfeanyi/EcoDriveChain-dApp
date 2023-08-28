import design from "./style.module.css";
import Track from "../../../../assets/track.png";

const TrackBIRC = () => {
  return (
    <div className={design.TrackBIRC_container}>
      <h1 data-aos="fade-up" data-aos-duration="1000"> logo
        Track Your ECOCHAIN Activities

 main
      </h1>
      <img
        src={Track}
        alt=""
        className={design.TrackBIRC_img}
        data-aos="flip-down"
        data-aos-duration="1000"
      />
    </div>
  );
};

export default TrackBIRC;
