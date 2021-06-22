import React, { useState } from "react";
export default function Accordion({sections = []}) {

  const [ expandedID, setExpandedID ] = useState(null)
  const populateList = () => {

    return sections.map((section, index) => {
      return (
        <li key={section.id}>
          <button onClick={() => setExpandedID(id === expandedID ? null : id)} id={section.id}>
            {section.title}
          </button>
          {/* {hide(section)} */}
          {
            expandedID === section.id && <p>{section.content}</p>
          }
        </li>
      );
    });
  }

  const btnHandler = (id) => {
      setExpandedID(id === expandedID ? null : id)
  }

  // const hide = (section) => {
  //   if (expandedID === section.id) {
  //     return <p>{section.content}</p>;
  //   }
  // }

    return (
      <div>
        <ul>{populateList()}</ul>
      </div>
    );
}
