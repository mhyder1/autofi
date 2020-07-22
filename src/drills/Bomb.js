import React from 'react';
export default class Bomb extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {count: 0, text: "tick"};
    }
    
    handleClick = () => {};

    tickTock = (count) => {
        let stateHolder = this.state;
        if (count%2){
            stateHolder.text="tock";
            this.setState(stateHolder);
        }else if (stateHolder.count >= 8){
            stateHolder.text="BOOOM!!";
            this.setState(stateHolder);
            clearInterval(this.timer);

        }else{
            stateHolder.text="tick";
            this.setState(stateHolder);
        }
    }


    componentDidMount(){
        
        this.timer = setInterval(
            () => {
                let stateHolder = this.state;
                stateHolder.count++;
                this.tickTock(stateHolder.count);
                this.setState(stateHolder);    
            }, 
                1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        //setInterval() { => }
        return (<div>
                    <p>{this.state.text}</p>
                </div>)
    }
}