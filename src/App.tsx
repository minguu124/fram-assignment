import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "src/states";
import AppRoutes from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
};

export default App;
