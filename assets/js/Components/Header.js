import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal';


let customStyles = {
  overlay : {
    backgroundColor       : 'none'
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
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
    
    render(){
      return(
        <div id="headSec">
        <header className="masthead d-flex">
      <div className="container text-left my-auto">
      <img className="img-fluid rounded-circle" src="images/self.png" width="80px" alt="" />
        <h1 className="mb-1">I'm Octavius</h1>
        <h3 className="mb-3">Front End Web Developer</h3>
        <button className="btn btn-light rounded btn-xl js-scroll-trigger contactBtn hidden-xs mt-3" onClick={this.openModal}>CONTACT</button>
      </div>
      <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">
          
          <h2 className="mb-2">Contact</h2>
          <h6>Phone</h6>
          <p>(313)293-9440</p>
          <h6>Email</h6>
          <p>mooreoctavius94@gmail.com</p>
          <h6>Social</h6>
           <a href ="https://www.linkedin.com/in/octavius-moore-6a84a7b0/"><i className="fa fa-linkedin social fa-lg"></i></a>
           <a href ="https://github.com/TheBigTuna"><i className="fa fa-github ml-3 social fa-lg"></i></a>
           <a href ="https://www.freecodecamp.org/thebigtuna"><i className="fa fa-free-code-camp ml-3 social fa-lg"></i></a>
        </Modal>
    </header>
        </div>
      )
    }
}
