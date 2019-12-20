import React, {Component} from 'react';
import {Modal, SimpleModalWrapped, Typography} from  '@material-ui/core';
import './side-navbar.scss';
import ReactDOM from 'react-dom';

export default class SideNavBar extends Component{
    constructor(){
        super();
        this.state={
            open: false
        }
    } 
    handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
         this.setState({ open: false });
      };
    
      handleContactClick=()=>{
        const item = ReactDOM.findDOMNode(this.refs['contactUs']);
        window.scrollTo(item.offsetTop);
      }
      render() {
          
        return(
            <div>
            <div className="sidebar"> 

                <li className="homeCompany">
                    <a href="/" >
                        ɨռռƈօɖɛ
                    </a>
                </li>
                    <div onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose}>
                    <li >
                        <a href="#" className="services-offered" >
                            Services
                        </a>
                    </li>
                    </div>
                      
                    <li>
                        <a href="/portfolio">
                            PortFolio
                        </a>
                    </li>
                    <li>
                        <a onClick={this.handleContactClick}>
                            Contact Us
                        </a>
                    </li>
            </div>
            <div>
                 {this.state.open ? 
                    <div className="onhoverServices"  onMouseEnter={this.handleOpen} onMouseLeave={this.handleClose}>
                        <a href="/#/webdesign">Web Design</a>
                        <a href="/hosting">Hosting</a>
                        <a href="/jobsupport">Job Support</a>
                    </div>
                    :""}
            </div>
            </div>
        );
    }
}