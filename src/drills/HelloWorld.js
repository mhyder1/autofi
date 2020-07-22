import React from 'react';
export default class HelloWorld extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {who:null};
    }
    handleClick = (Who) =>
    {
        let newState = {who:Who};
        this.setState(newState);
    }

    render()
    {
        
        return (<div>
                    <p>{this.state.who}</p>
                    <button onClick={() => this.handleClick('Bob')}>Friend</button>
                    <button onClick={() => this.handleClick('React')}>React</button>
                    <button onClick={() => this.handleClick('World')}>World</button>
                    
                </div>);
    }
}