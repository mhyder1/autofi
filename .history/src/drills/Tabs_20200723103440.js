import React from "react";

class Tabs extends React.Component {
    static defaultProps = { tabs: [] };
    state = {
        currentTabIndex: 0
      };
    renderButtons() {
        return this.props.tabs.map((tab, index) => (
            <button key={index} onClick={() => this.handleButtonClick(index)}>
              {tab.name}
            </button>
        ))
    }

    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }

    handleButtonClick = (index) => {
        // console.log('button clicked!', { index })
        this.setState({ currentTabIndex: index })
    }

    render() {
        return (
            <div>
              {this.renderButtons()}
              {!!this.props.tabs.length && this.renderContent()}
            </div>
          )
    }
}

export default Tabs;