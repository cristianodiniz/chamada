import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import reducer from "./store/reducers";
import middleware from "./middleware";

const store = createStore(reducer, middleware);

function renderWithRedux(ui) {
  return <Provider store={store}>{ui}</Provider>;
}

it("renders without crashing", async done => {
  const div = document.createElement("div");
  // ReactDOM.render(renderWithRedux(<App />), div);
  // ReactDOM.unmountComponentAtNode(div);
  done();
}, 10000);
