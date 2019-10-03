import React from "react";
import AvatarFullScreen from "./avatar-full-screen";
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

describe("Avatar full screen Tests Component", function() {
  const mockPerson = {
    id: 123,
    firstName: "Jhon",
    lastName: "Due",
    avatar: "https://image.com"
  };
  const mockOpen = false

  it("Should render without crashing", async done => {
    const div = document.createElement("div");
    ReactDOM.render(renderWithRedux(<AvatarFullScreen open={mockOpen} person={mockPerson} />), div);
    ReactDOM.unmountComponentAtNode(div);
    done();
  }, 10000);

  test("Should Match Snapshot", async done => {
    const component = renderer.create(
      renderWithRedux(<AvatarFullScreen open={mockOpen} person={mockPerson} />)
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    done();
  }, 10000);
});
