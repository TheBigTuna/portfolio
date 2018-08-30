import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class Header extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
    }
    
    render(){
      return(
        <div id="headSec">
        <header className="masthead d-flex">
      <div className="container text-left my-auto">
      <img className="img-fluid rounded-circle" src="images/self.png" width="80px" alt="" />
        <h1 className="mb-1">I'm Octavius</h1>
        <h3 className="mb-3">
        Front End Web Developer
        </h3>
        {/*<a className="btn btn-light rounded btn-xl js-scroll-trigger contactBtn hidden-xs" href="#about">CONTACT</a>*/}
      </div>
      <div className="overlay"></div>
    </header>
        </div>
      )
    }
}
