import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const STATUSES = {
  COMPLETE: "complete",
  ERROR: "error",
  LOADING: "loading",
};
const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    data: [],
    status: STATUSES.COMPLETE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productsSlice.actions;
export default productsSlice.reducer;

//snippet for the middleware thunk.
export function fetchProducts() {
  return async function fetchProductsThunk(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));

    try {
      const fetchProdResponse = await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          return res.data;
        });
      dispatch(setProducts(fetchProdResponse));
      dispatch(setStatus(STATUSES.COMPLETE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
