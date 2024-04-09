export const TYPE_PRODUCTS_REQUEST = "TYPE_PRODUCTS_REQUEST";
export const TYPE_PRODUCTS_RESPONSE = "TYPE_PRODUCTS_RESPONSE";

export const requestTypeProducts = () => ({ type: TYPE_PRODUCTS_REQUEST });
export const responseTypeProducts = data => ({ type: TYPE_PRODUCTS_RESPONSE, data });
