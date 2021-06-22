import React, { useState } from "react";
export default function Accordion({sections = []}) {

  const [ expandedID, setExpandedID ] = useState(null)

  const populateList = () => {
    return sections.map(section => (
        <li key={section.id}>
          <button onClick={() => setExpandedID(section.id === expandedID ? null : section.id)} id={section.id}>
            {section.title}
          </button>
          {
            expandedID === section.id && <p>{section.content}</p>
          }
        </li>
    ));
  }

    return <ul>{populateList()}</ul>

}
