import React from "react";
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NameForm from './NameForm';

Enzyme.configure({ adapter: new Adapter() });

describe('NameForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NameForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('submits when button clicked', () => {
    const wrapper = shallow(<NameForm />);
    wrapper.find('button').simulate('click');
    expect(handleFormSubmit).toHaveBeenCalled()
  })
})