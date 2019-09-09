import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class Footer extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
    }
    
    render(){
      return(
        <div>
        <footer className="py-5 mt-5" id="footerSec">
      <div className="container">
        <p className="m-0 text-center text-white footerText">2018 @octaviusmoore.com</p>
      </div>
        </footer>
        </div>
      )
    }
}
