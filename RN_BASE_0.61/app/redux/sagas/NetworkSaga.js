import { put, takeEvery, call } from "redux-saga/effects";
import { AsyncStorage } from "react-native";
import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_ROOM,
  GET_ROOM_SUCCESS,
  GET_ROOM_FAIL
} from "../actions/type";

import * as API from "../../constants/Api";

export function* getUserInfor(payload) {
  try {
    const response = yield call(API.requestLogin, payload);
    yield put({ type: GET_USER_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_USER_FAIL, payload: err });
  }
}

export function* getRoomChat(payload) {
  try {
    const response = yield call(API.requestRoomChat, payload);
    yield put({ type: GET_ROOM_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: GET_ROOM_FAIL, payload: error });
  }
}
export const watchGetUser = takeEvery(GET_USER, getUserInfor);
export const watchRoom = takeEvery(GET_ROOM, getRoomChat);
