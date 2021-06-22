import React, { useState } from "react";
export default function Accordion({sections}) {

  const [ expandedID, setExpandedID ] = useState(null)
  const populateList(props) {
    if (!sections) {
      return <li></li>;
    }
    let { sections = [] } = props;
    let listItems = sections.map((section, index) => {
      console.log(section);
      return (
        <li key={section.id}>
          <button onClick={() => this.btnHandler(section.id)} id={section.id}>
            {section.title}
          </button>
          {this.hide(section)}
        </li>
      );
    });
    return listItems;
  }

  const btnHandler(id) {
    //console.log(id);
    if (id === this.state.expandedID) {
      this.setState({ expandedID: null });
    } else {
      this.setState({ expandedID: id });
    }
  }

  const hide(section) {
    if (this.state.expandedID === section.id) {
      return <p>{section.content}</p>;
    }
  }

    return (
      <div>
        <ul>{this.populateList(this.props)}</ul>
      </div>
    );
}
