import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";
import productReducer from "./product/product-reducers";
import storage from "reduxjs-toolkit-persist/lib/storage";

const productsPersistConfig = {
  key: "products",
  storage: storage,
};
const _persistReduser = persistReducer(productsPersistConfig, productReducer);

const store = configureStore({
  reducer: {
    products: _persistReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export default store;
