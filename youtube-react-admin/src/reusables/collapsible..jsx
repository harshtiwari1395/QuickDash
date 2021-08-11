import React, { Component } from 'react';
import './collapseStyle.css'; // Tell webpack that Button.js uses
import SimpleList from './materialList';
import { FaArrowAltCircleDown } from "react-icons/fa";

class Collapsible extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e){
        this.setState({open: !this.state.open})
    }

    componentDidUpdate(){
        
    }

    render() {
      return (<div>
        <div onClick={(e)=>this.togglePanel(e)} className='header'>
        <FaArrowAltCircleDown/>
            {this.props.title}</div>
        {this.state.open ? (
            <div className='content'>
               
                {this.props.children}
            </div>
            ) : null}
      </div>);
    }
  }

class Collapse extends React.Component {
   constructor(props) {
    super(props);
    
  }
  render() {
    return  (<div style={{width: "200px", marginTop: "30px"}}>
        <Collapsible title="Device Profile">
        <SimpleList/>
          
          
        </Collapsible>
        <br/>
        <Collapsible title="Serving Network">
        <SimpleList/>
          
          
        </Collapsible>
    </div>
    )
  }
}


export default Collapse
