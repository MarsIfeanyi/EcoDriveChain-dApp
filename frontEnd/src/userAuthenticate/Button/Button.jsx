import PropTypes from "prop-types";
import styles from "./button.module.css";

function Button({ text, style, img, handleclick }) {
  return (
    <button
      onClick={handleclick}
      className={styles["g-button-style"]}
      style={style}
    >
      <img src={img} alt="" />
      {text}
    </button>
  );
}

Button.propTypes = {
  handleclick: PropTypes.func,
  text: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  img: PropTypes.string,
};

export default Button;
