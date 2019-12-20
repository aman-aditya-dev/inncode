import React, {Component} from 'react';
import {TextField} from '@material-ui/core';
import './project-quotes.scss';
import {Row, Col} from 'react-bootstrap';
import { timingSafeEqual } from 'crypto';

export default class ProjectQuotes extends Component{
    constructor(){
        super();
        this.state={
                name:'',
                organisationName: '',
                website: '',
                email: '',
                contactNumber: '',
                applicatonType: '',
                preferredTime: '',
                quoteFlag: false
        }
    }
    handleChange=(e,name)=>{
        this.setState({[name]:e.target.value})
    }
    handleQuotation=()=>{
        this.setState({quoteFlag: !this.state.quoteFlag})
    }
   render(){
       return(
           <div id="quotes-main-div">
          
            <h2>Wanna discuss a project? </h2> 
            <h3>Let's create the future together.</h3>
            <input type="button" onClick={this.handleQuotation} value="Check for Quotation"/>

                           
           </div>
       );
   }
}

