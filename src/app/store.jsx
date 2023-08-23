import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import stockReducer from '../features/stockSlice';
import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
import sessionStorage from 'redux-persist/lib/storage/session';
// Tip: You can use sessionStorage to persist the store in the browser's session,
// Or you can use localStorage to persist the store in the browser's local storage.
// The difference is that the session storage will be cleared when the browser tab is closed,
// I guess it is more safe to use sessionStorage to persist the store.

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
};

// We can use the persistReducer function to create a persisted version of our authReducer.
// The persisted version of the authReducer will be used in the store. (Session storage)
const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    stock: stockReducer,
  },
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',

  // Tip: You can use the getDefaultMiddleware function to get the default list of middleware,
  // And then you can add your own middleware to the list.
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
// Tip: You can use the persistStore function to create a persisted version of the store.
export const persistor = persistStore(store);

export default store;
