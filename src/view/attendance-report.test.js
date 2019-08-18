import React from 'react';
import AttendanceReport from './attendance-report';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('Attendance Report Tests Component', function () {

  it('Should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AttendanceReport />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  test('Should Match Snapshot', () => {
    const component = renderer.create(
      <AttendanceReport />,
    );
    
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


})