import React from 'react';
import SearchAppBar from './search-app-bar';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('Search App Bar Tests Component', function () {

  it('Should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchAppBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  test('Should Match Snapshot', () => {
    const component = renderer.create(
      <SearchAppBar />,
    );
    
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


})