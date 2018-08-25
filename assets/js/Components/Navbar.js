import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class Navbar extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
    }
    
    render(){
      return(
        <div>
   <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top" id="navSec">
      <div className="container">
        <p className="navbar-brand"id="navText1">Octavius</p>
        <button className="navbar-toggler" id="navMobile" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto" >
            <li className="nav-item">
              <a className="nav-link"  id="navList1"href="#menuSec">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" id="navList2" href="#aboutSec">About</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" id="navList3" href="#locationSec">Projects</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" id="navList4" href="#contactSec">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
      )
    }
}
