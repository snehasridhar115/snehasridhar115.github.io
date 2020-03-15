import React from 'react';
import { shallow } from 'enzyme';
import login from './index'
import Login from './Login';
describe('Test case for testing login',() =>{
    let wrapper;
    test('username check',()=>
    {
        wrapper = shallow(<Login/>);
        wrapper.find('input[type="text"]').simulate('change', {target: {name: 'UserName', value: 'sneha'}});
        expect(wrapper.state('UserName')).toEqual('sneha');
    })
    it('password check',()=>{
        wrapper = shallow(<Login/>);
        wrapper.find('input[type="password"]').simulate('change', {target: {name: 'Password', value: 'sneha'}});
        expect(wrapper.state('Password')).toEqual('sneha');
    })
    it('login check with right data',()=>{
        wrapper = shallow(<Login/>);
        wrapper.find('input[type="text"]').simulate('change', {target: {name: 'UserName', value: 'sneha'}});
        wrapper.find('input[type="password"]').simulate('change', {target: {name: 'Password', value: 'sneha'}});
        wrapper.find('button').simulate('click');
        expect(wrapper.state('isLoggedin')).toBe(true);
    })
    it('login check with wrong data',()=>{
        wrapper = shallow(<Login/>);
        wrapper.find('input[type="text"]').simulate('change', {target: {name: 'UserName', value: 'sneha'}});
        wrapper.find('input[type="password"]').simulate('change', {target: {name: 'Password', value: 'aaaa'}});
        wrapper.find('button').simulate('click');
        expect(wrapper.state('isLoggedin')).toBe(false);
    })
})