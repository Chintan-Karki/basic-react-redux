import { combineReducers } from "redux";
import courses from "./courseReducers"; //since the courseReducer exports default, the name can be set to what-ever, in this case 'courses'

const rootReducer = combineReducers({
  courses,
});

export default rootReducer;
