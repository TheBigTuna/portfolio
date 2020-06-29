import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import {Animated} from "react-animated-css";



export default class Projects extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
      this.iconDisplay = this.iconDisplay.bind(this);
      this.iconHide = this.iconHide.bind(this);
    }

    iconDisplay() { 
      let hB1 = document.getElementById('hoverBox1');  
      // let hB2 = document.getElementById('hoverBox2');  
      let hB3 = document.getElementById('hoverBox3');  
      // let hB4 = document.getElementById('hoverBox4');  
      // let hB5 = document.getElementById('hoverBox5');  
      let hB6 = document.getElementById('hoverBox6'); 
      let p1 = document.getElementById('p1');  
      let p2 = document.getElementById('p2');  
      let p3 = document.getElementById('p3');  
      // let p4 = document.getElementById('p4');  
      // let p5 = document.getElementById('p5');  
      let p6 = document.getElementById('p6'); 
      let d1 = document.getElementById('display1');
      // let d2 = document.getElementById('display2');
      let d3 = document.getElementById('display3');
      // let d4 = document.getElementById('display4');
      // let d5 = document.getElementById('display5');
      let d6 = document.getElementById('display6');

      p1.addEventListener('mouseover', () =>{hB1.style.display = 'block'; d1.setAttribute("class", "Animated flipInX");});
      // p2.addEventListener('mouseover', () =>{hB2.style.display = 'block'; d2.setAttribute("class", "Animated flipInX");});
      p3.addEventListener('mouseover', () =>{hB3.style.display = 'block'; d3.setAttribute("class", "Animated flipInX");});
      // p4.addEventListener('mouseover', () =>{hB4.style.display = 'block'; d4.setAttribute("class", "Animated flipInX");});
      // p5.addEventListener('mouseover', () =>{hB5.style.display = 'block'; d5.setAttribute("class", "Animated flipInX");});
      p6.addEventListener('mouseover', () =>{hB6.style.display = 'block'; d6.setAttribute("class", "Animated flipInX");});

    }
    iconHide() { 
      let hB1 = document.getElementById('hoverBox1');  
      // let hB2 = document.getElementById('hoverBox2');  
      let hB3 = document.getElementById('hoverBox3');  
      // let hB4 = document.getElementById('hoverBox4');  
      // let hB5 = document.getElementById('hoverBox5');  
      let hB6 = document.getElementById('hoverBox6'); 
      let p1 = document.getElementById('p1');  
      // let p2 = document.getElementById('p2');  
      let p3 = document.getElementById('p3');  
      // let p4 = document.getElementById('p4');  
      // let p5 = document.getElementById('p5');  
      let p6 = document.getElementById('p6'); 
      p1.addEventListener('mouseleave', () =>{hB1.style.display = 'none';});  
      // p2.addEventListener('mouseleave', () =>{hB2.style.display = 'none';});  
      p3.addEventListener('mouseleave', () =>{hB3.style.display = 'none';});  
      // p4.addEventListener('mouseleave', () =>{hB4.style.display = 'none';});  
      // p5.addEventListener('mouseleave', () =>{hB5.style.display = 'none';}); 
      p6.addEventListener('mouseleave', () =>{hB6.style.display = 'none';}); 
    }
    
    render(){
      return(
        <div>
      <div className="container">
        <div className="content-section-heading text-center">
          <h2 className="mb-5 mt-3" id="projectsSec">PROJECTS</h2>    
        </div>
        <div className="row no-gutters">
        <div className="col-lg-6">
            <a className="portfolio-item" id="p1" href="https://animerooms.com" target="_blank" onMouseEnter={this.iconDisplay}  onMouseLeave={this.iconHide}>
             <div className="hoverBox" id="hoverBox1">
               <h4 id="display1">Display<i className="fa fa-arrow-right" aria-hidden="true"></i></h4>
             </div>
             <img className="img-fluid projectImg" src="images/animerooms.png" alt="images/animerooms.png" height="300px" alt="" />
            </a>
            <span className="caption">
                <span className="caption-content">
                  <h2 className="pName mt-1">animerooms.com</h2>
                  <p className="mb-0">
                  <i className="devicon-html5-plain-wordmark colored pIcon" />
                  <i className="devicon-css3-plain-wordmark colored pIcon" />
                  <i className="devicon-javascript-plain colored pIcon" />
                  <i className="devicon-php-plain colored pIcon"/>
                  <i className="devicon-mysql-plain-wordmark pIcon" />
                  <i className="devicon-git-plain-wordmark colored pIcon" />
                  </p>
                </span>
              </span>
          </div>
        <div className="col-lg-6">
            <a className="portfolio-item" id="p3" href="https://octaviusmoore.com/project5/index.html" target="_blank" onMouseEnter={this.iconDisplay}  onMouseLeave={this.iconHide}>
             <div className="hoverBox" id="hoverBox3">
               <h4 id="display3">Display<i className="fa fa-arrow-right" aria-hidden="true"></i></h4>
             </div>
             <img className="img-fluid projectImg" src="images/polar-min.png" alt="images/polar.png" height="300px" alt="" />
            </a>
            <span className="caption">
                <span className="caption-content">
                  <h2 className="pName mt-1">Polar Bay Website</h2>
                  <p className="mb-0">
                  <i className="devicon-html5-plain-wordmark colored pIcon" />
                  <i className="devicon-css3-plain-wordmark colored pIcon" />
                  <i className="devicon-bootstrap-plain-wordmark colored pIcon" />
                  <i className="devicon-react-original-wordmark colored pIcon" />
                  <i className="devicon-git-plain-wordmark colored pIcon" />
                  {/* <a href="https://github.com/TheBigTuna/restaurant-app" target="_blank"><button className="viewCode btn">View Code</button></a> */}
                  </p>
                </span>
              </span>
          </div>
        {/*} <div className="col-lg-6">
            <a className="portfolio-item"  id="p2" href="https://octaviusmoore.com/project8/index.html" target="_blank" onMouseEnter={this.iconDisplay}  onMouseLeave={this.iconHide}>
             <div className= "hoverBox" id="hoverBox2">
               <h4 id="display2">Display<i className="fa fa-arrow-right" aria-hidden="true"></i></h4>
             </div>
              <img className="img-fluid projectImg" src="images/T7-min.png" alt="images/T7.png" height="300px" alt="" />
            </a>
             <span className="caption">
                <span className="caption-content">
                  <h2 className="pName mt-1">Tekken 7 Frame Data Appplication</h2>
                  <p className="mb-0">
                  <i className="devicon-html5-plain-wordmark colored pIcon" />
                  <i className="devicon-css3-plain-wordmark colored pIcon" />
                  <i className="devicon-javascript-plain colored pIcon" />
                  <i className="devicon-jquery-plain-wordmark colored pIcon" />
                  <i className="devicon-git-plain-wordmark colored pIcon" />
                  <a href="https://github.com/TheBigTuna/T7-frame-data" target="_blank"><button className="viewCode btn">View Code</button></a>
                  </p>
                </span>
              </span>
          </div>*/}
             <div className="col-lg-6">
            <a className="portfolio-item" id="p6" href="https://thebigtuna.github.io/DetDigitalAgency/" target="_blank" onMouseEnter={this.iconDisplay}  onMouseLeave={this.iconHide}>
            <div className= "hoverBox" id="hoverBox6">
               <h4 id="display6">Display<i className="fa fa-arrow-right" aria-hidden="true"></i></h4>
             </div>
              <img className="img-fluid projectImg" src="images/Det-min.png" alt="images/Det.png" height="300px" alt="" />
            </a>
            <span className="caption">
                <span className="caption-content">
                  <h2 className="pName mt-1">Detroit Sightings Website</h2>
                  <p className="mb-0">
                  <i className="devicon-html5-plain-wordmark colored pIcon" />
                  <i className="devicon-css3-plain-wordmark colored pIcon" />
                  <i className="devicon-javascript-plain colored pIcon" />
                  <i className="devicon-jquery-plain-wordmark colored pIcon" />
                  <i className="devicon-php-plain colored pIcon"/>
                  <i className="devicon-mysql-plain-wordmark pIcon" />
                  <i className="devicon-git-plain-wordmark colored pIcon" />
                  </p>
                </span>
              </span>
          </div>
           
          {/* <div className="col-lg-6">
            <a className="portfolio-item"  id="p3" href="http://sybeq.com/html/home.html" target="_blank" onMouseEnter={this.iconDisplay}  onMouseLeave={this.iconHide}>
             <div className= "hoverBox" id="hoverBox3">
               <h4 id="display3">Display<i className="fa fa-arrow-right" aria-hidden="true"></i></h4>
             </div>
              <img className="img-fluid projectImg" src="images/SybeqSite-min.png" alt="images/SybeqSite.png" height="300px" alt="" />
            </a>
            <span className="caption">
                <span className="caption-content">
                  <h2 className="pName mt-1">SYBEQ Website</h2>
                  <p className="mb-0">
                  <i className="devicon-html5-plain-wordmark colored pIcon" />
                  <i className="devicon-css3-plain-wordmark colored pIcon" />
                  <i className="devicon-bootstrap-plain-wordmark colored pIcon" />
                  <i className="devicon-javascript-plain colored pIcon" />
                  <i className="devicon-jquery-plain-wordmark colored pIcon" />
                  </p>
                </span>
              </span>
          </div> */}
         {/* <div className="col-lg-6">
            <a className="portfolio-item"  id="p4" href="http://octaviusmoore.com/project3/index.html" target="_blank" onMouseEnter={this.iconDisplay}  onMouseLeave={this.iconHide}>
             <div className= "hoverBox" id="hoverBox4">
               <h4 id="display4">Display<i className="fa fa-arrow-right" aria-hidden="true"></i></h4>
             </div>
              <img className="img-fluid projectImg" src="images/Untitled-min.png" alt="images/Untitled.png" height="300px"  alt="" />
            </a>
            <span className="caption">
                <span className="caption-content">
                  <h2 className="pName mt-1">Dylan Tribute Webpage</h2>
                  <p className="mb-0">
                  <i className="devicon-html5-plain-wordmark colored pIcon" />
                  <i className="devicon-css3-plain-wordmark colored pIcon" />
                  <i className="devicon-javascript-plain colored pIcon" />
                  <i className="devicon-jquery-plain-wordmark colored pIcon" />
                  <i className="devicon-git-plain-wordmark colored pIcon" />
                  <a href="https://github.com/TheBigTuna/dylantribute" target="_blank"><button className="viewCode btn">View Code</button></a>
                  </p>
                </span>
              </span>
          </div> */}
          {/* <div className="col-lg-6">
            <a className="portfolio-item"  id="p4" href="https://octaviusmoore.com/SkateKicks/" target="_blank" onMouseEnter={this.iconDisplay}  onMouseLeave={this.iconHide}>
             <div className= "hoverBox" id="hoverBox4">
               <h4 id="display4">Display<i className="fa fa-arrow-right" aria-hidden="true"></i></h4>
             </div>
              <img className="img-fluid projectImg" src="images/skatekicks-min.png" alt="images/skatekicks.png" height="300px"  alt="" />
            </a>
            <span className="caption">
                <span className="caption-content">
                  <h2 className="pName mt-1">Skatekicks Website</h2>
                  <p className="mb-0">
                  <i className="devicon-wordpress-plain-wordmark colored pIcon" />
                    <a href="https://github.com/TheBigTuna/dylantribute" target="_blank"><button className="viewCode btn">View Code</button></a>
                  </p>
                </span>
              </span>
          </div> */}
             {/* <div className="col-lg-6">
            <a className="portfolio-item" id="p5" href="https://alleuro.com" target="_blank" onMouseEnter={this.iconDisplay}  onMouseLeave={this.iconHide}>
              <div className= "hoverBox" id="hoverBox5">
               <h4 id="display5">Display<i className="fa fa-arrow-right" aria-hidden="true"></i></h4>
             </div>
              <img className="img-fluid projectImg" src="images/AllEuro.png" alt="images/youtube.png" height="300px" alt="" />
            </a>
             <span className="caption">
                <span className="caption-content">
                  <h2 className="pName mt-1">All European Website</h2>
                  <p className="mb-0">
                  <i className="devicon-html5-plain-wordmark colored pIcon" />
                  <i className="devicon-css3-plain-wordmark colored pIcon" />
                  <i className="devicon-bootstrap-plain-wordmark colored pIcon" />
                  <i className="devicon-jquery-plain-wordmark colored pIcon" />
                  <i className="devicon-php-plain colored pIcon"/>
                  <i className="devicon-mysql-plain-wordmark pIcon" />
                  <i className="devicon-git-plain-wordmark colored pIcon" />
                  <a href="https://github.com/TheBigTuna/youtubeplayer" target="_blank"><button className="viewCode btn">View Code</button></a>
                  </p>
                </span>
              </span>
          </div>  */}
          
           {/*<div className="col-lg-6">
            <a className="portfolio-item" href="#" target="_blank">
              <img className="img-fluid projectImg" src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg" height="300px" alt="" />
            </a>
          </div>
            <div className="col-lg-6">
            <a className="portfolio-item" href="#" target="_blank">
              <img className="img-fluid projectImg" src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg" height="300px" alt="" />
            </a>
          </div>*/}
        </div>
      </div>
        </div>
      )
    }
}
