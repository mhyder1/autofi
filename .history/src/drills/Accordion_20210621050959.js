import React, { useState } from "react";
export default function Accordion({sections = []}) {

  const [ expandedID, setExpandedID ] = useState(null)
  const populateList = () => {

    let listItems = sections.map((section, index) => {
      return (
        <li key={section.id}>
          <button onClick={() => btnHandler(section.id)} id={section.id}>
            {section.title}
          </button>
          {hide(section)}
        </li>
      );
    });
    return listItems;
  }

  const btnHandler = (id) => {
    if (id === expandedID) {
      setExpandedID(null)
    } else {
      setExpandedID(id)
    }
  }

  const hide = (section) => {
    if (expandedID === section.id) {
      return <p>{section.content}</p>;
    }
  }

    return (
      <div>
        <ul>{populateList()}</ul>
      </div>
    );
}
