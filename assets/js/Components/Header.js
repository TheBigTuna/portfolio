import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class Header extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
    }
    
    render(){
      return(
        <div>
        <header className="masthead d-flex">
      <div className="container text-center my-auto">
      <img className="img-fluid selfImg" src="images/self.png" width="80px" alt="" />
        <h1 className="mb-1">I'm Octavius</h1>
        <h3 className="mb-5">
        Front End Web Developer
        </h3>
        {/*<a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Contact</a>*/}
      </div>
      <div className="overlay"></div>
    </header>
        </div>
      )
    }
}
