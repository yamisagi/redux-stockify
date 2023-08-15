import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import stockReducer from '../features/stockSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    stock: stockReducer,
  },
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
