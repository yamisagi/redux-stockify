import { createSlice } from '@reduxjs/toolkit';

const stockSlice = createSlice({
  name: 'stock',

  initialState: {
    loading: false,
    error: false,
    sales: [],
    purchases: [],
    firms: [],
    categories: [],
    products: [],
    brands: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getInfoSuccess: (state, { payload }) => {
      console.log(state[payload.type]);
      state.loading = false;
      state.error = false;
      state[payload.type] = payload.data;
    },
    getProdCatBrandsSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0];
      state.categories = payload[1];
      state.brands = payload[2];
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getInfoSuccess,
  fetchFail,
  getProdCatBrandsSuccess,
} = stockSlice.actions;
export default stockSlice.reducer;
