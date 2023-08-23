import PropTypes from "prop-types";
import design from "./style.module.css";
const Button = (props) => {
  return (
    <button className={design.btn} style={props.style} onClick={props.onClick}>
      {props.content}
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default Button;
