import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Accordion from "./drills/Accordion";
import Bomb from "./drills/Bomb";
import HelloWorld from "./drills/HelloWorld";
import RouletteGun from "./drills/RouletteGun";
import Tabs from './drills/Tabs'
let Sections = [
{id:1,title:"Potatoes", content:"Cultivated by aliens."},
{id:2,title:"Onions", content:"Made of shrek"},
{id:3,title:"Guitars", content:"My partner knows something about this."}];





ReactDOM.render(
  <React.StrictMode>
    <Accordion Sections={Sections}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
