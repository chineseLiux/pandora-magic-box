import { combineReducers } from "redux";
import currentUser from "./CurrentUser";
import settings from "@/store/reducers/Settings";

export default combineReducers({
  currentUser,
  settings
});
