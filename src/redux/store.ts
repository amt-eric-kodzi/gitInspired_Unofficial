import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Persistor } from 'redux-persist/es/types';
import authSlice from './slice/authSlice';
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor: Persistor = persistStore(store);

export default store;
