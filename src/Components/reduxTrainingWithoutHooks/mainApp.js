import React from "react";
import { printCar } from "./actions/action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./mainApp.css";

function MainApp(props) {
  const [img, ref] = React.useState({});
  return (
    <div className="main">
      <h3> Cars:</h3>

      <ul className="Cars">
        {props.cars.map((state) => {
          return (
            <li
              key={state.id}
              onClick={() => ref({ img: state.img, txt: state.text })}
              onDoubleClick={() => props.printCar(state)}
            >
              {state.name}: {state.maxSpeed}
            </li>
          );
        })}
      </ul>
      <hr />
      <h3> Details: </h3>
      <img src={img.img} className="CarsIMG" />
      <p>{img.txt}</p>
    </div>
  );
}

function mapStateToProps(state) {
  return { cars: state.cars };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ printCar: printCar }, dispatch);
}
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(MainApp);
