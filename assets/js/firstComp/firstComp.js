import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header.js'
import Projects from '../Components/Projects.js'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Octavius'
    }
  }

  navScroll() {
    let posTop = window.scrollTo(0,0);
    document.addEventListener("scroll", () => {
    let navSec = document.getElementById('navSec');
    let navMobile = document.getElementById('navMobile');
    let navText1 = document.getElementById('navText1');
    let pos = pageYOffset;
    let navList1 = document.getElementById('navList1');
    let navList2 = document.getElementById('navList2');
    let navList3 = document.getElementById('navList3');
    let navList4 = document.getElementById('navList4');

     if(pos < 100){
      navSec.style.backgroundColor="#0575e6";
      navSec.style.borderBottom = "none";
      navText1.style.color="white";
      navList1.style.color="white";
      navList2.style.color="white";
      navList3.style.color="white";
      navList4.style.color="white";
     }
     else{
      navSec.style.backgroundColor="white";
      navSec.style.borderBottom = ".5px solid rgba(0,0,0,0.6)";
      navMobile.style.backgroundColor="#0575e6";
      navText1.style.color="black";
      navList1.style.color="black";
      navList2.style.color="black";
      navList3.style.color="black";
      navList4.style.color="black";

     }
    });
  }
    
  render () {
    return (
      <div onScroll={this.navScroll()}>
      <Navbar />
      <Header />
      <Projects />
      </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
