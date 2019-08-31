import React from "react";
import PictureSelector from "./picture-selector";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";


describe("Picture Selector Tests Component", function() {
  it("Should render without crashing", async done => {
    const div = document.createElement("div");
    ReactDOM.render(<PictureSelector />, div);
    ReactDOM.unmountComponentAtNode(div);
    done();
  }, 10000);

  test("Should Match Snapshot", async done => {
    const component = renderer.create(<PictureSelector />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    done();
  }, 10000);
});
