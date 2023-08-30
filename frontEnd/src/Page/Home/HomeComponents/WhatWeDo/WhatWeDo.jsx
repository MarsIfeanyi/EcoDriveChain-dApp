import design from "./style.module.css";
import Card1 from "../../../../assets/card1.png";
import Card2 from "../../../../assets/card2.png";
import Card3 from "../../../../assets/card3.png";

const WhatWeDo = () => {
  return (
    <div className={design.WhatWeDo_container}>
      <h1 data-aos="fade-up" data-aos-duration="1000">
        What We Do
      </h1>
      <p
        style={{ marginBottom: "100px", lineHeight: "35px" }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        At ECOCHAIN, we are passionate about creating a cleaner and greener
        world for everyone. We believe that every little effort can make a big
        impact, and that&apos;s why we&apos;ve made it our mission to
        incentivize people to recycle their belongings in a fun and rewarding
        way. We&apos;re a waste management company that promotes sustainability
        by providing efficient waste disposal solutions for individuals and
        businesses. Our innovative rewards program incentivize users when they
        dispose of their plastic waste with us by offering USDC as a reward.
        Here&apos;s how it works: when you bring your old or unwanted items to
        us, we&apos;ll sort and recycle them responsibly. But we won&apos;t just
        stop there. We&apos;ll also reward you for your efforts! Every time you
        recycle with us, you&apos;ll earn points that can be redeemed for cool
        rewards and discounts. Plus, you&apos;ll get the satisfaction of knowing
        that you&apos;re doing your part to reduce waste and help the
        environment.
      </p>
      <div className={design.WhatWeDo_cards}>
        <div
          className={design.WhatWeDo_card_item}
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          <img src={Card1} alt="" />
          <h3>Ensure Sustainable and clean Environment</h3>
          <p>
            Our innovative solutions for waste disposal ensure a cleaner and
            more sustainable future for generations to come.
          </p>
        </div>
        <div
          className={design.WhatWeDo_card_item}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src={Card2} alt="" />
          <h3>Recycling</h3>
          <p>
            Our innovative recycling programs ensure that plastic waste is
            repurposed and reused, contributing to a cleaner and more
            sustainable future.
          </p>
        </div>
        <div
          className={design.WhatWeDo_card_item}
          data-aos="flip-right"
          data-aos-duration="1000"
        >
          <img src={Card3} alt="" />
          <h3>Unmatched Reward System</h3>
          <p>
            Our rewards program incentivizes users to dispose of their waste
            correctly, promoting sustainable waste disposal practices and
            reducing the amount of waste that ends up in landfills.
          </p>
        </div>
      </div>
      <div id="how-it-works"></div>
    </div>
  );
};

export default WhatWeDo;
