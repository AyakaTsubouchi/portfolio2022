import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from "./reducer";
import storage from "redux-persist/es/storage";

const persistConfig = {
  key: "adminTool",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: [
    "settings",
  ],
};



const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export const persistor = persistStore(store);
