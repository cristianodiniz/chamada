import React from 'react';
import ParticipantList from './participant-list';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('Participant List Tests Component', function () {

  it('Should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ParticipantList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  test('Should Match Snapshot', () => {
    const component = renderer.create(
      <ParticipantList />,
    );
    
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


})