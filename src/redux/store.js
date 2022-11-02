import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactReducer } from './contactSlice';
import { authReducer } from './auth';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// const persistConfig = {
//   key: 'root',
//   storage,
// };

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const persistedContactReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    // contacts: persistedContactReducer,
    contacts: contactReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
