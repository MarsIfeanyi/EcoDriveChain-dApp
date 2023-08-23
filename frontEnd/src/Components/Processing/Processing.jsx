import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";
import design from "./style.module.css";

const Processing = ({ content }) => {
  return (
    <div className={design.Processing}>
      <CircularProgress size={50} style={{ color: "#8BC34A" }} />
      <p>
        {content}
        {/* {recycledData}... */}
      </p>
    </div>
  );
};

Processing.propTypes = {
  content: PropTypes.object.isRequired,
  recycledData: PropTypes.func.isRequired,
};

export default Processing;
