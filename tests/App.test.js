/**
 * APP UNIT-TEST
 * LAST CHANGE: 14/05/2020
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../app/components/App';
import Time from '../app/components/Time';
import Help from '../app/components/Help';
import Search from '../app/components/Search';


describe('<App />', () => {
    it('Time component should be mounted', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.find(Time)).toHaveLength(1);
    });

    it('Time component should be UNMOUNTED, Help mounted', () => {
        const map = {};
        document.addEventListener = jest.fn((event, cb) => {
            map[event] = cb;
        });
        const spy = jest.spyOn(App.prototype, 'handleKeyPress')
        const wrapper = mount(<App />);
        map.keydown({ key: '?' });

        expect(spy).toHaveBeenCalled();
        wrapper.update();

        expect(wrapper.find(Time)).toHaveLength(0);
        expect(wrapper.find(Help)).toHaveLength(1);
    });

    it('Time component should be UNMOUNTED, Search mounted', () => {
        const map = {};
        document.addEventListener = jest.fn((event, cb) => {
            map[event] = cb;
        });
        const spy = jest.spyOn(App.prototype, 'handleKeyPress')
        const wrapper = mount(<App />);
        map.keydown({ key: 'g' });

        expect(spy).toHaveBeenCalled();
        wrapper.update();

        expect(wrapper.find(Time)).toHaveLength(0);
        expect(wrapper.find(Search)).toHaveLength(1);
    });
});