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
          {/* {hide(section)} */}
          {
            expandedID === section.id && section.content
          }
        </li>
      );
    });
    return listItems;
  }

  const btnHandler = (id) => {
      setExpandedID(id === expandedID ? null : id)
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
