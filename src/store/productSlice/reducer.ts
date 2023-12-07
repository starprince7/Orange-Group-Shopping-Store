import { IProductStore } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: IProductStore = {
  products: null,
  error: "",
  authRequestStatus: "idle",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:3001/products");
    return await response.json();
  }
);

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.authRequestStatus = "loading";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      (state.authRequestStatus = "failed"),
        (state.error = action.error.message!);
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.authRequestStatus = "succeeded";
      state.products = action.payload;
    });
  },
});

export default slice.reducer;
export const selectProducts = (store: any) => store.products as IProductStore;
