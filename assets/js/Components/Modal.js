import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal';


export default class ModalBox extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
    }
    
    render(){
      return(
        <div>
        <div id="modalSec">
        <div className="container">
      </div>
       </div>
        </div>
      )
    }
}
