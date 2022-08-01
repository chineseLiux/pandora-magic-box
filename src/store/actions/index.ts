import {CurrentUser} from "@/store/types";
import {SET_CURRENT_USER} from "../types";

export const setCurrentUser = (currentUser: CurrentUser | null) => ({
  type: SET_CURRENT_USER,
  currentUser
})
