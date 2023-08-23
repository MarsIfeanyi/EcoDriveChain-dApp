import PropTypes from "prop-types";
import design from "./style.module.css";

const RecycleHistory = () => {
  function ColorfulPTag({ content }) {
    const isPositive = content.startsWith("+");

    return (
      <p style={{ color: isPositive ? "#039855" : "#D92D20" }}>{content}</p>
    );
  }
  ColorfulPTag.propTypes = {
    content: PropTypes.string.isRequired,
  };

  return (
    <div className={design.Recycle}>
      <h4>Recycle History</h4>
      <div className={`${design.Recycle_details} ${design.Recycle_details2}`}>
        <p>Feb 22</p>
        <p>20 bottles</p>

        <ColorfulPTag content="+20 USDC" />
      </div>
      <div className={`${design.Recycle_details} ${design.Recycle_details2}`}>
        <p>Feb 22</p>
        <p>Top up</p>
        <ColorfulPTag content="+20 USDC" />
      </div>
    </div>
  );
};

export default RecycleHistory;
