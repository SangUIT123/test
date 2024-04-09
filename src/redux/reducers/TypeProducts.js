import { TYPE_PRODUCTS_RESPONSE } from "../actions/TypeProducts";

export default (state = [], { type, data }) => {
  switch (type) {
    case TYPE_PRODUCTS_RESPONSE:
      return data;
    default:
      return state;
  }
};
