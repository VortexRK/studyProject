import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { printCar } from "./action";
import "./mainApp.css";

function MainApp() {
  const [img, ref] = React.useState({});
  /* const dispatch = useDispatch();
  dispatch(printCar());*/
  const currentState = useSelector((state) => state);
  return (
    <div className="main">
      <h3> Cars:</h3>

      <ul className="Cars">
        {currentState.map((state) => {
          return (
            <li key={state.id} onClick={() => ref({ img: state.img, txt: state.text })}>
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

export default MainApp;
