import React from 'react';
import ShecudulesView from './schedules-view';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';


import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "../store/reducers";
import middleware from "../middleware";

const store = createStore(reducer, middleware);

function renderWithRedux(ui){
  return (<Provider store={store}>
    {ui}
  </Provider>)
}


describe('shecudules view Tests Component', function () {

  it('Should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(renderWithRedux(<ShecudulesView />), div);
    ReactDOM.unmountComponentAtNode(div);
  });


  test('Should Match Snapshot', () => {
    const component = renderer.create(
      renderWithRedux(<ShecudulesView />),
    );
    
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


})