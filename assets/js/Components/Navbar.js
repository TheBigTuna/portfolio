import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal';
import ModalBox from '../Components/Modal.js'



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


export default class Navbar extends React.Component{
    constructor(props){
      super(props);
      this.state ={
        name: "Octavius"
      };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    }
    
  openModal() {
    this.setState({modalIsOpen: true});
    document.getElementById("navSec").style.display = "none";
  }
 
  afterOpenModal() {
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
    document.getElementById("navSec").style.display = "block";
  }

    render(){
      return(
        <div>
   <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top" id="navSec">
      <div className="container">
        <img className="img-fluid rounded-circle mr-2" src="images/self.png" id="navImg" width="30px" alt="" />
        <p className="navbar-brand"id="navText1">Octavius</p>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto" >
            <li className="nav-item">
              <a className="nav-link"  id="navList1" onClick={this.props.homeScroll}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="navList3" onClick={this.props.projectScroll}>Projects</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" id="navList2" onClick={this.openModal}>About</a>
            </li> 
            <li className="nav-item">
            <a className="nav-link" id="navList4" onClick={this.openModal}></a>
            </li>
          </ul>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">
          
          <h2 className="mb-2">About Me</h2>
          <p className="modalText">
               Hello my name is Octavius Moore and, I'm a web developer based out of Detroit MI.<br />
               As a self-taught developer I welcome you to browse through my portfolio and freelance projects.<br />
               I'm always looking to collaborate and join a great team so please feel free to contact me.<br /></p>
          <h5>My Skills</h5>
                  <i className="devicon-html5-plain-wordmark colored pIcon" />
                  <i className="devicon-css3-plain-wordmark colored pIcon" />
                  <i className="devicon-bootstrap-plain-wordmark colored pIcon" />
                  <i className="devicon-javascript-plain colored pIcon" />
                  <i className="devicon-jquery-plain-wordmark colored pIcon" />
                  <i className="devicon-react-original-wordmark colored pIcon" />
                  <i className="devicon-git-plain-wordmark colored pIcon" />
                  <i className="devicon-php-plain colored pIcon"/>
                  <i className="devicon-wordpress-plain-wordmark colored pIcon" />
        </Modal>
        </div>
      </div>
    </nav>
        </div>
      )
    }
}
