import {
  applyMiddleware,
  createStore,
  getDefaultMiddleware,
  combineReducers
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import rootReducers from "./rootReducers";
import rootSagas from "./rootSagas";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState = {}) {
  const appReducer = combineReducers({ ...rootReducers });
  const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
  };
  const middlewares = [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
      immutableCheck: false
    }),
    sagaMiddleware
  ];

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    initialState as any,
    applyMiddleware(...middlewares)
  );

  const persistor = persistStore(store);

  sagaMiddleware.run(rootSagas);

  return { store, persistor };
}

const { store, persistor } = configureStore();
export { store, persistor };
