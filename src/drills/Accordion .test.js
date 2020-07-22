import renderer from 'react-test-renderer';
import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';

let Sections = [
    {id:1,title:"Potatoes", content:"Cultivated by aliens."},
    {id:2,title:"Onions", content:"Made of shrek"},
    {id:3,title:"Guitars", content:"My partner knows something about this."}];

test('Smoke test',() =>{
    let div = document.createElement('div');
    ReactDOM.render(<Accordion/>,div);
    ReactDOM.unmountComponentAtNode(div);

});

test("Returns empty list item, if nothing passed.",() =>{
    let tree = renderer.create(<Accordion/>).toJSON();
    expect(tree).toMatchSnapshot();

});
test("Renders with no default content expanded.",() =>{
    let tree = renderer.create(<Accordion Sections={Sections}/>).toJSON();
    
    expect(tree).toMatchSnapshot();

});
