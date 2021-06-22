import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme';

describe.only(`Accordion Component`, () => {
    let sections = [
        {id:1,title:"Potatoes", content:"Cultivated by aliens."},
        {id:2,title:"Onions", content:"Made of shrek"},
        {id:3,title:"Guitars", content:"My partner knows something about this."}];
    
    it('Smoke test',() =>{
        let div = document.createElement('div');
        ReactDOM.render(<Accordion/>,div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it("Returns empty list item, if nothing passed.",() => {
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it("Renders with no default content expanded.",() => {
        const wrapper = shallow(<Accordion sections={sections}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

})
