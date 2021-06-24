import React from 'react';
import ReactDOM from 'react-dom';
import Comments from './Comments';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme';

describe(`Comments Component`, () => {    
    it('Smoke test',() =>{
        const id = 1
        const div = document.createElement('div');
        ReactDOM.render(<Comments id={id} />,div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it("Returns empty list item, if nothing passed.",() => {
        const id = 1
        const wrapper = shallow(<Comments id={id} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})