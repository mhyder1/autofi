import React, { useState } from "react";
export default function Accordion({sections = []}) {

  const [ expandedID, setExpandedID ] = useState(null)
  const [ currentIndex, setCurrentIndex ] = useState(0)

  const populateList = () => {
    return sections.map(({id, title, content}, index) => (
        <li key={id}>
          <button onClick={() => setExpandedID(id === expandedID ? null : id)}>
            {title}
          </button>
          { expandedID === id && <p>{content}</p> }
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
