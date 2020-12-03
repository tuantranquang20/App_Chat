import { GET_USER, GET_ROOM, GET_ROOM_SUCCESS, GET_ROOM_FAIL } from "./type";

export const getUserInfoAction = () => ({
  type: GET_USER,
  payload: {}
});

export const getRoomAction = () => ({
  type: GET_ROOM,
  payload: {}
});
export const getRoomSuccessAction = () => ({
  type: GET_ROOM_SUCCESS,
  payload: {}
});
export const getRoomFailAction = () => ({
  type: GET_ROOM_FAIL,
  payload: {}
});
