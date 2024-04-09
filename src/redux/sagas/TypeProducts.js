import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { TYPE_PRODUCTS_REQUEST, responseTypeProducts } from "../actions/TypeProducts";
import getTypeProducts  from "../../api/getTypeProducts";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getData(action) {
  try {
    // do api call
    const result = yield call(getTypeProducts);
    yield put(responseTypeProducts(result.data));
  } catch (e) {
    console.log(e);
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeLatest(TYPE_PRODUCTS_REQUEST, getData);
}
