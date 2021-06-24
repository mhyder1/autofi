import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './Posts';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme';

describe(`Posts Component`, () => {    
    it('Smoke test',() =>{
        const div = document.createElement('div');
        ReactDOM.render(<Posts/>,div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it("Returns empty list item, if nothing passed.",() => {
        const wrapper = shallow(<Posts />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})
