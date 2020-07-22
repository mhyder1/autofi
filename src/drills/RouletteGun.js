import React from 'react';
export default class RouletteGun extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {chamber:null, spinningTheChamber:false};
    }
    
    clickHandle()
    {
        this.setState({spinningTheChamber:true});
        
        setTimeout(() => {
            this.setState({spinningTheChamber:false});
            this.setState({chamber: Math.ceil(Math.random()*8)});
            
        }, 2000);
    }
    Roulette(props)
    {
        console.log(this.state.chamber);
        if(this.state.spinningTheChamber)
        {
            return "spinning the chamber and pulling the trigger!";
        }
        else if(!this.state.spinningTheChamber && this.state.chamber === props.bulletInChamber)
        {
            return "BANG!!";
        }
        else if(this.state.chamber === null)
        {
            return "";
        }
        else
        {
            return "Safe.. phew.";
        }
    }    

    componentDidMount(){
        
        
    }
    componentWillUnmount(){
        console.log("unmounted")
        clearInterval(this.timer)
    }

    render(){
        //setInterval() { => }
        console.log(this.state.spinningTheChamber);
        return (<div>
                    <p>{this.Roulette(this.props)}</p>
                    <button onClick={() => this.clickHandle()}>Pull Trigger</button>
                </div>)
    }
}