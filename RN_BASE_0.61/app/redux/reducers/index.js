import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import RoomReducer from "./RoomReducer"
import { RESET } from "../actions/type";


 appReducer= combineReducers({
  userReducer: UserReducer,
  roomReducer: RoomReducer,
});

const initialState = appReducer({}, {})

export default  rootReducer = (state, action) => {
  if (action.type === RESET) {
    state = initialState
  }

  return appReducer(state, action)
}
