import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal';
import ModalBox from '../Components/Modal.js'



let customStyles = {
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


export default class Navbar extends React.Component{
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
        <div>
   <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top" id="navSec">
      <div className="container">
        <p className="navbar-brand"id="navText1">Octavius</p>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto" >
            <li className="nav-item">
              <a className="nav-link"  id="navList1"href="#headSec">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="navList3" href="#projectsSec">Projects</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" id="navList4" onClick={this.openModal}>Contact</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" id="navList2"></a>
            </li> 
          </ul>
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
        </div>
      </div>
    </nav>
        </div>
      )
    }
}
