import axios from "axios";
import {
  SHOW_PRODUCTS,
  SHOW_FOUNDED,
  SHOW_LOADING,
  SHOW_ERROR,
  SHOW_ALL,
} from "./actionType";

let baseUrl = "https://testfabeliorara.herokuapp.com";

export function setProducts(payload) {
  return {
    type: SHOW_PRODUCTS,
    payload,
  };
}

export function setFound(payload) {
  return {
    type: SHOW_FOUNDED,
    payload,
  };
}

export function setAll(payload) {
  return {
    type: SHOW_ALL,
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
      // console.log(data, "<<<<fetch");
      dispatch(setProducts(data));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function fetchSearch(keyword) {
  return async (dispatch) => {
    try {
      let { data } = await axios({
        method: "POST",
        data: {
          productName: keyword.productName,
        },
        url: `${baseUrl}/products`,
      });
      console.log(data, "<<<<fetch");
      dispatch(setFound(data));
      // dispatch(fetchProduct());
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function fetchAll() {
  return async (dispatch) => {
    try {
      let { data } = await axios({
        method: "GET",
        url: `${baseUrl}/products/all`,
      });
      console.log(data, "<<<<fetchALl");
      dispatch(setAll(data));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
}
