import {
  SHOW_PRODUCTS,
  SHOW_FOUNDED,
  SHOW_LOADING,
  SHOW_ERROR,
  SHOW_ALL,
} from "../action/actionType";

const initialState = {
  products: [],
  found: [],
  all: [],
  loading: false,
  errors: null,
};

function productReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_PRODUCTS:
      return { ...state, products: payload };
    case SHOW_ALL:
      return { ...state, all: payload };
    case SHOW_FOUNDED:
      return { ...state, found: payload };
    case SHOW_LOADING:
      return { ...state, loading: payload };
    case SHOW_ERROR:
      return { ...state, errors: payload };
    default:
      return state;
  }
}

export default productReducer;
