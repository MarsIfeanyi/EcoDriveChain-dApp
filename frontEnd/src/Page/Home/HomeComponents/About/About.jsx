import design from "./style.module.css";
import AboutImg from "../../../../assets/About.png";

const About = () => {
  return (
    <div className={design.about_container} id="about">
      <div
        className={design.about_left}
        data-aos-duration="1000"
        data-aos="zoom-in"
      >
        <h1>About Us</h1>
        <p>
 logo
         
          EcoDriveChain offers convenient and sustainable waste disposal
          solutions for individuals and businesses. Our innovative rewards
          program incentivizes users to dispose of their plastic waste with us
          by offering USDC as a reward. Our experienced team is committed to
          promoting sustainability and reducing waste. Let&apos;s work together
          to create a cleaner and more sustainable future!
 main
        </p>
      </div>
      <div
        className={design.about_right}
        data-aos-duration="1000"
        data-aos="zoom-in"
      >
        <img src={AboutImg} alt="" className={design.about_img} />
      </div>
    </div>
  );
};

export default About;
