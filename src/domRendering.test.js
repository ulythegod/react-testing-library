import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, configure } from 'enzyme';

import Hello from './hello';

configure({adapter: new Adapter()});
describe('<Hello />', () => {
    it('allows to set up props', () => {
        const wrapper = mount(<Hello name="Jacob" />);
        expect(wrapper.props().name).toBe("Jacob");
        wrapper.setProps({name: "Sierra"});
        expect(wrapper.props().name).toBe("Sierra");
    });
});