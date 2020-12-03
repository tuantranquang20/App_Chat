import { GET_ROOM, GET_ROOM_SUCCESS, GET_ROOM_FAIL } from "../actions/type";

const initialState = {
  data: {},
  isLoading: true,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ROOM: {
      return { ...state, isLoading: true };
    }
    case GET_ROOM_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload
      };
    }
    case GET_ROOM_FAIL: {
     
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
