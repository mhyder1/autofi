import React from 'react';
export default class Accordion extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {expandedID:1};
    }
    populateList(props)
    {
        if(!props.Sections)
        {
            return <li></li>;
        }
        let {Sections = []} = props;
        let listItems = Sections.map((section, index) => {
            
            
            console.log(section);
            return <li key={section.id}>
                        <button onClick={() => this.btnHandler(section.id)}>
                            {section.title}
                        </button>
                        {this.hide(section)}
                    </li>;
        })
        return listItems;
    }
    btnHandler(id)
    {
        //console.log(id);
        if(id === this.state.expandedID)
        {
            this.setState({expandedID:null});
        }
        else
        {
            this.setState({expandedID:id});
        }
        
    }
    hide(section)
    {
        if(this.state.expandedID === section.id)
        {
            return <p>{section.content}</p>;
        }

        
    }




    render()
    {
        
        return (<div>
                    <ul>
                        {this.populateList(this.props)}
                    </ul>
                    
                </div>);
    }
}