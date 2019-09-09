import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import ReactLoading from 'react-loading';


export default class Load extends React.Component{
    constructor({ type, color }){
      super();
      this.state ={name: "Octavius"};
    }
    
    render(){
      return(
        <div className="loading-dots">
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
    </div>
      )
    }
}
