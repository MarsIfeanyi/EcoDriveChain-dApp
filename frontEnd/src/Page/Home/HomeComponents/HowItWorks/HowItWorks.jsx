import design from "./style.module.css";
import Work1 from "../../../../assets/work1.png";
import Work2 from "../../../../assets/work2.png";
import Work3 from "../../../../assets/work3.png";
import Work4 from "../../../../assets/work4.png";
import Work5 from "../../../../assets/work5.png";
import Work6 from "../../../../assets/work6.png";
import Work7 from "../../../../assets/work7.png";

const HowItWorks = () => {
  return (
    <div className={design.HowItWorks_container}>
      <h1 data-aos="fade-up" data-aos-duration="1000">
        How It Works
      </h1>
      <p
        style={{ marginBottom: "100px" }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        We manage and recycle your waste in these simple steps.
      </p>
      <div className={design.HowItWorks_cards}>
        <div
          className={design.HowItWorks_card_item}
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <img src={Work1} alt="" />
          <h3>Register</h3>
          <p>
            Create an account with us to take advantage of our services and
            rewards program.
          </p>
        </div>
        <div
          className={design.HowItWorks_card_item}
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <img src={Work2} alt="" />
          <h3>Dispose</h3>
          <p>
            Log in with your unique ID and dispose your plastics at any of our
            on-site bins to get your USDC.
          </p>
        </div>
        <div
          className={design.HowItWorks_card_item}
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <img src={Work3} alt="" />
          <h3>AI-Based Recognition</h3>
          <p>
            Our AI model trained to recognize objects identifies the particular
            wastes thrown into the bin.
          </p>
        </div>
        <div
          className={design.HowItWorks_card_item}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src={Work4} alt="" />
          <h3>Automatic Sorting</h3>
          <p>
            After recognition, our automatic sorting system takes each waste to
            their appropriate sections.
          </p>
        </div>
        <div
          className={design.HowItWorks_card_item}
          data-aos="zoom-out"
          data-aos-duration="1500"
        >
          <img src={Work5} alt="" />
          <h3>Weighing Waste</h3>
          <p>
            After sorting, the weight of the waste is determined which would be
            used to determine the reward to be given to the user.
          </p>
        </div>
        <div
          className={design.HowItWorks_card_item}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src={Work6} alt="" />
          <h3>User Reward</h3>
          <p>
            Each user is awarded ****USDC for every KG of plastic waste
            disposed.
          </p>
        </div>
        <div
          className={`${design.HowItWorks_card_item} ${design.stranger}`}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src={Work7} alt="" />
          <h3>Recycle</h3>
          <p>
            Once a certain threshold is attained, our dispatch trucks comes to
            take the wastes to our recycling factory.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
