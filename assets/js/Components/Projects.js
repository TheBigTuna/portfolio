import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class Projects extends React.Component{
    constructor(){
      super();
      this.state ={name: "Octavius"};
    }
    
    render(){
      return(
        <div>
      <div className="container">
        <div className="content-section-heading text-center">
          <h2 className="mb-5 mt-3" id="test">Projects</h2>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6">
            <a className="portfolio-item" href="http://octaviusmoore.com/project1/index.html" target="_blank">
              <img className="img-fluid projectImg" src="../images/polar.png" height="300px" alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="#">
              <img className="img-fluid projectImg" src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg" height="300px" alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="#">
              <img className="img-fluid projectImg" src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg" height="300px"  alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="#">
              <img className="img-fluid projectImg" src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg" height="300" alt="" />
            </a>
          </div>
            <div className="col-lg-6">
            <a className="portfolio-item" href="#">
              <img className="img-fluid projectImg" src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg" height="300px" alt="" />
            </a>
          </div>
            <div className="col-lg-6">
            <a className="portfolio-item" href="#">
              <img className="img-fluid projectImg" src="https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg" height="300px" alt="" />
            </a>
          </div>
        </div>
      </div>
        </div>
      )
    }
}
