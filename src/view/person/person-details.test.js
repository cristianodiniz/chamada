import React from "react";
import PersonDetails from "./person-details";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "../../store/reducers";
import middleware from "../../middleware";

const store = createStore(reducer, middleware);

function renderWithRedux(ui) {
  return <Provider store={store}>{ui}</Provider>;
}

describe("Person Details Tests Component", function() {
  it("Should render without crashing", async done => {
    const div = document.createElement("div");
    ReactDOM.render(renderWithRedux(<PersonDetails />), div);
    ReactDOM.unmountComponentAtNode(div);
    done();
  }, 10000);

  test("Should Match Snapshot", async done => {
    const component = renderer.create(renderWithRedux(<PersonDetails />));

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    done();
  }, 10000);
});
