import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NavbarComponent } from '../components/navbar';

configure({ adapter: new Adapter() });

describe('<Navbar/>', () => {

    it('should render login link when user is not authenticated', () => {

        const props = {
            user: {
                isAuthenticated: false
            }
        }

        const wrapper = shallow(<NavbarComponent {...props} />);
        expect(wrapper.find('span.login-lnk')).toHaveLength(1);
    });

    it('should render add record link when user is authenticated', () => {

        const props = {
            user: {
                isAuthenticated: true
            }
        }

        const wrapper = shallow(<NavbarComponent {...props} />);
        expect(wrapper.find('span.add-rec-lnk')).toHaveLength(1);

    });

    it('should not render login link when user is authenticated', () => {

        const props = {
            user: {
                isAuthenticated: true
            }
        }

        const wrapper = shallow(<NavbarComponent {...props} />);
        expect(wrapper.find('span.login-lnk')).toHaveLength(0);

    });
});