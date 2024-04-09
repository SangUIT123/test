import { all, fork } from "redux-saga/effects";
import * as Products from "./Products";
import * as TypeProducts from "./TypeProducts";

export default function* rootSaga() {
  yield all(
    [...Object.values(TypeProducts, Products)].map(fork)
  );
}