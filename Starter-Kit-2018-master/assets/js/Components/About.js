import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class About extends React.Component{
    constructor(){
      super();
      this.state ={
          name: "Octavius"
        };
    }
    
    render(){
      return(
        <div id="aboutSec">
      <div className="container text-center my-auto">
      </div>
        </div>
      )
    }
}
