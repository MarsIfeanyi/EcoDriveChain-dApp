import design from "./style.module.css";
import HeroImg from "../../../../assets/hero.png";
import Button from "../../../../Components/Button/Button";

const Hero = () => {
  return (
    <div className={design.hero_container}>
      <div
        className={design.hero_left}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1>
          Turn Your Plastic Wastes to
          <div className={design.parallelogram}>
            <span className={design.text}>CRYPTO</span>
          </div>
        </h1>
        <Button
          content="Get started"
          style={{
            backgroundColor: "#8bc34a",
            border: "none",
            padding: "15px 70px",
            marginTop: "5vh",
          }}
        />
      </div>
      <div className={design.hero_right}>
        <img src={HeroImg} alt="" className={design.hero_img} />
      </div>
    </div>
  );
};

export default Hero;
