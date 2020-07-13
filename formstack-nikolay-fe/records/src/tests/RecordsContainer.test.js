import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {RecordsContainer} from '../containers/Records';
import { Spinner, Alert, Card } from 'react-bootstrap';
import Record from '../components/Record/Record';

configure({ adapter: new Adapter() });

describe('<Records/>', () => {

    it('should render spinner when data is loading', () => {

        const props = {
            isLoading: true,
            loadItems: () => {},
            user: {
                username: 'test'
            }
        }

        const wrapper = shallow(<RecordsContainer {...props} />);
        expect(wrapper.find(Spinner)).toHaveLength(1);
    });

    it('should render alert when data there are no records', () => {

        const props = {
            isLoading: false,
            records: null,
            loadItems: () => {},
            user: {
                username: 'test'
            }
        }

        const wrapper = shallow(<RecordsContainer {...props} />);
        expect(wrapper.find(Alert)).toHaveLength(1);
    });

    it('should render records when data is present', () => {

        const props = {
            isLoading: false,
            records: [{
                id: '1',
                album: 'test album',
                tracks: []
            }],
            loadItems: () => {},
            user: {
                username: 'test'
            }
        }

        const wrapper = shallow(<RecordsContainer {...props} />);
        expect(wrapper.find(Record)).toHaveLength(1);
    });

});