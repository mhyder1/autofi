import React, { useState } from "react";
export default function Accordion({sections = []}) {

  const [ expandedID, setExpandedID ] = useState(null)

  const populateList = () => {
    return sections.map(({id, title, content}) => (
        <li key={id}>
          <button onClick={() => setExpandedID(id)}>
            {title}
          </button>
          { expandedID === id && <p>{content}</p> }
        </li>
    ));
  }
    return <ul>{populateList()}</ul>
}
