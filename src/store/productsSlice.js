import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
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
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.COMPLETE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productsSlice.actions;
export default productsSlice.reducer;

// snippet for the toolkit builtin thunk
export const fetchProducts = createAsyncThunk("product/get", async () => {
  const fetchProdResponse = await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      return res.data;
    });
  return fetchProdResponse;
});

//snippet for the previous middleware thunk.
// this code snippent use only for practice
// export function fetchProducts() {
//   return async function fetchProductsThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));

//     try {
//       const fetchProdResponse = await axios
//         .get("https://fakestoreapi.com/products")
//         .then((res) => {
//           return res.data;
//         });
//       dispatch(setProducts(fetchProdResponse));
//       dispatch(setStatus(STATUSES.COMPLETE));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
