import React, {Component} from 'react';
import './services-cards.scss';
export default class ServicesCards extends Component{
    render(){
        return(
            <div className="servicesCards">
                <div className="left">
                    <h4>WHAT WE DO</h4>
                    <h2>HELPING YOUR BUSINESS THRIVE ONLINE</h2>                
                </div>
                <div className="right">
                    <h4>WORK WITH US</h4>
                    <h2>WE INNOVATE, COLLABORATE AND DEVELOP <br />
                        WE ARE INNCODERS</h2>                
                </div>
            </div>
        );
    }
}