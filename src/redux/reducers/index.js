import { combineReducers } from "redux";
import courses from "./courseReducers"; //since the courseReducer exports default, the name can be set to what-ever, in this case 'courses'
import authors from "./authorReducer"; //since the courseReducer exports default, the name can be set to what-ever, in this case 'courses'

const rootReducer = combineReducers({
  courses,
  authors,
});

export default rootReducer;
