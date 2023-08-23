import PropTypes from "prop-types";
import design from "./style.module.css";
const TransactionHistory = () => {
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
    <div className={design.Transaction}>
      <h4>Transaction History</h4>

      <div className={design.Transaction_details}>
        <p>Feb 22</p>
        <p>Top up</p>
        <ColorfulPTag content="+NGN 2,000" />
      </div>
      <div className={design.Transaction_details}>
        <p>Feb 22</p>
        <p>Withdrawal</p>
        <ColorfulPTag content="-NGN 2,000" />
      </div>
    </div>
  );
};

export default TransactionHistory;
