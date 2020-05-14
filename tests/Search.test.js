/**
 * SEARCH UNIT-TEST
 * LAST CHANGE: 14/05/2020
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../app/components/Search';


describe('<Search searchUnmount={mockFn} />', () => {
    it('Search should be mounted', () => {
        const mockFn = () => {
            return true;
        };
        const wrapper = shallow(<Search searchUnmount={mockFn} />);

        expect(wrapper.find('#search-input').exists()).toEqual(true);
    });

    it('Should contain a search context of Navigating to', () => {
        const mockFn = () => {
            return true;
        };
        const wrapper = shallow(<Search searchUnmount={mockFn} />);

        wrapper.find('#search-input').simulate('change', { preventDefault: jest.fn(), target: { value: 'g/' } });

        expect(wrapper.find('#search-context').text()).toContain('Navigating to')
    });

    it('Should contain a search context of Searching', () => {
        const mockFn = () => {
            return true;
        };
        const wrapper = shallow(<Search searchUnmount={mockFn} />);

        wrapper.find('#search-input').simulate('change', { preventDefault: jest.fn(), target: { value: 'g:' } });

        expect(wrapper.find('#search-context').text()).toContain('Searching')
    });
});
