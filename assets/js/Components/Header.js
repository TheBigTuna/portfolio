// This is the header component for the portfolio

import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal';


let customStyles = {
  overlay : {
    backgroundColor       : 'rgba(0,0,0,0.85)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
 Modal.setAppElement('div')

export default class Header extends React.Component{
    constructor(){
      super();
      this.state ={
        name: "Octavius"
    };
    // Toggles A react js modal
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    }

  // Sets state after opening the modal
  openModal() {
    this.setState({modalIsOpen: true});
    document.getElementById("navSec").style.display = "none";
  }
 
  afterOpenModal() {
  }
 
  // Sets state after closing the modal
  closeModal() {
    this.setState({modalIsOpen: false});
    document.getElementById("navSec").style.display = "block";

  }
    
    render(){
      return(
        <div id="headSec">
        <header className="masthead d-flex">
      <div className="container text-left my-auto">
      <img className="img-fluid selfImg" src="images/IMG_0978-min.jpg" alt="images/self.png" width="80px" alt="" />
        <h2 className="mb-1">Hello I'm Octavius</h2>
        <h1 className="mb-3">A Web Developer</h1>
        {/* Opens contact modal */}
        <button className="btn btn-light rounded btn-xl js-scroll-trigger contactBtn hidden-xs mt-3" onClick={this.openModal}>CONTACT</button>
      </div>
      {/* Contact Modal */}
      <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Contact Modal">
          
          {/* Modal Contents */}
          <h2 className="mb-2 text-center">Contact</h2>
          <h6>Phone</h6>
          <p>(313)293-9440</p>
          <h6>Email</h6>
          <p>mooreoctavius94@gmail.com</p>
          <h6>Social</h6>
           <a href ="https://www.linkedin.com/in/octavius-moore-6a84a7b0/"><i className="fa fa-linkedin social fa-lg"></i></a>
           <a href ="https://github.com/TheBigTuna"><i className="fa fa-github ml-3 social fa-lg"></i></a>
           {/* <a href ="https://www.freecodecamp.org/thebigtuna"><i className="fa fa-free-code-camp ml-3 social fa-lg"></i></a> */}
        </Modal>
    </header>
        </div>
      )
    }
}
