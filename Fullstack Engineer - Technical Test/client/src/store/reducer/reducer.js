import { SHOW_PRODUCTS, SHOW_LOADING, SHOW_ERROR } from "../action/actionType";

const initialState = {
  products: [],
  loading: false,
  errors: null,
};

function productReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_PRODUCTS:
      return { ...state, products: payload };
    case SHOW_LOADING:
      return { ...state, loading: payload };
    case SHOW_ERROR:
      return { ...state, errors: payload };
    default:
      return state;
  }
}

export default productReducer;
