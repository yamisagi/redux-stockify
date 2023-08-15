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

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getInfoSuccess, fetchFail } =
  stockSlice.actions;
export default stockSlice.reducer;
