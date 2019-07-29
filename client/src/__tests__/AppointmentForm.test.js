import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import {BrowserRouter as Router} from 'react-router-dom';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
 shallow(<AppointmentForm />);
});

it('toggles form submit button disabled status based on validity', () => {
  const wrapper = mount(
    <Router>
      <AppointmentForm />
    </Router>
  )
  expect(wrapper.find('.submit-button').props().disabled).toEqual(true);

  wrapper.find('[name="title"]').simulate('change', {target: {value: 'A valid title', name: 'title'}});
  wrapper.find('.rdtNext span').at(0).simulate('click');
  wrapper.find('.rdtDay').at(10).simulate('click');
  expect(wrapper.find('.submit-button').props().disabled).toEqual(false);
});