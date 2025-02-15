import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { persistor, store } from "./redux/store";
import App from "./App";
import "./index.css";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
