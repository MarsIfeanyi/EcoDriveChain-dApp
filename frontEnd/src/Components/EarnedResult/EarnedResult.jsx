import PropTypes from "prop-types";
import design from "./style.module.css";

const EarnedResults = ({ result }) => {
  return (
    <div className={design.Processing}>
      <p>{result}</p>
    </div>
  );
};

EarnedResults.propTypes = {
  result: PropTypes.object.isRequired,
};

export default EarnedResults;
