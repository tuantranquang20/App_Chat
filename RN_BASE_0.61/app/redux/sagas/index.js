import { watchGetUser, watchRoom } from "./NetworkSaga";

export default function* rootSaga() {
  yield watchGetUser;
  yield watchRoom;
}
