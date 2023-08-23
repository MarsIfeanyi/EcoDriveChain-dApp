import PropTypes from 'prop-types';
import design from "./style.module.css"

 const DashCard = (props) => {
  return (
    <div
      className={props.className}
      style={{
        borderRadius: "10px",
        display: "flex",
        alignItem: "center",
        maxHeight:"150px"
      }}
    >
      <img src={props.icons} alt="" className={design.DashCard_img} />
      <div className={design.info}>
        <p>{props.value}</p>
        <h5>{props.title}</h5>
        <h5>{props.number}</h5>
      </div>
    </div>
  );
};

DashCard.propTypes = {
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    icons: PropTypes.object.isRequired,
    className: PropTypes.object,
}


export default DashCard;