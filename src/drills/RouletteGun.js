import React from 'react';
export default class Bomb extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {count: 0, text: ""};
    }
    
    handleClick = () => {};

    tickTock = (count) => {
        if (count%2){
            this.setState({text:"Tock"});
        }else if (count >= 8){
            this.setState({text:"BOOM!!!"});
            clearInterval(this.timer);

        }else{
            this.setState({text:"Tick"});
        }
    }

    componentDidMount(){
        
        this.timer = setInterval(
            () => {
                this.tickTock(this.state.count);
                this.setState({count: this.state.count + 1})
            }, 
                1000
        )
    }
    componentWillUnmount(){
        console.log("unmounted")
        clearInterval(this.timer)
    }

    render(){
        //setInterval() { => }
        return (<div>
                    <p>{this.state.text}</p>
                </div>)
    }
}