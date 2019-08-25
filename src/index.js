import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./store/reducers";
import middleware from "./middleware";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const store = createStore(reducer, middleware);

// store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
  serviceWorker.unregister();
// });

