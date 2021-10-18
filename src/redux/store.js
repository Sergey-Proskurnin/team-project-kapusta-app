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

import { authReducer } from 'redux/auth';
import { wallet } from 'redux/transactions';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token', 'refreshToken'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    wallet,
  },
  middleware,
  devTools: true,
});

const persistor = persistStore(store);
export { store, persistor };
