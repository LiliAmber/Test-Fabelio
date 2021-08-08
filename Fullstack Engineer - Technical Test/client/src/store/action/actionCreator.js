import axios from "axios";
import { SHOW_PRODUCTS, SHOW_LOADING, SHOW_ERROR } from "./actionType";

let baseUrl = "http://localhost:3000";

export function setProducts(payload) {
  return {
    type: SHOW_PRODUCTS,
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: SHOW_LOADING,
    payload,
  };
}

export function setError(payload) {
  return {
    type: SHOW_ERROR,
    payload,
  };
}

export function fetchProduct() {
  return async (dispatch) => {
    try {
      let { data } = await axios({
        method: "GET",
        url: `${baseUrl}/products`,
      });
      console.log(data);
      dispatch(setProducts(data));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
}
