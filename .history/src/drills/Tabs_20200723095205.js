import React from "react";

class Tabs extends React.Component {
    static defaultProps = { tabs: [] };
    render() {
        const buttons = this.props.tabs.map((tab, index) => (
          <button key={index}>
            {tab.name}
          </button>
        ))
        return (
          <div>
            {buttons}
            <div className='content'>
                {currentTab.content}
            </div>
          </div>
        )
    }
}

export default Tabs;