import { combineReducers } from "redux";
import cars from "../Components/reduxTrainingWithoutHooks/reducers/cars";
import auth from "./auth";

const allReducers = combineReducers({
  cars: cars,
  auth: auth,
});

export default allReducers;
