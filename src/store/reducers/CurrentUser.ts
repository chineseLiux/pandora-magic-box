import {CurrentUser} from "../types";
import {SET_CURRENT_USER} from "../types";
const currentUser = (state: CurrentUser = null, {type, currentUser}: {type: string, currentUser: CurrentUser} ) => {
    switch (type) {
        case SET_CURRENT_USER:
            if (!currentUser) {
                return null;
            }
            return {
                ...currentUser
            };
        default:
            return state;
    }
}

export default currentUser;
