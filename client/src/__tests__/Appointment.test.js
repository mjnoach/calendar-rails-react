import React from 'react';
import ReactDOM from 'react-dom';
import Appointment from '../components/Appointment';
import {BrowserRouter as Router} from 'react-router-dom';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
 shallow(<Appointment />);
});

describe('render', () => {
  it('should display the appointment title', () => {
    const appointment = mount(
      <Router>
        <Appointment appointment={{id: 1, title: 'Team standup meeting', appt_time: new Date()}} />
      </Router>
    );
    const title = <h3>Team standup meeting</h3>;
    expect(appointment.contains(title)).toEqual(true);
  })

  it('should display the appointment time', () => {
    const appointment = mount(
      <Router>
        <Appointment appointment={{id: 1, title: 'Team standup meeting', appt_time: new Date('06/12/2019 12:00:00')}} />
      </Router>
    );
    const appt_time = <p>June 12 2019, 12:00:00 pm</p>;
    expect(appointment.contains(appt_time)).toEqual(true);
  })

  it('renders appointment correctly', () => {
    const appointment = renderer.create(
      <Router>
        <Appointment appointment={{id: 1, title: 'Team standup meeting', appt_time: new Date('06/12/2019 12:00:00')}} />
      </Router>
    );
    let tree = appointment.toJSON();
    expect(tree).toMatchSnapshot();
  })
})