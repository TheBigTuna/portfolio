import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import ReactLoading from 'react-loading'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header.js'
import About from '../Components/About.js'
import Projects from '../Components/Projects.js'
import Footer from '../Components/Footer.js'
import ModalBox from '../Components/Modal.js'
import Load from '../Components/Loading.js'




class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Octavius',
      isLoading: true,
    }
  }

  navScroll() {
    let posTop = window.scrollTo(0,0);
    document.addEventListener("scroll", () => {
    let navSec = document.getElementById('navSec');
    let navText1 = document.getElementById('navText1');
    let pos = pageYOffset;
    let navImg = document.getElementById('navImg');
    let navList1 = document.getElementById('navList1');
    let navList2 = document.getElementById('navList2');
    let navList3 = document.getElementById('navList3');
    let navList4 = document.getElementById('navList4');
     if(pos < 220){
      navSec.style.backgroundColor="#0575e6";
      navSec.style.borderBottom = "none";
      navImg.style.display="none";
      navText1.style.color="white";
      navList1.style.color="white";
      navList2.style.color="white";
      navList3.style.color="white";
      navList4.style.color="white";
      navSec.style.boxShadow="none";
     }
     else{
      navSec.style.backgroundColor="white";
      navSec.style.borderBottom = ".5px solid rgba(0,0,0,0.6)";
      navImg.style.display="block";
      navText1.style.color="black";
      navList1.style.color="black";
      navList2.style.color="black";
      navList3.style.color="black";
      navList4.style.color="black";
      navSec.style.boxShadow=" 0 3px 2px -2px gray";

     }
    });
  }
  homeScroll() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  projectScroll() {
   window.scrollTo({
     top: 585,
     behavior: "smooth"
   });
  }

    showPortfolio() {
            window.addEventListener("load", function(event) {
             let loadContainer = document.getElementsByClassName("loadContainer")[0];
             let portfolioContainer = document.getElementsByClassName("portfolioContainer")[0];
             loadContainer.classList.remove('block');
             loadContainer.classList.add('none');
             portfolioContainer.classList.remove('none');
             portfolioContainer.classList.add('block');
        });
    };
  render () {
    return (
      <div>
      {this.showPortfolio()}
      <div className="loadContainer block">
      <Load  />
      </div >
      <div className="portfolioContainer none">
      <div onScroll={this.navScroll()}>
      <Navbar
       homeScroll={this.homeScroll} 
       projectScroll={this.projectScroll} />
      <Header /> 
      <About />
      <Projects />
      <Footer />
      </div>
      </div>
      </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
