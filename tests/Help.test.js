/**
 * HELP COMPONENT UNIT-TEST
 * LAST CHANGE: 14/05/2020
 */
import React from 'react';
import { shallow } from 'enzyme';
import Help from '../app/components/Help';


describe('<Help />', () => {
    it('should find a class named catagories', () => {
        const wrapper = shallow(<Help />);

        expect(wrapper.find('.categories').exists()).toEqual(true);
    });


    it('should find a class named command-key', () => {
        const wrapper = shallow(<Help />);

        expect(wrapper.find('.command-key').exists()).toEqual(true);
    })
});