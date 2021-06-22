import React, { useState } from "react";
export default function Accordion() {

  let sections = [
    {id:1,title:"Potatoes", content:"Cultivated by aliens."},
    {id:2,title:"Onions", content:"Made of shrek"},
    {id:3,title:"Guitars", content:"My partner knows something about this."}];

  const [ expandedID, setExpandedID ] = useState(null)
  const [ currentIndex, setCurrentIndex ] = useState(null)

  const populateList = () => {
    return sections.map(({id, title, content}, index) => (
        <li key={id}>
          <button onClick={() => setExpandedID(id === expandedID ? null : id)}>
            {title} {/* posts */}
          </button>
          { expandedID === id && <p>{content}</p> } {/* comments */}
        </li>
    ));
  }

  const populateIndexList = () => {
    return sections.map(({title, content}, index) => (
        <li key={index}>
          <button onClick={() => setCurrentIndex(index === currentIndex ? null : index)}>
            {title}
          </button>
          { currentIndex === index && <p>{content}</p> }
        </li>
    ));
  }
    
  // return <ul>{populateList()}</ul>
  return <ul>{populateIndexList()}</ul>
}
