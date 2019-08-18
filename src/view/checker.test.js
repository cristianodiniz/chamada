import React from 'react';
import Checker from './checker';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('Checker Tests Component', function () {

  it('Should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Checker />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  test('Should Match Snapshot', () => {
    const component = renderer.create(
      <Checker />,
    );
    
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


})