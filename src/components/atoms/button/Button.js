import "../../../styles/partials/_fonts.scss";
import "../button/Button.scss";

function Button(props) {
  return (
    <button className={props.className}>
      <img src={props.icon} alt={props.text} />
      <p>{props.text}</p>
    </button>
  );
}

export default Button;
