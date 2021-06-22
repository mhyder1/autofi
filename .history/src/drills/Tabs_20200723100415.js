import React from "react";

class Tabs extends React.Component {
    static defaultProps = { tabs: [] };

    renderButtons() {
        return this.props.tabs.map((tab, index) => (
            <button key={index}>
              {tab.name}
            </button>
        ))
    }

    renderContent() {
        const currentTab = this.props.tabs[0]
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }

    render() {
        return (
            <div>
              {this.renderButtons()}
              {this.props.tabs.length && this.renderContent()}
            </div>
          )
    }
}

export default Tabs;