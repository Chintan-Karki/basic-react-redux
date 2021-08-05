import { combineReducers } from "redux";
import courses from "./courseReducers"; //since the courseReducer exports default, the name can be set to what-ever, in this case 'courses'
import authors from "./authorReducer"; //since the authorReducer exports default, the name can be set to what-ever, in this case 'authors'
import apiCallsInProgress from "./apiStatusReducer"; //since the apiStatusReducer exports default, the name can be set to what-ever, in this case 'apiCallsInProgress'

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress,
});

export default rootReducer;
