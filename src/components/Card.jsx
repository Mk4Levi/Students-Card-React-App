//
import StudentsLogo from "./StudentsLogo";

function Card(props) {
  // console.log(props);
  // console.log(props.data);
  return (
    <div className="mk-card">
      <h1>{props.data.name}</h1>
      <p className="roll-text">
        <b>Roll:</b> {props.data.rollNo}
      </p>
      <StudentsLogo />
    </div>
  );
}

export default Card;
