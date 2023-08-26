import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FLOGO from "../../assets/logo.png";
import Button from "../Button/Button";
import design from "./style.module.css";




const Footer = () => {
  return (
    <div className={design.Footer_wrapper} id="contact-us">
      <div className={design.Footer_container}>
        <div className={design.Footer_col}>
          {/*<img src={FLOGO} alt="" className={design.Footer_logo} />*/}
          <p>
            Ensure Sustainable and clean Environment through proper waste
            management by incentivizing usage of plastic bottles. This will
            invariably ensure sustainable energy for all.
          </p>
          <div className={design.Footer_icons}>
            <FacebookIcon
              className={design.Footer_ico}
              style={{ fontSize: "200%" }}
            />
            <LinkedInIcon
              className={design.Footer_ico}
              style={{ fontSize: "200%" }}
            />
            <TwitterIcon
              className={design.Footer_ico}
              style={{ fontSize: "200%" }}
            />
            <InstagramIcon
              className={design.Footer_ico}
              style={{ fontSize: "200%" }}
            />
          </div>
        </div>
        <div className={design.Footer_cols}>
          <h3>EcoDriveChain</h3>
          <p>Home</p>
          <p>About</p>
          <p>How it works</p>
          <p>Contact Us</p>
        </div>
        <div className={design.Footer_cols}>
          {" "}
          <h3>Services</h3>
          <p>Waste Management</p>
          <p>Recycling</p>
          <p>Cryptocurrency</p>
        </div>
        <div className={design.Footer_cols}>
          <h3>Subscribe</h3>
          <form>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              placeholder="Email..."
              className={design.Footer_input}
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              content="Subscribe"
              style={{
                backgroundColor: "#8BC34A",
                marginLeft: "0",
                border: "none",
                marginBottom: "20px",
              }}
            />
          </form>
        </div>
      </div>
      <p className={design.Footer_bottom}>
        2023 All Copyrights are reserved EcoDriveChain
      </p>
    </div>
  );
};

export default Footer;
